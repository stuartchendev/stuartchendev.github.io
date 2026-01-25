import ProjectsList from "./ProjectsList.jsx";
import ProjectDetailView from "./ProjectDetailView";
import {useEffect, useState} from "react";
import {DEV_DISPLAY_VIEW_TYPE} from "../../../config";
import projectsData from "../../../../test/projectsData.json"

// activeProjectId models user selection
function ProjectsPage({activeLanguageId}) {
    // Single source of truth that represents which project the user selects
    const [activeProjectId, setActiveProjectId] = useState(()=> localStorage.getItem("projectId"));

    // Stored data (non-UI state) because it comes from external data
    // and has its own lifecycle
    const [projects] = useState(()=>projectsData[activeLanguageId]);

    // This is derived because it can be calculated from activeProjectId
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