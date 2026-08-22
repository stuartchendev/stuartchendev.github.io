import {z} from "zod";

const nonEmptyString = z.string().min(1);

const blockMetadataSchema = z.strictObject({
    id: nonEmptyString,
    evidenceRefs: z.array(nonEmptyString),
    epistemicStatus: nonEmptyString,
});

const proseBlockSchema = blockMetadataSchema.extend({
    type: z.literal("prose"),
    content: z.strictObject({
        paragraphs: z.array(nonEmptyString).min(1),
    }),
});

const imageBlockSchema = blockMetadataSchema.extend({
    type: z.literal("image"),
    content: z.strictObject({
        source: nonEmptyString,
        alt: nonEmptyString,
        caption: nonEmptyString,
        narrativeRole: nonEmptyString,
    }),
});

const diagramBlockSchema = blockMetadataSchema.extend({
    type: z.literal("diagram"),
    content: z.strictObject({
        title: nonEmptyString,
        nodes: z.array(z.strictObject({
            id: nonEmptyString,
            label: nonEmptyString,
            responsibility: nonEmptyString,
        })).min(1),
        relationships: z.array(z.strictObject({
            from: nonEmptyString,
            to: nonEmptyString,
            label: nonEmptyString,
        })),
    }).superRefine((content, context) => {
        const nodeIds = new Set(content.nodes.map((node) => node.id));
        for (const relationship of content.relationships) {
            if (!nodeIds.has(relationship.from)) {
                context.addIssue({code: "custom", path: ["relationships"], message: `Unknown diagram node: ${relationship.from}`});
            }
            if (!nodeIds.has(relationship.to)) {
                context.addIssue({code: "custom", path: ["relationships"], message: `Unknown diagram node: ${relationship.to}`});
            }
        }
    }),
});

const comparisonBlockSchema = blockMetadataSchema.extend({
    type: z.literal("comparison"),
    content: z.strictObject({
        title: nonEmptyString,
        sides: z.array(z.strictObject({
            id: nonEmptyString,
            label: nonEmptyString,
            summary: nonEmptyString,
        })).min(2),
        dimensions: z.array(z.strictObject({
            label: nonEmptyString,
            values: z.record(nonEmptyString, nonEmptyString),
        })).min(1),
    }).superRefine((content, context) => {
        const sideIds = content.sides.map((side) => side.id);
        for (const [index, dimension] of content.dimensions.entries()) {
            const valueIds = Object.keys(dimension.values);
            if (sideIds.some((sideId) => !valueIds.includes(sideId)) || valueIds.some((valueId) => !sideIds.includes(valueId))) {
                context.addIssue({code: "custom", path: ["dimensions", index, "values"], message: "Comparison values must match the declared side ids"});
            }
        }
    }),
});

const calloutBlockSchema = blockMetadataSchema.extend({
    type: z.literal("callout"),
    content: z.strictObject({
        kind: nonEmptyString,
        title: nonEmptyString,
        body: nonEmptyString,
    }),
});

export const caseStudyBlockSchema = z.discriminatedUnion("type", [
    proseBlockSchema,
    imageBlockSchema,
    diagramBlockSchema,
    comparisonBlockSchema,
    calloutBlockSchema,
]);

export const projectCaseStudySchema = z.strictObject({
    schemaVersion: z.literal(1),
    projectId: nonEmptyString,
    title: nonEmptyString,
    summary: nonEmptyString,
    sections: z.array(z.strictObject({
        id: nonEmptyString,
        title: nonEmptyString,
        blocks: z.array(caseStudyBlockSchema).min(1),
    })).min(1),
    evidence: z.array(z.strictObject({
        id: nonEmptyString,
        source: nonEmptyString,
        supports: z.array(nonEmptyString).min(1),
    })),
    uncertainties: z.array(nonEmptyString),
    rejectedClaims: z.array(nonEmptyString),
});

export type ProjectCaseStudy = z.infer<typeof projectCaseStudySchema>;
