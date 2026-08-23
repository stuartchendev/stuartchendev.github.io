export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    tags: string[];
    // optional
    // for project card thumbnail
    thumbnailSrc?: string;
    thumbnailAlt?: string;
    thumbnailCaption?: string;
    image?: string[];
    year?: string;
    githubLink?: string;
    demoLink?: string;
    detailDescription: string;
    challenges?: string[];
    features?: string[];
}