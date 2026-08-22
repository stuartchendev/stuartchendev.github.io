import {z} from "zod";
import {projectCaseStudySchema, type ProjectCaseStudy} from "./projectCaseStudySchema.mts";

type SnapshotLoader = () => Promise<{default: unknown}>;

const snapshotLoaders: Record<string, SnapshotLoader> = {
    "frontend-reasoning-lab": () => import("./snapshots/frontend-reasoning-lab.json"),
    "forkify": () => import("./snapshots/forkify.json"),
    "portfolio": () => import("./snapshots/portfolio.json"),
};

export class CaseStudyConsumerError extends Error {
    constructor(message: string, options?: ErrorOptions) {
        super(message, options);
        this.name = "CaseStudyConsumerError";
    }
}

export function validateProjectCaseStudy(value: unknown): ProjectCaseStudy {
    return projectCaseStudySchema.parse(value);
}

export async function loadProjectCaseStudy(projectId: string): Promise<ProjectCaseStudy> {
    const loadSnapshot = snapshotLoaders[projectId];
    if (!loadSnapshot) {
        throw new CaseStudyConsumerError(`No structured case-study snapshot is registered for project id \"${projectId}\".`);
    }

    try {
        const snapshot = await loadSnapshot();
        const caseStudy = validateProjectCaseStudy(snapshot.default);
        if (caseStudy.projectId !== projectId) {
            throw new CaseStudyConsumerError(`Structured case-study project id \"${caseStudy.projectId}\" does not match requested id \"${projectId}\".`);
        }
        return caseStudy;
    } catch (error) {
        if (error instanceof CaseStudyConsumerError) throw error;
        if (error instanceof z.ZodError) {
            throw new CaseStudyConsumerError(`Structured case-study snapshot for project id \"${projectId}\" is invalid: ${z.prettifyError(error)}`, {cause: error});
        }
        throw new CaseStudyConsumerError(`Unable to load structured case-study snapshot for project id \"${projectId}\".`, {cause: error});
    }
}
