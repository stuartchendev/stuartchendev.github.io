
import {
    type AnswerPayload,
    type CompareRow,
    type FilterId, type ToolRegistry,
    type ViewPayload
} from "./assistantTypes";
import {ActionLogPanel, AnswerCard, ComparisonTable, FollowUpQuestions} from "./AssistantPanel";

/* =========================================================
   1) Static Registry Design
   ========================================================= */

/* --- Example: static dataset (read-only) --- */
type Project = {
    id: string;
    title: string;
    tags: FilterId[];
    highlights: string[];
};

export function buildRegistry(projects: Project[]): ToolRegistry {
    return {
        headless: {
            AnswerGenerator: {
                description: "Generate a structured interview-style answer payload.",
                run: ({ projectId, mode }: { projectId: string; mode: AnswerPayload["mode"] }): ViewPayload => {
                    const p = projects.find((x) => x.id === projectId);
                    if (!p) {
                        return { type: "answer", data: { projectId, mode, what: "Unknown project", why: "", tradeoffs: [] } };
                    }

                    // Minimal deterministic output (you can later enrich by reading your real project JSON)
                    const base: AnswerPayload = {
                        projectId,
                        mode,
                        what: `${p.title} focusing on controlled UI state and clear data flow.`,
                        why: "Designed to demonstrate predictable UI behavior, separation of concerns, and interview-ready explanations.",
                        tradeoffs: [
                            "Strict schemas increase reliability but reduce free-form flexibility.",
                            "Agent actions are transparent and testable but require upfront design effort.",
                        ],
                        highlights: p.highlights,
                    };

                    return { type: "answer", data: base };
                },
            },

            CompareGenerator: {
                description: "Generate a fixed-dimension comparison between two projects.",
                run: ({ leftProjectId, rightProjectId }: { leftProjectId: string; rightProjectId: string }): ViewPayload => {
                    const left = projects.find((x) => x.id === leftProjectId);
                    const right = projects.find((x) => x.id === rightProjectId);

                    const rows: CompareRow[] = [
                        {
                            dimension: "Problem",
                            left: left ? `Showcases: ${left.title}` : "Unknown",
                            right: right ? `Showcases: ${right.title}` : "Unknown",
                        },
                        {
                            dimension: "State Design",
                            left: left ? "ID as source of truth + derived entity state." : "—",
                            right: right ? "Central state object + render driven by state." : "—",
                        },
                        {
                            dimension: "Data Flow",
                            left: "User intent → state patch → render.",
                            right: "Events → controller/state → view render.",
                        },
                        {
                            dimension: "Trade-offs",
                            left: "Predictable UI at cost of more explicit mapping logic.",
                            right: "Clear responsibilities at cost of boilerplate layers.",
                        },
                    ];

                    return {
                        type: "compare",
                        data: {
                            leftProjectId,
                            rightProjectId,
                            rows,
                        },
                    };
                },
            },

            FollowUpsGenerator: {
                description: "Generate follow-up interview questions for the selected project.",
                run: ({ projectId }: { projectId: string }): ViewPayload => {
                    return {
                        type: "followups",
                        data: {
                            projectId,
                            questions: [
                                "Why did you choose an active ID + derived state instead of storing the whole entity?",
                                "How do you prevent inconsistent UI when state updates happen quickly?",
                                "What trade-offs did you accept for MVP vs extensibility?",
                            ],
                        },
                    };
                },
            },
        },

        rendered: {
            AnswerCard: {
                description: "Renders structured interview answer.",
                Component: AnswerCard,
            },
            ComparisonTable: {
                description: "Renders fixed-dimension comparison table.",
                Component: ComparisonTable,
            },
            FollowUpQuestions: {
                description: "Renders follow-up question list.",
                Component: FollowUpQuestions,
            },
            ActionLogPanel: {
                description: "Shows applied actions for transparency.",
                Component: ActionLogPanel,
            },
        },
    };
}

