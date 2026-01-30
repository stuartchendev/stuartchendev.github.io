export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    tags: string[];
    // optional
    image?: string[];
    year?: string;
    githubLink?: string;
    demoLink?: string;
    challenges?: string[];
    features?: string[];
}