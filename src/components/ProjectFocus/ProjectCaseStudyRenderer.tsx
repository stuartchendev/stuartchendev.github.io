import type {Project} from "../../types/project";
import type {ProjectCaseStudy} from "../../content/case-studies/projectCaseStudySchema.mts";
import ProjectTableOfContents from "./ProjectTableOfContents";
import BackToProjectsLink from "./BackToProjectsLink";

type CaseStudyBlock = ProjectCaseStudy["sections"][number]["blocks"][number];
type BlockOfType<T extends CaseStudyBlock["type"]> = Extract<CaseStudyBlock, {type: T}>;

type ProjectCaseStudyRendererProps = {
    caseStudy: ProjectCaseStudy;
    project: Project;
};

function ProseBlock({block, isSectionLead}: {block: BlockOfType<"prose">; isSectionLead: boolean}) {
    return (
        <div className={`focus-prose-block${isSectionLead ? " focus-prose-block--lead" : ""}`}>
            {block.content.paragraphs.map((paragraph, index) => (
                <p className={isSectionLead && index === 0 ? "focus-prose-block__lead" : undefined}
                   key={`${block.id}-${index}`}>
                    {paragraph}
                </p>
            ))}
        </div>
    );
}

function ImageBlock({block}: {block: BlockOfType<"image">}) {
    return (
        <figure className="focus-evidence focus-evidence--screenshot focus-structured-image">
            <div className="focus-evidence__image-frame">
                <img src={block.content.source} alt={block.content.alt} loading="lazy"/>
            </div>
            <figcaption>{block.content.caption}</figcaption>
        </figure>
    );
}

function DiagramBlock({block}: {block: BlockOfType<"diagram">}) {
    const nodesById = new Map(block.content.nodes.map((node) => [node.id, node]));

    return (
        <figure className="focus-structured-diagram" aria-labelledby={`${block.id}-title`}>
            <figcaption id={`${block.id}-title`}>{block.content.title}</figcaption>
            <div className="focus-structured-diagram__nodes">
                {block.content.nodes.map((node) => (
                    <section className="focus-structured-diagram__node" key={node.id}>
                        <h3>{node.label}</h3>
                        <p>{node.responsibility}</p>
                    </section>
                ))}
            </div>
            {block.content.relationships.length > 0 && (
                <ol className="focus-structured-diagram__relationships" aria-label="Diagram relationships">
                    {block.content.relationships.map((relationship, index) => (
                        <li key={`${relationship.from}-${relationship.to}-${index}`}>
                            <span>{nodesById.get(relationship.from)?.label}</span>
                            <span className="focus-structured-diagram__arrow" aria-hidden="true">→</span>
                            <span>{nodesById.get(relationship.to)?.label}</span>
                            <small>{relationship.label}</small>
                        </li>
                    ))}
                </ol>
            )}
        </figure>
    );
}

function ComparisonBlock({block}: {block: BlockOfType<"comparison">}) {
    return (
        <figure className="focus-structured-comparison">
            <figcaption>{block.content.title}</figcaption>
            <div className="focus-structured-comparison__viewport" role="region" aria-label={block.content.title} tabIndex={0}>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Dimension</th>
                            {block.content.sides.map((side) => (
                                <th scope="col" key={side.id}>
                                    <span>{side.label}</span>
                                    <small>{side.summary}</small>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {block.content.dimensions.map((dimension) => (
                            <tr key={dimension.label}>
                                <th scope="row">{dimension.label}</th>
                                {block.content.sides.map((side) => <td key={side.id}>{dimension.values[side.id]}</td>)}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </figure>
    );
}

function CalloutBlock({block}: {block: BlockOfType<"callout">}) {
    return (
        <aside className="focus-structured-callout" aria-labelledby={`${block.id}-title`} data-kind={block.content.kind}>
            <p className="focus-structured-callout__kind">{block.content.kind}</p>
            <h3 id={`${block.id}-title`}>{block.content.title}</h3>
            <p>{block.content.body}</p>
        </aside>
    );
}

function renderBlock(block: CaseStudyBlock, isSectionLead: boolean) {
    switch (block.type) {
        case "prose": return <ProseBlock block={block} isSectionLead={isSectionLead}/>;
        case "image": return <ImageBlock block={block}/>;
        case "diagram": return <DiagramBlock block={block}/>;
        case "comparison": return <ComparisonBlock block={block}/>;
        case "callout": return <CalloutBlock block={block}/>;
    }
}

function ProjectCaseStudyRenderer({caseStudy, project}: ProjectCaseStudyRendererProps) {
    const headings = caseStudy.sections.map((section, index) => ({
        id: section.id,
        label: section.title,
        depth: 2 as const,
        sourceLine: 0,
        sectionNumber: String(index + 1).padStart(2, "0"),
    }));

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
                {caseStudy.sections.map((section, sectionIndex) => (
                    <section className="focus-structured-section" key={section.id} aria-labelledby={section.id}>
                        <header className="focus-structured-section__header">
                            <p className="focus-structured-section__number" aria-hidden="true">
                                {headings[sectionIndex]?.sectionNumber}
                            </p>
                            <h2 id={section.id}>{section.title}</h2>
                        </header>
                        <div className="focus-structured-section__content">
                            {section.blocks.map((block, blockIndex) => (
                                <div className={`focus-structured-block focus-structured-block--${block.type}`} key={block.id}>
                                    {renderBlock(block, blockIndex === 0)}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
                <div className="focus-article__exit">
                    <BackToProjectsLink className="focus-back--article"/>
                </div>
            </article>
        </div>
    );
}

export default ProjectCaseStudyRenderer;
