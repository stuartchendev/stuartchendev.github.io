import ProjectCard from "./ProjectCard";
import type {Project} from "../../../types/project";
import type {OnSelectProject} from "../../../types/ui";

type ProjectsListProps = {
    projects: Project[];
    onSelect: OnSelectProject;
}

function ProjectsList({projects, onSelect}: ProjectsListProps) {

    return (
        <ul className={`project__list`}>
            {projects.map((project, index) =>
                <ProjectCard
                    key={index}
                    project={project}
                    onSelect={onSelect}
                />
            )}
        </ul>
    )
}


export default ProjectsList;