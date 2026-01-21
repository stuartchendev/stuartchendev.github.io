import ProjectsList from "./ProjectsList.jsx";
import ProjectDetailView from "./ProjectDetailView";
import {useEffect, useState} from "react";
import {DEV_DISPLAY_VIEW_TYPE} from "../../../config";
import projectsData from "../../../../test/projectsData.json"

// activeProjectId models user selection
function ProjectsPage({language}) {
    // Single source of truth
    const [activeProjectId, setActiveProjectId] = useState(()=> localStorage.getItem("projectId"));

    // Stored data (non-UI state)
    const [projects] = useState(()=>projectsData);

    // Derived State
    const selectedProject = projects.find((project) => project.id === activeProjectId);

    useEffect(() => {
        localStorage.setItem('projectId', String(activeProjectId));
    }, [activeProjectId]);

    // onClose purpose to clear activeProjectId
    return (
     <section className="ProjectsPage">
         {projects && <ProjectsList projects={projects} onSelect={setActiveProjectId} />}
         {selectedProject &&
             <ProjectDetailView
                 displayMode={DEV_DISPLAY_VIEW_TYPE}
                 selectedProject={selectedProject}
                 onClose={() => setActiveProjectId(null)}/>
         }
     </section>
    )
}

export default ProjectsPage;