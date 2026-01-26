import type { Key } from "react";

type ProjectCardProps = {
    project: any;
    onSelect: any;
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
                {project.tags.map((tag: unknown, index: Key) =>
                    <ProjectTags key={index} tag={tag}/>
                )}
            </ul>
        </li>
    );
}


function ProjectHead ({projectId, projectTitle}) {
    return(
        <>
            <label>{'Id: ' + projectId}</label>
            <br/>
            <label>{'Title: '+ projectTitle}</label>
        </>
    )
}

function ProjectShortDescription({projectDescription}) {
    return(
        <p>{projectDescription}</p>
    )
}

function ProjectTags ({tag}) {
    return(
        <li>{tag}</li>
    )
}

export default ProjectCard;