import React from 'react';
import './ProjectCard.css'
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
export default function ProjectCard(props) {
    if (props.type == "small") {return (
        <a href="/project-page"><div className="card-container-small">
                <img className="card-image" src={props.image}/>
                <div className="card-info">
                <h4 className="card-title"> {props.title} </h4>
                <p className="card-loocation"> {props.location} </p>
                </div>
            </div></a>
    )}
    else return (
            <a href="/project-page"><div className="card-container">
                <img className="card-image" src={props.image}/>
                <h4 className="card-title"> {props.title} </h4>
                <p className="card-loocation"> {props.location} </p>
            </div></a>
    )
}

ProjectCard.propTypes = {
    /**
     * Project's title
     */
    title: PropTypes.string.isRequired,
    /**
     * Project's location
     */
    location: PropTypes.string.isRequired,
  }