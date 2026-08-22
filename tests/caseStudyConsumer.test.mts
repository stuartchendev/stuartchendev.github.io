// @ts-nocheck -- Node's built-in test types are not installed in this Vite-only project.
import assert from "node:assert/strict";
import test from "node:test";
import {z} from "zod";
import {createServer} from "vite";
import {CaseStudyConsumerError, loadProjectCaseStudy, validateProjectCaseStudy} from "../src/content/case-studies/CaseStudyConsumer.mts";

test("the FRL snapshot loads and validates", async () => {
    const vite = await createServer({server: {middlewareMode: true, hmr: false, ws: false}, appType: "custom"});

    try {
        const consumer = await vite.ssrLoadModule("/src/content/case-studies/CaseStudyConsumer.mts");
        const caseStudy = await consumer.loadProjectCaseStudy("frontend-reasoning-lab");
        assert.equal(caseStudy.schemaVersion, 1);
        assert.equal(caseStudy.projectId, "frontend-reasoning-lab");
    } finally {
        await vite.close();
    }
});

test("the Portfolio snapshot loads and validates", async () => {
    const vite = await createServer({server: {middlewareMode: true, hmr: false, ws: false}, appType: "custom"});

    try {
        const consumer = await vite.ssrLoadModule("/src/content/case-studies/CaseStudyConsumer.mts");
        const caseStudy = await consumer.loadProjectCaseStudy("portfolio");
        assert.equal(caseStudy.schemaVersion, 1);
        assert.equal(caseStudy.projectId, "portfolio");
        assert.equal(caseStudy.sections.length, 4);
    } finally {
        await vite.close();
    }
});

test("the Forkify snapshot loads and validates", async () => {
    const vite = await createServer({server: {middlewareMode: true, hmr: false, ws: false}, appType: "custom"});

    try {
        const consumer = await vite.ssrLoadModule("/src/content/case-studies/CaseStudyConsumer.mts");
        const caseStudy = await consumer.loadProjectCaseStudy("forkify");
        assert.equal(caseStudy.schemaVersion, 1);
        assert.equal(caseStudy.projectId, "forkify");
        assert.equal(caseStudy.sections.length, 4);
    } finally {
        await vite.close();
    }
});

test("an unsupported block type fails validation", () => {
    assert.throws(() => validateProjectCaseStudy({
        schemaVersion: 1,
        projectId: "example",
        title: "Example",
        summary: "Example summary",
        sections: [{id: "section", title: "Section", blocks: [{id: "block", type: "video", content: {}, evidenceRefs: [], epistemicStatus: "fact"}]}],
        evidence: [],
        uncertainties: [],
        rejectedClaims: [],
    }), z.ZodError);
});

test("a malformed nested comparison fails validation", () => {
    assert.throws(() => validateProjectCaseStudy({
        schemaVersion: 1,
        projectId: "example",
        title: "Example",
        summary: "Example summary",
        sections: [{
            id: "section",
            title: "Section",
            blocks: [{
                id: "comparison",
                type: "comparison",
                content: {
                    title: "Comparison",
                    sides: [{id: "first", label: "First", summary: "First side"}, {id: "second", label: "Second", summary: "Second side"}],
                    dimensions: [{label: "Dimension", values: {first: "Only one side"}}],
                },
                evidenceRefs: [],
                epistemicStatus: "fact",
            }],
        }],
        evidence: [],
        uncertainties: [],
        rejectedClaims: [],
    }), z.ZodError);
});

test("an unknown project id fails clearly", async () => {
    await assert.rejects(() => loadProjectCaseStudy("unknown-project"), (error: unknown) => {
        assert.ok(error instanceof CaseStudyConsumerError);
        assert.match(error.message, /No structured case-study snapshot.*unknown-project/);
        return true;
    });
});
