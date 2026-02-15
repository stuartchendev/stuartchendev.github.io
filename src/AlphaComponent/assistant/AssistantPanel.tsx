import {
    type AnswerPayload,
    type AssistantAction,
    assistantReducer,
    type ComparePayload, type FilterId,
    type FollowUpsPayload, initialAssistantState,
    type ToolRegistry
} from "./assistantTypes";
import {useMemo, useReducer, useState} from "react";
import {buildRegistry} from "./assistantRegistry";
import {validatePlan} from "./guardrails";

/* --- Example: static dataset (read-only) could be easy change --- */
type Project = {
    id: string;
    title: string;
    tags: FilterId[];
    highlights: string[];
};

const PROJECTS: Project[] = [
    {
        id: "portfolio",
        title: "React + TypeScript Portfolio",
        tags: ["state-management", "derived-state", "typescript", "architecture", "ui"],
        highlights: ["activeProjectId as source of truth", "derived state: selectedProject", "i18n with clear responsibilities"],
    },
    {
        id: "forkify",
        title: "Forkify (MVC + state-driven data flow)",
        tags: ["architecture", "api", "state-management"],
        highlights: ["MVC refactor", "state-driven rendering", "API integration patterns"],
    },
];


function Card({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12, background: "#fff" }}>{children}</div>
    );
}

export function AnswerCard({ data }: { data: AnswerPayload }) {
    return (
        <Card>
            <h3 style={{ margin: "0 0 8px 0" }}>Answer (mode: {data.mode})</h3>
            <div style={{ fontSize: 14, lineHeight: 1.5 }}>
                <p style={{ margin: "8px 0" }}>
                    <b>What:</b> {data.what}
                </p>
                <p style={{ margin: "8px 0" }}>
                    <b>Why:</b> {data.why}
                </p>
                <div style={{ margin: "8px 0" }}>
                    <b>Trade-offs:</b>
                    <ul style={{ margin: "6px 0 0 18px" }}>
                        {data.tradeoffs.map((t, i) => (
                            <li key={i}>{t}</li>
                        ))}
                    </ul>
                </div>
                {data.highlights?.length ? (
                    <div style={{ margin: "8px 0" }}>
                        <b>Highlights:</b>
                        <ul style={{ margin: "6px 0 0 18px" }}>
                            {data.highlights.map((h, i) => (
                                <li key={i}>{h}</li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </div>
        </Card>
    );
}

export function ComparisonTable({ data }: { data: ComparePayload }) {
    return (
        <Card>
            <h3 style={{ margin: "0 0 8px 0" }}>
                Compare: {data.leftProjectId} vs {data.rightProjectId}
            </h3>

            <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Dimension</th>
                        <th style={thStyle}>Left</th>
                        <th style={thStyle}>Right</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.rows.map((r, i) => (
                        <tr key={i}>
                            <td style={tdStyle}>{r.dimension}</td>
                            <td style={tdStyle}>{r.left}</td>
                            <td style={tdStyle}>{r.right}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}

const thStyle: React.CSSProperties = { textAlign: "left", borderBottom: "1px solid #eee", padding: "8px 6px" };
const tdStyle: React.CSSProperties = { borderBottom: "1px solid #f3f3f3", padding: "8px 6px", verticalAlign: "top" };

export function FollowUpQuestions({ data }: { data: FollowUpsPayload }) {
    return (
        <Card>
            <h3 style={{ margin: "0 0 8px 0" }}>Follow-up Questions</h3>
            <ul style={{ margin: "6px 0 0 18px" }}>
                {data.questions.map((q, i) => (
                    <li key={i}>{q}</li>
                ))}
            </ul>
        </Card>
    );
}

export function ActionLogPanel({ actions }: { actions: AssistantAction[] }) {

    return (
        <Card>
            <h3 style={{ margin: "0 0 8px 0" }}>Applied Actions</h3>
            <ol style={{ margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.5 }}>
                {actions.slice(-12).map((a, i) => (
                    <li key={i}>
                        <code>{a.type}</code>
                        {" - "}
                        <span style={{opacity: 0.85}}>
                            {summarizeAction(a)}
                        </span>
                        {a.type === "NOOP" ? <span style={{marginLeft: 6}}>(blocked)</span> : null}
                    </li>
                ))}
            </ol>
        </Card>
    );
}

function summarizeAction(a: AssistantAction): string {
    switch (a.type) {
        case "SET_INTENT":
            return a.intent;
        case "SET_ACTIVE_PROJECT":
            return `projectId=${a.projectId}`;
        case "SET_LANGUAGE":
            return `language=${a.languageId}`;
        case "APPLY_FILTERS":
            return `${a.mode}: [${a.filters.join(", ")}]`;
        case "FOCUS_SECTION":
            return `section=${a.sectionId ?? "none"}`;
        case "RENDER_VIEW":
            return `view=${a.view}`;
        case "CLEAR_VIEW":
            return "clear view";
        case "NOOP":
            return `reason=${a.reason}`;
        default: {
            const _x: never = a;
            return String(_x);
        }
    }
}


function buildPlanFromIntent(intent: string, registry: ToolRegistry): AssistantAction[] {
    const normalized = intent.toLowerCase();

    // Very small deterministic router (safe to demo + easy to test)
    if (normalized.includes("compare")) {
        const payload = registry.headless.CompareGenerator.run({
            leftProjectId: "portfolio",
            rightProjectId: "forkify",
        });

        return [
            { type: "SET_INTENT", intent },
            { type: "SET_ACTIVE_PROJECT", projectId: "portfolio" },
            { type: "FOCUS_SECTION", sectionId: "tradeoffs" },
            { type: "RENDER_VIEW", view: "compare", payload },
        ];
    }

    if (normalized.includes("follow") || normalized.includes("question")) {
        const payload = registry.headless.FollowUpsGenerator.run({ projectId: "portfolio" });
        return [
            { type: "SET_INTENT", intent },
            { type: "SET_ACTIVE_PROJECT", projectId: "portfolio" },
            { type: "RENDER_VIEW", view: "followups", payload },
        ];
    }

    if (normalized.includes("state") || normalized.includes("answer")) {
        const payload = registry.headless.AnswerGenerator.run({
            projectId: "portfolio",
            mode: "60sec",
        });

        return [
            { type: "SET_INTENT", intent },
            { type: "SET_ACTIVE_PROJECT", projectId: "portfolio" },
            { type: "APPLY_FILTERS", filters: ["state-management"], mode: "replace" },
            { type: "FOCUS_SECTION", sectionId: "state" },
            { type: "RENDER_VIEW", view: "answer", payload },
        ];
    }

    return [
        { type: "SET_INTENT", intent },
        { type: "NOOP", reason: "Intent not supported in Interview Mode" },
    ];
}

export function AssistantPanel() {
    const [state, dispatch] = useReducer(assistantReducer, initialAssistantState);
    const [input, setInput] = useState("");

    const registry = useMemo(() => buildRegistry(PROJECTS), []);

    const onRun = () => {
        const intent = input.trim();
        if (!intent) {
            dispatch({ type: "NOOP", reason: "Empty intent" });
            return;
        }

        const plan = buildPlanFromIntent(intent, registry);
        const safePlan = validatePlan(plan);
        safePlan.forEach((a) => dispatch(a));
    };

    const onClear = () => dispatch({ type: "CLEAR_VIEW" });

    return (
        <div style={{ display: "grid", gap: 12, maxWidth: 920 }}>
            <Card>
                <h2 style={{ margin: "0 0 8px 0" }}>Interview Assistant Mode</h2>
                <p style={{ margin: "0 0 12px 0", fontSize: 14, opacity: 0.85 }}>
                    Controlled assistant: intent → action plan → state-driven UI. No free-form chat, no UI generation.
                </p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Try: "Show me state management" / "Compare projects" / "Give follow-up questions"'
                        style={{ flex: "1 1 420px", padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" }}
                    />
                    <button onClick={onRun} style={btnStyle}>
                        Run
                    </button>
                    <button onClick={onClear} style={{ ...btnStyle, background: "#fff" }}>
                        Clear View
                    </button>
                </div>

                <div style={{ marginTop: 10, fontSize: 13, opacity: 0.85 }}>
                    <b>State snapshot:</b>{" "}
                    {JSON.stringify(
                        {
                            activeProjectId: state.activeProjectId,
                            language: state.activeLanguageId,
                            filters: state.filters,
                            section: state.focusedSectionId,
                            view: state.view,
                        },
                        null,
                        0
                    )}
                </div>
            </Card>

            {/* Rendered view (controlled) */}
            {state.payload?.type === "answer" ? <AnswerCard data={state.payload.data} /> : null}
            {state.payload?.type === "compare" ? <ComparisonTable data={state.payload.data} /> : null}
            {state.payload?.type === "followups" ? <FollowUpQuestions data={state.payload.data} /> : null}

            {/* Transparency layer */}
            <ActionLogPanel actions={state.actionLog} />
        </div>
    );
}

const btnStyle: React.CSSProperties = {
    padding: "10px 14px",
    borderRadius: 10,
    border: "1px solid #ddd",
    background: "#f7f7f7",
    cursor: "pointer",
};
