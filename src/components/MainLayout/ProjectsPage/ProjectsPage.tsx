import ProjectsList from "./ProjectsList";
import ProjectDetailView from "./ProjectDetailView";
import {useEffect, useState} from "react";
import {DEV_DISPLAY_VIEW_TYPE} from "../../../config";
import projectsData from "../../../../test/projectsData.json";
import type {Project} from "../../../types/project.ts";

type ProjectsPageProps = {
    activeLanguageId: string;
}

// activeProjectId models user selection
function ProjectsPage({activeLanguageId}: ProjectsPageProps) {
    // Single source of truth that represents which project the user selects
    const [activeProjectId, setActiveProjectId] = useState<string | null>(
        ()=> localStorage.getItem("projectId")
    );

    // Stored data (non-UI state) because it comes from external data
    // and now becomes activeLanguageId derived state
    const projects = projectsData[activeLanguageId] as Project[];

    // This is derived because it can be calculated from activeProjectId
    const selectedProject: Project | null =
        activeProjectId
        ? projects.find((p) => p.id === activeProjectId) ?? null
        : null;

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