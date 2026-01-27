// If this component is migrated to TypeScript,
// the props type would clearly define the contract between data and UI.

// type Project ={
//     id: string;
//     title: string;
//     shortDescription: string;
//     tags: string[];
// }

// selectedProject: Project | undefined
// projectContent = selectedProject

import type {Project} from "../../../types/project";

type ProjectDetailProps = {
    projectContent: Project; // content must exist,
}
function ProjectDetail({projectContent}:ProjectDetailProps) {
    return (
        <>
            <DetailTitle projectTitle={projectContent.title}/>
            <DetailContent projectContent={projectContent.shortDescription}/>
        </>
    )
}

function DetailTitle({ projectTitle }) {
    return (
        <h1 className="project__title">{projectTitle}</h1>
    )
}
function DetailContent({ projectContent }) {
    return (
        <p>{projectContent}</p>
    )
}

export default ProjectDetail