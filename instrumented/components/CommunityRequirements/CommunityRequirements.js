import React from 'react';
import './CommunityRequirements.css'

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
export default function CommunityRequirements() {
    return (
            <div className="requirements-container">
                <h3>Need for next stage</h3>
                <p> 20 Computers </p>
                <p> 1 Verified Volunteer </p>
                <p> 2 Computer Science teachers </p>
            </div>
    )
}
