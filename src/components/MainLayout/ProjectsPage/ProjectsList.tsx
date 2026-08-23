import ProjectCard from "./ProjectCard";
import type {Project} from "../../../types/project";
import type {OnSelectProject} from "../../../types/ui";

type ProjectsListProps = {
    projects: Project[];
    onSelect: OnSelectProject;
}

const focusProjectIds = new Set([
    "frontend-reasoning-lab",
    "forkify",
    "portfolio",
    "smart-garage-door-system",
]);

function ProjectsList({projects, onSelect}: ProjectsListProps) {

    return (
        <ul className={`project__list`}  id="projects">
            {projects.map((project) => focusProjectIds.has(project.id) ? (
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
