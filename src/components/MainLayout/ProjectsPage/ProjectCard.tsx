import type { Project } from "../../../types/project";
import type { OnSelectProject } from "../../../types/ui";
import ProjectTagsSection from "./ProjectTagsSection";

type ProjectCardProps = {
    project: Project;
    onSelect: OnSelectProject;
};

type ProjectHeadProps = Pick<Project, "id" | "title">;
type ProjectShortDescriptionProps = Pick<Project, "shortDescription">;

function ProjectCard({project, onSelect}: ProjectCardProps) {
    const HandleSetActiveProjectId = () => {
        onSelect(project.id);
    }

    return (
        <li className="project__card" onClick={HandleSetActiveProjectId}>
            <ProjectHead id={project.id} title={project.title} />
            <ProjectShortDescription shortDescription={project.shortDescription} />
            <ProjectTagsSection tags={project.tags} />
        </li>
    );
}

function ProjectHead({ id, title }: ProjectHeadProps) {
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