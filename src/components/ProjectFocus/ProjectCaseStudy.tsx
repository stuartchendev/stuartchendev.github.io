import {Children, type ReactNode} from "react";
import ReactMarkdown from "react-markdown";
import {extractMarkdownHeadings} from "./markdownHeadings";
import ProjectTableOfContents from "./ProjectTableOfContents";
import type {Project} from "../../types/project";
import {
    ApplicationOwnershipFlow,
    OverviewEvidence,
    ProblemBoundaryComparison,
    ResultSummary,
    RevisionEvidence,
    ValidationFlow,
} from "./ProjectEvidence";
import BackToProjectsLink from "./BackToProjectsLink";

type ProjectCaseStudyProps = {
    markdown: string;
    project: Project;
};

function textFromChildren(children: ReactNode): string {
    return Children.toArray(children)
        .map((child) => typeof child === "string" || typeof child === "number" ? String(child) : "")
        .join("");
}

function ProjectCaseStudy({markdown, project}: ProjectCaseStudyProps) {
    const headings = extractMarkdownHeadings(markdown);
    const headingIdBySourceLine = new Map(headings.map((heading) => [heading.sourceLine, heading.id]));

    return (
        <div className="focus-layout">
            <aside className="focus-context-rail" aria-label="Project context">
                <div className="focus-context-rail__project">
                    <p className="focus-context-rail__label">Case study</p>
                    <p className="focus-context-rail__name">{project.title}</p>
                    <ul className="focus-context-rail__tags" aria-label="Project technologies">
                        {project.tags.slice(0, 4).map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    {(project.githubLink || project.demoLink) && (
                        <div className="focus-context-rail__links">
                            {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer">Repo ↗</a>}
                            {project.demoLink && <a href={project.demoLink} target="_blank" rel="noreferrer">Live demo ↗</a>}
                        </div>
                    )}
                </div>
                <ProjectTableOfContents headings={headings}/>
                <div className="focus-context-rail__exit">
                    <BackToProjectsLink className="focus-back--rail"/>
                </div>
            </aside>
            <article className="focus-article">
                <ReactMarkdown
                    components={{
                        h2: ({children, node}) => {
                            const label = textFromChildren(children);
                            const id = headingIdBySourceLine.get(node.position?.start.line ?? -1) ?? label;
                            return (
                                <>
                                    <h2 id={id}>{children}</h2>
                                    {id === "overview" && <OverviewEvidence/>}
                                    {id === "problem" && <ProblemBoundaryComparison/>}
                                    {id === "result" && <ResultSummary/>}
                                </>
                            );
                        },
                        h3: ({children, node}) => {
                            const label = textFromChildren(children);
                            const id = headingIdBySourceLine.get(node.position?.start.line ?? -1) ?? label;
                            return (
                                <>
                                    <h3 id={id}>{children}</h3>
                                    {id === "application-owned-workflow" && <ApplicationOwnershipFlow/>}
                                    {id === "validated-ai-boundaries" && <ValidationFlow/>}
                                    {id === "revision-comparison" && <RevisionEvidence/>}
                                </>
                            );
                        },
                        a: ({children, href}) => (
                            <a href={href} target={href?.startsWith("http") ? "_blank" : undefined}
                               rel={href?.startsWith("http") ? "noreferrer" : undefined}>
                                {children}
                            </a>
                        ),
                    }}
                >
                    {markdown}
                </ReactMarkdown>
                <div className="focus-article__exit">
                    <BackToProjectsLink className="focus-back--article"/>
                </div>
            </article>
        </div>
    );
}

export default ProjectCaseStudy;
