import ProjectsList from "./ProjectsList.jsx";
import ProjectModal from "./ProjectModal.jsx";
import {useEffect, useState} from "react";

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
function ProjectsPage() {

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
     <div className="ProjectsPage">
         {projects && <ProjectsList projects={projects} onSelect={setActiveProjectId} />}
         {selectedProject && <ProjectModal selectedProject={selectedProject} onClose={()=> setActiveProjectId(null)} />}
     </div>
    )
}

export default ProjectsPage;