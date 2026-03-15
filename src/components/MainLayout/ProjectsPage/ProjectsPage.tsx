import ProjectsList from "./ProjectsList";
import ProjectDetailView from "./ProjectDetailView";
import {useCallback, useEffect, useState} from "react";
import {DEV_DISPLAY_VIEW_TYPE} from "../../../config";
import {projectsData} from "../../../data/test/projectsData";
import type {Project} from "../../../types/project.ts";
import type {LanguageId} from "../../../types/i18n";
import {useAsync} from "../../../playground/AsyncMessageHook";
import ProjectsStateView from "./ProjectsStateView";

type ProjectsPageProps = {
    activeLanguageId: LanguageId; // "en" | "zh-Tw" | "ja";
}

type fakeFetchProjectsProps = {
    activeLanguageId: LanguageId;
}

// activeProjectId models user selection
function ProjectsPage({activeLanguageId}: ProjectsPageProps) {
    // Single source of truth that represents which project the user selects
    const [activeProjectId, setActiveProjectId] = useState<string | null>(
        ()=> localStorage.getItem("projectId")
    );

    useEffect(() => {
        localStorage.setItem('projectId', String(activeProjectId));
    }, [activeProjectId]);

    const task = useCallback(() => fakeFetchProjects({activeLanguageId}), [activeLanguageId]);

    const { state, retry, isLoading, isError, isSuccess } = useAsync(task, [activeLanguageId]);

    // Stored data (non-UI state) because it comes from external data
    // and now becomes activeLanguageId derived state
    const projects = state.data;

    // This is derived because it can be calculated from activeProjectId
    const selectedProject: Project | null =
        isSuccess && activeProjectId
        ? projects.find((p) => p.id === activeProjectId) ?? null
        : null;

    // onClose purpose to clear activeProjectId
    return (
     <section className="projects__page" id="projects">
         {isLoading && <ProjectsStateView status="loading" />}

         {isError && (
             <ProjectsStateView
                 status="error"
                 message={state.error?.message}
                 onRetry={retry}
             />
         )}

         {isSuccess && <>
             <ProjectsList projects={projects} onSelect={setActiveProjectId}/>
             {selectedProject &&
                 <ProjectDetailView
                     displayMode={DEV_DISPLAY_VIEW_TYPE}
                     selectedProject={selectedProject}
                     onClose={() => setActiveProjectId(null)}/>
             }
         </>}
     </section>
    )
}

function fakeFetchProjects({activeLanguageId}: fakeFetchProjectsProps) {
    return new Promise<Project[]>((resolve, reject) => {
        const delay = 500 + Math.random() * 400;

        setTimeout(() => {
            const fail = Math.random() < 0.15; // 15% error, for display error handling
            if (fail) {
                reject(new Error("Failed to load projects. Please try again."));
                return;
            }

            resolve(projectsData[activeLanguageId]);
        }, delay);
    });
}


export default ProjectsPage;