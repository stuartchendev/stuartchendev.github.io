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