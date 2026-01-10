import ProjectCard from "./ProjectCard";

function ProjectsList({projects, onSelect}) {

    return (
        <li className="project__list">
            {projects.map((project) =>
                <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={onSelect}
                />
            )}
        </li>
    )
}


export default ProjectsList;