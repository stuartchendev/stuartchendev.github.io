import ProjectCard from "./ProjectCard";
import type {Project} from "../../../types/project";
import type {OnSelectProject} from "../../../types/ui";

type ProjectsListProps = {
    projects: Project[];
    onSelect: OnSelectProject;
}

function ProjectsList({projects, onSelect}: ProjectsListProps) {

    return (
        <ul className={`project__list`}  id="projects">
            {projects.map((project) => project.id === "frontend-reasoning-lab" ? (
                <ProjectCard
                    key={project.id}
                    project={project}
                    detailHref={`/projects/${project.id}`}
                />
            ) : (
                <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={onSelect}
                />
            ))}
        </ul>
    )
}


export default ProjectsList;
