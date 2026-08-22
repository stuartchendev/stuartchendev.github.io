import type {ProjectCaseStudy} from "./projectCaseStudySchema.mts";

const DEFAULT_WORDS_PER_MINUTE = 200;

type CaseStudyBlock = ProjectCaseStudy["sections"][number]["blocks"][number];

export type CaseStudyReadingMetadata = {
    wordCount: number;
    minutes: number;
};

function getBlockReadableText(block: CaseStudyBlock): string[] {
    switch (block.type) {
        case "prose":
            return block.content.paragraphs;
        case "image":
            return [block.content.caption];
        case "diagram": {
            const nodeLabels = new Map(block.content.nodes.map((node) => [node.id, node.label]));
            return [
                block.content.title,
                ...block.content.nodes.flatMap((node) => [node.label, node.responsibility]),
                ...block.content.relationships.flatMap((relationship) => [
                    nodeLabels.get(relationship.from) ?? "",
                    nodeLabels.get(relationship.to) ?? "",
                    relationship.label,
                ]),
            ];
        }
        case "comparison":
            return [
                block.content.title,
                ...block.content.sides.flatMap((side) => [side.label, side.summary]),
                ...block.content.dimensions.flatMap((dimension) => [
                    dimension.label,
                    ...Object.values(dimension.values),
                ]),
            ];
        case "callout":
            return [block.content.kind, block.content.title, block.content.body];
    }
}

function countReadableWords(strings: string[]) {
    return strings
        .flatMap((value) => value.trim().split(/\s+/u))
        .filter((token) => /[\p{L}\p{N}]/u.test(token))
        .length;
}

export function deriveCaseStudyReadingMetadata(
    caseStudy: ProjectCaseStudy,
    wordsPerMinute = DEFAULT_WORDS_PER_MINUTE,
): CaseStudyReadingMetadata {
    if (!Number.isFinite(wordsPerMinute) || wordsPerMinute <= 0) {
        throw new RangeError("Reading speed must be a positive number.");
    }

    const readableText = [
        caseStudy.title,
        caseStudy.summary,
        ...caseStudy.sections.flatMap((section) => [
            section.title,
            ...section.blocks.flatMap(getBlockReadableText),
        ]),
    ];
    const wordCount = countReadableWords(readableText);

    return {
        wordCount,
        minutes: Math.max(1, Math.ceil(wordCount / wordsPerMinute)),
    };
}
