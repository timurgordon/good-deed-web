import React from 'react';
import './CommunityProjects.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import projectImg1 from '../../images/projectImg1.png'

/**
 * Component for rendering a project card.
 *
 * @component
 * @example
 * const title = "Good Deed Project"
 * const location = "New York, USA"
 * const image = projectImg
 * return (
 *   <ProjectCard title={title} location={location} image={image} />
 * )
 */
export default function CommunityProjects() {
    return (
            <div className="requirements-container">
                <h3>Our Projects</h3>
                <div className="community-projects-view"> 
            <ProjectCard image={projectImg1} type="small" title={"Ending single use plastic consumption in Rwanda"} location={"Kigali, Rwanda"}/>
            <ProjectCard image={projectImg1} type="small" title={"Ending single use plastic consumption in Rwanda"} location={"Kigali, Rwanda"}/>
            <ProjectCard image={projectImg1} type="small" title={"Ending single use plastic consumption in Rwanda"} location={"Kigali, Rwanda"}/>
            <ProjectCard image={projectImg1} type="small" title={"Ending single use plastic consumption in Rwanda"} location={"Kigali, Rwanda"}/>
        </div>
            </div>
    )
}
