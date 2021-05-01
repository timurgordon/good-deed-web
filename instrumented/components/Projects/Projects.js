import React from 'react';
import ProjectsBar from '../ProjectsBar/ProjectsBar'
import ProjectCard from '../ProjectCard/ProjectCard'
import projectImg1 from '../../images/projectImg1.png'
import './Projects.css'

/* Renders and returns 4 ProjectCard components to be displayed */
function renderProjectCards() {
    return (
        <div className="projects-view"> 
            <ProjectCard image={projectImg1} title={"Ending single use plastic consumption in Rwanda"} location={"Kigali, Rwanda"}/>
            <ProjectCard image={projectImg1} title={"Ending single use plastic consumption in Rwanda"} location={"Kigali, Rwanda"}/>
            <ProjectCard image={projectImg1} title={"Ending single use plastic consumption in Rwanda"} location={"Kigali, Rwanda"}/>
            <ProjectCard image={projectImg1} title={"Ending single use plastic consumption in Rwanda"} location={"Kigali, Rwanda"}/>
        </div>
    )
}

/* <Projects />
* Component for displaying project cards and filtering/sorting.
* Renders ProjectBar component and calls function to render project cards.
*/
export default function Projects() {
    return (
            <div className="projects-container">
                <ProjectsBar />
                { renderProjectCards() }
            </div>
    )
}