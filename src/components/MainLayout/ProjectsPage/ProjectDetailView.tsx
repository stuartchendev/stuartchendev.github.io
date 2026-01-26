import ProjectDetail from './ProjectDetail';

type ProjectDetailViewProps = {
    displayMode: any;
    selectedProject: any;
    onClose: any;
}

function ProjectDetailView({displayMode, selectedProject, onClose}: ProjectDetailViewProps) {
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