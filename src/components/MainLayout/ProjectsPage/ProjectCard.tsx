import type {Project} from "../../../types/project";
import type {OnSelectProject} from "../../../types/ui";

type ProjectCardProps = {
    project: Project;
    onSelect: OnSelectProject;
}
type ProjectHeadProps = Pick<Project, "id" | "title">
type ProjectShortDescriptionProps = Pick<Project, "shortDescription">
type ProjectTagsProps={
    tags: Project["tags"];
}
type ProjectTagProps ={
    tag: string;
}

function ProjectCard({project, onSelect}: ProjectCardProps) {
    const HandleSetActiveProjectId = () => {
        onSelect(project.id);
    }

    return (
        <li className="project__card" onClick={HandleSetActiveProjectId}>
            <ProjectHead id={project.id} title={project.title}/>
            <ProjectShortDescription shortDescription={project.shortDescription}/>
            <ul className="project__card-tags">
                <ProjectTags tags={project.tags}/>
            </ul>
        </li>
    );
}

function ProjectHead ({id, title}:ProjectHeadProps) {
    return(
        <>
            <label className="project__card-id">{id}</label>
            <h2>{title}</h2>
        </>
    )
}

function ProjectShortDescription({shortDescription}:ProjectShortDescriptionProps) {
    return(
        <p className="project__card-description">{shortDescription}</p>
    )
}

function ProjectTags ({tags}: ProjectTagsProps) {
    return(
        tags.map((tag, index) => (
            <ProjectTag tag={tag} key={index}/>
        ))
    )
}

function ProjectTag({tag}:ProjectTagProps){
    return <li className="project__card-tag">{tag}</li>
}

export default ProjectCard;