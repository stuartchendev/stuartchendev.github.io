import type {MarkdownHeading} from "./markdownHeadings";

type ProjectTableOfContentsProps = {
    headings: MarkdownHeading[];
};

function ProjectTableOfContents({headings}: ProjectTableOfContentsProps) {
    return (
        <nav className="focus-toc" aria-label="On this page">
            <h2 className="focus-toc__title">On this page</h2>
            <ul className="focus-toc__list">
                {headings.map((heading) => (
                    <li
                        className={`focus-toc__item focus-toc__item--depth-${heading.depth}`}
                        key={heading.id}
                    >
                        <a
                            className={heading.sectionNumber ? "focus-toc__link focus-toc__link--numbered" : "focus-toc__link"}
                            href={`#${heading.id}`}
                        >
                            {heading.sectionNumber && (
                                <span className="focus-toc__number" aria-hidden="true">{heading.sectionNumber}</span>
                            )}
                            <span>{heading.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default ProjectTableOfContents;
