import ProjectDetail from './ProjectDetail';

function ProjectDetailView({displayMode, selectedProject, onClose}) {
    return (
        <>
            <div onClick={onClose} className={`overlay ${displayMode}--active`}/>
            <div className= {`${displayMode}__container`}>
                <div className={displayMode}>
                    <BtnClose onClose={onClose}/>
                    <ProjectDetail projectContent={selectedProject}/>
                </div>
            </div>
        </>
    )
}

function BtnClose({onClose}) {
    return(
        <button className="button__close" onClick={onClose}> Close </button>
    )
}

export default ProjectDetailView;