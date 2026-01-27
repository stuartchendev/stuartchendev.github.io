import ProjectCard from "./ProjectCard";
import type {Project} from "../../../types/project";

type ProjectsListProps = {
    projects: Project[];
    onSelect: (id: string) => void;
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