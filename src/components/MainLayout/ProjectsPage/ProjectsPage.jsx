import ProjectsList from "./ProjectsList.jsx";
import ProjectDetailView from "./ProjectDetailView";
import {useEffect, useState} from "react";
import {DEV_DISPLAY_VIEW_TYPE} from "../../../config";

export const projectsFakeData = [
    {
        id: 'p1',
        title: 'Forkify App',
        shortDescription: 'Recipe search app with MVC architecture',
        tags: ['JavaScript', 'MVC', 'API'],
    },
    {
        id: 'p2',
        title: 'Mapty App',
        shortDescription: 'Workout tracking app using OOP and Maps',
        tags: ['JavaScript', 'OOP', 'Geolocation'],
    },
    {
        id: 'p3',
        title: 'Portfolio Website',
        shortDescription: 'Personal portfolio with responsive layout and dark mode',
        tags: ['HTML', 'CSS', 'JavaScript'],
    },
];

// activeProjectId models user selection
function ProjectsPage({language}) {
    // Test Language code correct enter
    console.log('ProjectsPage:', language);
    // Single source of truth
    const [activeProjectId, setActiveProjectId] = useState(()=> localStorage.getItem("projectId"));

    // Stored data (non-UI state)
    const [projects] = useState(()=>projectsFakeData);

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