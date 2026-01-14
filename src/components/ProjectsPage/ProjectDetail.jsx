// If this component is migrated to TypeScript,
// the props type would clearly define the contract between data and UI.
// selectedProject: project | undefined
// projectContent: selectedProject
// projectContent = {id: string, title: string, shortDescription: string, tags: array[string, string, string, string]}
function ProjectDetail({projectContent}) {
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