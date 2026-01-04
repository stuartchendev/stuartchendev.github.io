
import {useState} from "react";

function ProjectCard () {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <label>ProjectCard label</label>
            <ProjectButton isOpen={isOpen}  onToggle={()=> setIsOpen(!isOpen)} />
            {isOpen && <ProjectContent/>}
        </div>
    );
}

function ProjectButton({isOpen, onToggle}) {
    return (
        <button onClick={onToggle}>
            {isOpen ? 'true': 'false' } button
        </button>
    )
}

function ProjectContent() {
    return (
        <h1>button is click</h1>
    )
}

export default ProjectCard;