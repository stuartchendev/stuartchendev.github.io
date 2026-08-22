// @ts-nocheck -- Node's built-in test types are not installed in this Vite-only project.
import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import {renderToStaticMarkup} from "react-dom/server";
import {MemoryRouter} from "react-router-dom";
import {createServer} from "vite";

test("the validated FRL snapshot renders all five structured block types", async () => {
    const vite = await createServer({server: {middlewareMode: true, hmr: false, ws: false}, appType: "custom"});

    try {
        const [{default: ProjectCaseStudyRenderer}, {loadProjectCaseStudy}] = await Promise.all([
            vite.ssrLoadModule("/src/components/ProjectFocus/ProjectCaseStudyRenderer.tsx"),
            vite.ssrLoadModule("/src/content/case-studies/CaseStudyConsumer.mts"),
        ]);
        const caseStudy = await loadProjectCaseStudy("frontend-reasoning-lab");
        const project = {
            id: "frontend-reasoning-lab",
            title: "Frontend Reasoning Lab",
            shortDescription: "A structured frontend case study.",
            tags: ["React", "TypeScript"],
            detailDescription: "A structured frontend case study.",
        };

        const html = renderToStaticMarkup(
            React.createElement(MemoryRouter, null, React.createElement(ProjectCaseStudyRenderer, {caseStudy, project})),
        );

        for (const blockType of ["prose", "image", "diagram", "comparison", "callout"]) {
            assert.match(html, new RegExp(`focus-structured-block--${blockType}`));
        }
        assert.match(html, /focus-structured-section__number[^>]*>01</);
        assert.match(html, /focus-toc__number[^>]*>01</);
        assert.match(html, /focus-prose-block__lead/);
        assert.match(html, /Validated results enter an application-owned state machine/);
        assert.match(html, /Public production and local development preserve different trust boundaries/);
        assert.match(html, /project-evidence\/frl\/03-revision-comparison\.png/);
    } finally {
        await vite.close();
    }
});

test("the validated Forkify snapshot renders its project-specific story blocks", async () => {
    const vite = await createServer({server: {middlewareMode: true, hmr: false, ws: false}, appType: "custom"});

    try {
        const [{default: ProjectCaseStudyRenderer}, {loadProjectCaseStudy}] = await Promise.all([
            vite.ssrLoadModule("/src/components/ProjectFocus/ProjectCaseStudyRenderer.tsx"),
            vite.ssrLoadModule("/src/content/case-studies/CaseStudyConsumer.mts"),
        ]);
        const caseStudy = await loadProjectCaseStudy("forkify");
        const project = {
            id: "forkify",
            title: "Forkify",
            shortDescription: "A recipe application extended with page-scoped data transformations.",
            tags: ["JavaScript", "MVC"],
            detailDescription: "A recipe application extended with page-scoped data transformations.",
        };

        const html = renderToStaticMarkup(
            React.createElement(MemoryRouter, null, React.createElement(ProjectCaseStudyRenderer, {caseStudy, project})),
        );

        assert.match(html, /From search summaries to transformable visible-page state/);
        assert.match(html, /Partial update versus full render/);
        assert.match(html, /MVC was the starting point, not the extension/);
        assert.match(html, /A page-scoped store, not a general cache/);
        assert.match(html, /focus-structured-block--diagram/);
        assert.match(html, /focus-structured-block--comparison/);
        assert.match(html, /focus-structured-section__number[^>]*>04</);
    } finally {
        await vite.close();
    }
});
