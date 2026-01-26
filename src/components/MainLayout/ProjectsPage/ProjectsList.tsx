import ProjectCard from "./ProjectCard";
type ProjectsListProps = {
    projects: any;
    onSelect: any;
}

function ProjectsList({projects, onSelect}: ProjectsListProps) {

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