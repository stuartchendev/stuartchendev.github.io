export type LocalMarkdownContent = {
    kind: "local-markdown";
    load: () => Promise<string>;
};

const projectContent: Record<string, LocalMarkdownContent> = {
    "frontend-reasoning-lab": {
        kind: "local-markdown",
        load: () => import("../../content/projects/frontend-reasoning-lab.md?raw").then((module) => module.default),
    },
};

export function getProjectContent(projectId: string) {
    return projectContent[projectId];
}
