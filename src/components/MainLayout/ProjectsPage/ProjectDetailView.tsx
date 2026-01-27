import ProjectDetail from './ProjectDetail';
import type {Project} from "../../../types/project";
import type { DisplayMode, OnClose } from "../../../types/ui";

type ProjectDetailViewProps = {
    displayMode: DisplayMode;
    selectedProject: Project | null;
    onClose: OnClose;
}

type BtnCloseProps = {
    onClose: OnClose;
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

function BtnClose({onClose}: BtnCloseProps) {
    return(
        <button className="button__close" onClick={onClose}> Close </button>
    )
}

export default ProjectDetailView;