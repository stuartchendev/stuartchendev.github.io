// @ts-nocheck -- Node's built-in test types are not installed in this Vite-only project.
import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import {renderToStaticMarkup} from "react-dom/server";
import {MemoryRouter} from "react-router-dom";
import {createServer} from "vite";

test("the visible project list keeps Mapty data out of the v3.5 presentation", async () => {
    const vite = await createServer({server: {middlewareMode: true, hmr: false, ws: false}, appType: "custom"});

    try {
        const [{default: ProjectsList}, {projectsData}, {findVisibleProject, getVisibleProjects}] = await Promise.all([
            vite.ssrLoadModule("/src/components/MainLayout/ProjectsPage/ProjectsList.tsx"),
            vite.ssrLoadModule("/src/data/project/projectsData.ts"),
            vite.ssrLoadModule("/src/components/MainLayout/ProjectsPage/projectVisibility.ts"),
        ]);

        for (const [languageId, projects] of Object.entries(projectsData)) {
            const visibleProjects = getVisibleProjects(projects);
            const html = renderToStaticMarkup(
                React.createElement(
                    MemoryRouter,
                    null,
                    React.createElement(ProjectsList, {projects: visibleProjects, onSelect: () => {}}),
                ),
            );
            const mapty = projects.find((project) => project.id === "mapty");

            assert.ok(mapty, `expected Mapty data to remain available for ${languageId}`);
            assert.ok(!html.includes(mapty.title), `expected Mapty to stay hidden for ${languageId}`);
            assert.equal(findVisibleProject(projects, "mapty"), null);

            for (const project of visibleProjects) {
                assert.ok(html.includes(project.title), `expected ${project.id} to remain visible for ${languageId}`);
                assert.equal(findVisibleProject(projects, project.id), project);
            }
        }
    } finally {
        await vite.close();
    }
});
