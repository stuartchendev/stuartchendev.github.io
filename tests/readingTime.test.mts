// @ts-nocheck -- Node's built-in test types are not installed in this Vite-only project.
import assert from "node:assert/strict";
import test from "node:test";
import {deriveCaseStudyReadingMetadata} from "../src/content/case-studies/readingTime.mts";

const caseStudy = {
    schemaVersion: 1,
    projectId: "example",
    title: "Project title",
    summary: "Short summary",
    sections: [{
        id: "main-section",
        title: "Main section",
        blocks: [
            {id: "prose", type: "prose", content: {paragraphs: ["First paragraph"]}, evidenceRefs: [], epistemicStatus: "fact"},
            {id: "image", type: "image", content: {source: "/image.png", alt: "Excluded alternative text", caption: "Image caption", narrativeRole: "Excluded narrative role"}, evidenceRefs: [], epistemicStatus: "fact"},
            {
                id: "diagram",
                type: "diagram",
                content: {
                    title: "System flow",
                    nodes: [
                        {id: "client", label: "Client", responsibility: "Starts work"},
                        {id: "server", label: "Server", responsibility: "Finishes work"},
                    ],
                    relationships: [{from: "client", to: "server", label: "Sends request"}],
                },
                evidenceRefs: [],
                epistemicStatus: "fact",
            },
            {
                id: "comparison",
                type: "comparison",
                content: {
                    title: "Mode comparison",
                    sides: [
                        {id: "local", label: "Local", summary: "Runs locally"},
                        {id: "public", label: "Public", summary: "Runs publicly"},
                    ],
                    dimensions: [{label: "Runtime", values: {local: "Local only", public: "Public replay"}}],
                },
                evidenceRefs: [],
                epistemicStatus: "fact",
            },
            {id: "callout", type: "callout", content: {kind: "result", title: "Outcome", body: "State stays local"}, evidenceRefs: [], epistemicStatus: "fact"},
        ],
    }],
    evidence: [{id: "excluded", source: "Excluded source", supports: ["Excluded supporting evidence"]}],
    uncertainties: ["Excluded uncertainty"],
    rejectedClaims: ["Excluded rejected claim"],
};

test("reading metadata counts rendered case-study text and excludes review metadata", () => {
    assert.deepEqual(deriveCaseStudyReadingMetadata(caseStudy, 20), {
        wordCount: 40,
        minutes: 2,
    });
});

test("reading metadata rejects an invalid reading speed", () => {
    assert.throws(() => deriveCaseStudyReadingMetadata(caseStudy, 0), RangeError);
});
