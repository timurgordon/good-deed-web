import React from 'react';
import ProjectsBar from '../ProjectsBar/ProjectsBar'
import ProjectCard from '../ProjectCard/ProjectCard'
import projectImg1 from '../../images/projectImg1.png'
import './Projects.css'

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

export default function Projects() {
    return (
            <div className="projects-container">
                <ProjectsBar />
                { renderProjectCards() }
            </div>
    )
}