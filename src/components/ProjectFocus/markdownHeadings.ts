export type MarkdownHeading = {
    depth: 2 | 3;
    label: string;
    id: string;
    sourceLine: number;
    sectionNumber?: string;
};

export function createHeadingSlugger() {
    const occurrences = new Map<string, number>();

    return (label: string) => {
        const baseSlug = label
            .trim()
            .toLowerCase()
            .normalize("NFKD")
            .replace(/[^\p{Letter}\p{Number}\s-]/gu, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "") || "section";

        const occurrence = (occurrences.get(baseSlug) ?? 0) + 1;
        occurrences.set(baseSlug, occurrence);

        return occurrence === 1 ? baseSlug : `${baseSlug}-${occurrence}`;
    };
}

export function extractMarkdownHeadings(markdown: string): MarkdownHeading[] {
    const slug = createHeadingSlugger();

    return markdown.split("\n").flatMap((line, index) => {
        const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
        if (!match) return [];

        const hashes = match[1]!;
        const label = match[2]!.replace(/[*_`]/g, "").trim();
        return [{
            depth: hashes.length as 2 | 3,
            label,
            id: slug(label),
            sourceLine: index + 1,
        }];
    });
}
