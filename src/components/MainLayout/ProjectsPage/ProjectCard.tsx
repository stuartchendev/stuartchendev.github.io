import type { Project } from "../../../types/project";
import type { OnSelectProject } from "../../../types/ui";
import type {MouseEvent} from "react";
import ProjectTagsSection from "./ProjectTagsSection";
import {Link} from "react-router-dom";

type ProjectCardProps = {
    project: Project;
    onSelect?: OnSelectProject;
    detailHref?: string;
};
type ProjectThumbnailProps ={
    thumbnailSrc: Project["thumbnailSrc"];
    thumbnailAlt: Project["thumbnailAlt"];
    title: Project["title"];
}
type ProjectYearProp=Pick<Project, "year">;

type ProjectTitleProps = Pick<Project, "title">;
type ProjectShortDescriptionProps = Pick<Project, "shortDescription">;

function ProjectCard({project, onSelect, detailHref}: ProjectCardProps) {
    const HandleSetActiveProjectId = () => {
        onSelect?.(project.id);
    }

    const rememberProjectsScrollPosition = (event: MouseEvent<HTMLAnchorElement>) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        window.history.replaceState({
            ...window.history.state,
            projectsScrollY: window.scrollY,
        }, "");
    };

    const content = <ProjectCardContent project={project}/>;

    if (detailHref) {
        return (
            <li className="project__card">
                <Link
                    className="project__card-link"
                    to={detailHref}
                    onClick={rememberProjectsScrollPosition}
                >
                    {content}
                </Link>
            </li>
        );
    }

    return (
        <li className="project__card" onClick={HandleSetActiveProjectId}>
            {content}
        </li>
    );
}

function ProjectCardContent({project}: Pick<ProjectCardProps, "project">) {
    return (
        <>
            <div className="project__card-visual">
                {project.thumbnailSrc &&
                    <ProjectThumbnail thumbnailSrc={project.thumbnailSrc} thumbnailAlt={project.thumbnailAlt}
                                      title={project.title}/>
                }
                <div className="project__card-header">
                    <ProjectYear year={project.year}/>
                    <span className="project__card-affordance">View Case Study ↗</span>
                </div>
            </div>
            <ProjectTitle title={project.title}/>
            <ProjectShortDescription shortDescription={project.shortDescription}/>
            <ProjectTagsSection tags={project.tags}/>
        </>
    );
}

function ProjectThumbnail({thumbnailSrc, thumbnailAlt, title}: ProjectThumbnailProps) {
    return (
        <div className="project__card-thumbnail">
            <img
                className="project__card-thumbnailImage"
                src={thumbnailSrc}
                alt={thumbnailAlt ?? `${title} teaser thumbnail`}
            />
        </div>
    )
}
function ProjectYear({year}: ProjectYearProp) {
    return (
        year && (
            <span className="project__card-meta">{year}</span>
        )
    )
}

function ProjectTitle({title }: ProjectTitleProps) {
    return (
        <>
            <h2>{title}</h2>
        </>
    );
}

function ProjectShortDescription({ shortDescription }: ProjectShortDescriptionProps) {
    return <p className="project__card-description">{shortDescription}</p>;
}

export default ProjectCard;
