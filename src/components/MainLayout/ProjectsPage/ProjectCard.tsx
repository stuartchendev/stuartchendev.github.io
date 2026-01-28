import type {Project} from "../../../types/project";
import type {OnSelectProject} from "../../../types/ui";

type ProjectCardProps = {
    project: Project;
    onSelect: OnSelectProject;
}
type ProjectHeadProps = Pick<Project, "id" | "title">
type ProjectShortDescriptionProps = Pick<Project, "shortDescription">
type ProjectTagsProps={
    tag: string;
}

function ProjectCard({project, onSelect}: ProjectCardProps) {
    const HandleSetActiveProjectId = () => {
        onSelect(project.id);
    }

    return (
        <li className="project__card" onClick={HandleSetActiveProjectId}>
            <ProjectHead id={project.id} title={project.title}/>
            <ProjectShortDescription shortDescription={project.shortDescription}/>
            <ul>
                {project.tags.map((tag , index: Key) =>
                    <ProjectTags key={index} tag={tag}/>
                )}
            </ul>
        </li>
    );
}

function ProjectHead ({id, title}:ProjectHeadProps) {
    return(
        <>
            <label>{'Id: ' + id}</label>
            <br/>
            <label>{'Title: '+ title}</label>
        </>
    )
}

function ProjectShortDescription({shortDescription}:ProjectShortDescriptionProps) {
    return(
        <p>{shortDescription}</p>
    )
}

function ProjectTags ({tag}: ProjectTagsProps) {
    return(
        <li>{tag}</li>
    )
}

export default ProjectCard;