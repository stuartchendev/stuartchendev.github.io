import ProjectsList from "./ProjectsList";
import ProjectDetailView from "./ProjectDetailView";
import {useCallback, useEffect, useLayoutEffect, useState} from "react";
import {useLocation, useNavigationType} from "react-router-dom";
import {DEV_DISPLAY_VIEW_TYPE} from "../../../config";
import {projectsData} from "../../../data/project/projectsData";
import type {Project} from "../../../types/project.ts";
import type {LanguageId} from "../../../types/i18n";
import {useAsync} from "../../../playground/AsyncMessageHook";
import ProjectsStateView from "./ProjectsStateView";
import {findVisibleProject, getVisibleProjects} from "./projectVisibility";

type ProjectsPageProps = {
    activeLanguageId: LanguageId; // "en" | "zh-Tw" | "ja";
}

type fakeFetchProjectsProps = {
    activeLanguageId: LanguageId;
}

// activeProjectId models user selection
function ProjectsPage({activeLanguageId}: ProjectsPageProps) {
    const {hash} = useLocation();
    const navigationType = useNavigationType();

    // Single source of truth that represents which project the user selects
    const [activeProjectId, setActiveProjectId] = useState<string | null>(
        ()=> localStorage.getItem("projectId")
    );

    useEffect(() => {
        if (activeProjectId) {
            localStorage.setItem("projectId", activeProjectId);
        } else {
            localStorage.removeItem("projectId");
        }
    }, [activeProjectId]);

    const task = useCallback(() => fakeFetchProjects({activeLanguageId}), [activeLanguageId]);

    const { state, retry, isLoading, isError, isSuccess } = useAsync(task, [activeLanguageId]);

    useLayoutEffect(() => {
        if (!isSuccess) return;

        if (hash === "#projects") {
            document.getElementById("projects")?.scrollIntoView({
                behavior: "auto",
                block: "start",
            });
            return;
        }

        const projectsScrollY = window.history.state?.projectsScrollY;
        if (navigationType === "POP" && typeof projectsScrollY === "number") {
            window.scrollTo({top: projectsScrollY, left: 0, behavior: "auto"});
        }
    }, [hash, isSuccess, navigationType]);

    // Stored data (non-UI state) because it comes from external data
    // and now becomes activeLanguageId derived state
    const projects = state.data ?? [];
    const visibleProjects = isSuccess ? getVisibleProjects(projects) : [];

    useEffect(() => {
        if (!isSuccess || !activeProjectId) return;
        if (!findVisibleProject(projects, activeProjectId)) {
            setActiveProjectId(null);
        }
    }, [activeProjectId, isSuccess, projects]);

    // This is derived because it can be calculated from activeProjectId
    const selectedProject: Project | null =
        isSuccess && activeProjectId
        ? findVisibleProject(projects, activeProjectId)
        : null;

    // onClose purpose to clear activeProjectId
    return (
     <section className="projects__page">
         {isLoading && <ProjectsStateView status="loading" />}

         {isError && (
             <ProjectsStateView
                 status="error"
                 message={state.error?.message}
                 onRetry={retry}
             />
         )}

         {isSuccess && <>
             <ProjectsList projects={visibleProjects} onSelect={setActiveProjectId}/>
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
