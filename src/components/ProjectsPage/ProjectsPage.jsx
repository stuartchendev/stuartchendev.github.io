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

// id-driven open condition
function ProjectsPage() {
    // init active ProjectId, design for single source of truth
    const [activeProjectId, setActiveProjectId] = useState(()=> localStorage.getItem("projectId"));
    // store fake data as projects
    const [projects] = useState(()=>projectsFakeData);
    // find select Project by active project id
    const selectedProject = projects.find((project) => project.id === activeProjectId);
    // derive state if project id exist
    const isOpen = Boolean(activeProjectId);

    // store project id for reloading can keep state
    useEffect(() => {
        localStorage.setItem('projectId', String(activeProjectId));
    }, [activeProjectId]);

    // if projects exist
    // ProjectsList -> render All ProjectCard
    // ProjectCard -> render project detail and return project id
    // if selectedProject & isOpen exist
    // ProjectModal -> render selectedProject and if close button click set id to null
    return (
     <div className="ProjectsPage">
         {projects && <ProjectsList projects={projects} onSelect={setActiveProjectId} />}
         {selectedProject && isOpen && <ProjectModal selectedProject={selectedProject} onClose={()=> setActiveProjectId(null)} />}
     </div>
    )
}

export default ProjectsPage;