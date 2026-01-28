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
            <ul>
                <ProjectTags tags={project.tags}/>
            </ul>
        </li>
    );
}

function ProjectHead ({id, title}:ProjectHeadProps) {
    return(
        <>
            <label>{'Id: ' + id}</label>
            <br/>
            <label>{'Title: '+ title}</label>
        </>
    )
}

function ProjectShortDescription({shortDescription}:ProjectShortDescriptionProps) {
    return(
        <p>{shortDescription}</p>
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
    return <li>{tag}</li>
}

export default ProjectCard;