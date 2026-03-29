import type { Project } from "../../../types/project";
import type { OnSelectProject } from "../../../types/ui";
import ProjectTagsSection from "./ProjectTagsSection";

type ProjectCardProps = {
    project: Project;
    onSelect: OnSelectProject;
};
type ProjectThumbnailProps ={
    thumbnailSrc: Project["thumbnailSrc"];
    thumbnailAlt: Project["thumbnailAlt"];
    title: Project["title"];
}
type ProjectYearProp=Pick<Project, "year">;

type ProjectTitleProps = Pick<Project, "id" | "title">;
type ProjectShortDescriptionProps = Pick<Project, "shortDescription">;

function ProjectCard({project, onSelect}: ProjectCardProps) {
    const HandleSetActiveProjectId = () => {
        onSelect(project.id);
    }

    return (
        <li className="project__card" onClick={HandleSetActiveProjectId}>
            {project.thumbnailSrc &&
                <ProjectThumbnail thumbnailSrc={project.thumbnailSrc} thumbnailAlt={project.thumbnailAlt} title={project.title} />
            }
            <div className="project__card-header">
                <ProjectYear year={project.year} />
                <span className="project__card-affordance">View details ↗</span>
            </div>
            <ProjectTitle id={project.id} title={project.title} />
            <ProjectShortDescription shortDescription={project.shortDescription} />
            <ProjectTagsSection tags={project.tags} />
        </li>
    );
}
function ProjectThumbnail({ thumbnailSrc, thumbnailAlt, title }: ProjectThumbnailProps) {
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

function ProjectTitle({ id, title }: ProjectTitleProps) {
    return (
        <>
            <label className="project__card-id">{id}</label>
            <h2>{title}</h2>
        </>
    );
}

function ProjectShortDescription({ shortDescription }: ProjectShortDescriptionProps) {
    return <p className="project__card-description">{shortDescription}</p>;
}

export default ProjectCard;