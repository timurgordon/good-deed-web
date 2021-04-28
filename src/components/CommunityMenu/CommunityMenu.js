import React from 'react';
import './CommunityMenu.css'
import PropTypes from "prop-types"

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
export default function CommunityMenu() {
    return (
            <div className="menu-container">
                <a>Who we are</a>
                <a>Our Impact</a>
                <a>Projects</a>
                <a>Events</a>
            </div>
    )
}
