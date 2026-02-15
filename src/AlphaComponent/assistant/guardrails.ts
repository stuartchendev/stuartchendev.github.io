// src/assistant/guardrails.ts
import type { AssistantAction, FilterId, LanguageId, SectionId } from "./assistantTypes";

// static for test change for letter
const ALLOWED_PROJECT_IDS = new Set<string>(["portfolio", "forkify"]);

const ALLOWED_FILTERS = new Set<FilterId>([
    "state-management",
    "derived-state",
    "typescript",
    "architecture",
    "ui",
    "api",
]);

const ALLOWED_SECTIONS = new Set<SectionId>([
    "overview",
    "state",
    "dataflow",
    "tradeoffs",
    "highlights",
    "links",
]);

const ALLOWED_LANGUAGES = new Set<LanguageId>(["en", "zh", "jp"]);

function validateAction(action: AssistantAction): AssistantAction {
    switch (action.type) {
        case "SET_ACTIVE_PROJECT":
            return ALLOWED_PROJECT_IDS.has(action.projectId)
                ? action
                : { type: "NOOP", reason: `Invalid projectId: ${action.projectId}` };

        case "SET_LANGUAGE":
            return ALLOWED_LANGUAGES.has(action.languageId)
                ? action
                : { type: "NOOP", reason: `Invalid languageId: ${action.languageId}` };

        case "APPLY_FILTERS": {
            const invalid = action.filters.filter((f) => !ALLOWED_FILTERS.has(f));
            return invalid.length === 0
                ? action
                : { type: "NOOP", reason: `Invalid filters: ${invalid.join(", ")}` };
        }

        case "FOCUS_SECTION":
            return action.sectionId === null || ALLOWED_SECTIONS.has(action.sectionId)
                ? action
                : { type: "NOOP", reason: `Invalid sectionId: ${action.sectionId}` };

        case "RENDER_VIEW": {

            const p = action.payload;

            if (p.type === "answer" && !ALLOWED_PROJECT_IDS.has(p.data.projectId)) {
                return { type: "NOOP", reason: `Invalid payload.projectId: ${p.data.projectId}` };
            }
            if (
                p.type === "compare" &&
                (!ALLOWED_PROJECT_IDS.has(p.data.leftProjectId) || !ALLOWED_PROJECT_IDS.has(p.data.rightProjectId))
            ) {
                return {
                    type: "NOOP",
                    reason: `Invalid compare projectId(s): ${p.data.leftProjectId}, ${p.data.rightProjectId}`,
                };
            }
            if (p.type === "followups" && !ALLOWED_PROJECT_IDS.has(p.data.projectId)) {
                return { type: "NOOP", reason: `Invalid followups projectId: ${p.data.projectId}` };
            }

            return action;
        }

        case "SET_INTENT":
        case "CLEAR_VIEW":
        case "NOOP":
            return action;

        default: {
            const _exhaustive: never = action;
            return _exhaustive;
        }
    }
}

export function validatePlan(actions: AssistantAction[]): AssistantAction[] {
    return actions.map(validateAction);
}
