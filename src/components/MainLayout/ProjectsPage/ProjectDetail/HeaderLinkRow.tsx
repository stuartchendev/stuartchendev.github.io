import type {Project} from "../../../../types/project";
type HeaderLinkRowProps = {
    githubLink: Project["githubLink"];
    demoLink: Project["demoLink"];
}
type GithubLinkProps ={
    githubLink: Project["githubLink"];
}
type DemoLinkProps ={
    demoLink: Project["demoLink"];
}

function HeaderLinkRow({githubLink, demoLink}:HeaderLinkRowProps) {
    return (
        <div className="project__detail-links">
            {githubLink && <GithubLink githubLink={githubLink}/>}
            {demoLink && <DemoLink demoLink={demoLink}/>}
        </div>
    )
}

function GithubLink({githubLink}: GithubLinkProps) {
    return (

        <a
            className="project__detail-link"
            href={githubLink}
            target="_blank"
            rel="noreferrer"
        >
            GitHub
        </a>
    )
}
function DemoLink({demoLink}: DemoLinkProps) {
    return (
        <a
            className="project__detail-link"
            href={demoLink}
            target="_blank"
            rel="noreferrer"
        >
            Live Demo
        </a>
    )
}

export default HeaderLinkRow;