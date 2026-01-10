function ProjectModal({selectedProject, onClose}) {
    return (
        <>
            <div onClick={onClose} className="overlay"/>
            <div className="modal__container">
                <div className="modal">
                    <ModalClose onClose={onClose}/>
                    <ModalContent projectContent={selectedProject}/>
                </div>
            </div>
        </>
    )
}

function ModalClose({onClose}) {
    return(
        <button onClick={onClose}> Close </button>
    )
}


function ModalContent({projectContent}) {
    return (
        <>
            <ModalInnerTitle modalTitle={projectContent.title}/>
            <ModalInnerContent modalContent={projectContent.shortDescription}/>
        </>
    )
}

function ModalInnerTitle({ modalTitle }) {
    return (
        <h1 className="modal__title">{modalTitle}</h1>
    )
}
function ModalInnerContent({ modalContent }) {
    return (
        <p>{modalContent}</p>
    )
}

export default ProjectModal;