import type { Key } from "react";
import type {Project} from "../../../types/project";

type ProjectCardProps = {
    project: Project;
    onSelect: (id: string) => void;
}

type ProjectHeadProps = {
    projectId: string;
    projectTitle: string;
}

type ProjectShortDescriptionProps = {
    projectDescription: string;
}

type ProjectTagsProps={
    tag: string;
}

function ProjectCard({project, onSelect}: ProjectCardProps) {
    const HandleSetActiveProjectId = () => {
        onSelect(project.id);
    }

    return (
        <li className="project__card" onClick={HandleSetActiveProjectId}>
            <ProjectHead projectId={project.id} projectTitle={project.title}/>
            <ProjectShortDescription projectDescription={project.shortDescription}/>
            <ul>
                {project.tags.map((tag , index: Key) =>
                    <ProjectTags key={index} tag={tag}/>
                )}
            </ul>
        </li>
    );
}


function ProjectHead ({projectId, projectTitle}:ProjectHeadProps) {
    return(
        <>
            <label>{'Id: ' + projectId}</label>
            <br/>
            <label>{'Title: '+ projectTitle}</label>
        </>
    )
}

function ProjectShortDescription({projectDescription}:ProjectShortDescriptionProps) {
    return(
        <p>{projectDescription}</p>
    )
}

function ProjectTags ({tag}: ProjectTagsProps) {
    return(
        <li>{tag}</li>
    )
}

export default ProjectCard;