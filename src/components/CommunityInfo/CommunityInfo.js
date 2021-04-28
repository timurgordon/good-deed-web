import React from 'react';
import './CommunityInfo.css'

/**
 * Component for rendering a community page's information section.
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
export default function CommunityInfo() {
    return (
            <div className="info-container">
                <h2>Establishing computer labs across Anatolia</h2>
                <h4>Who we are</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <h4>Our Impact</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
    )
}
