export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    tags: string[];
    // optional
    // for project card thumbnail
    thumbnailSrc?: string;
    thumbnailAlt?: string;
    image?: string[];
    year?: string;
    githubLink?: string;
    demoLink?: string;
    challenges?: string[];
    features?: string[];
}