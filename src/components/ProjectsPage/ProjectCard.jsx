function ProjectCard ({ project, onSelect}) {
    const HandleSetActiveProjectId = () => {
        onSelect(project.id);
    }

    return (
        <div className="project__card" onClick={HandleSetActiveProjectId}>
            <ProjectHead projectId={project.id} projectTitle={project.title}/>
            <ProjectShortDescription projectDescription={project.shortDescription}/>
            <ul>
                {project.tags.map((tag, index) =>
                    <ProjectTags key={index} tag={tag}/>
                )}
            </ul>
        </div>
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