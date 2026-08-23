import type {Project} from "../../../types/project";

const hiddenProjectIds = new Set(["mapty"]);

function isProjectVisible({id}: Pick<Project, "id">) {
    return !hiddenProjectIds.has(id);
}

export function getVisibleProjects(projects: Project[]) {
    return projects.filter(isProjectVisible);
}

export function findVisibleProject(projects: Project[], projectId: Project["id"] | null) {
    if (!projectId) return null;
    return projects.find((project) => project.id === projectId && isProjectVisible(project)) ?? null;
}
