import ProjectCard from "./ProjectCard";

function ProjectsList({projects, onSelect}) {

    return (
        <ul className={`project__list`}>
            {projects.map((project) =>
                <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={onSelect}
                />
            )}
        </ul>
    )
}


export default ProjectsList;