import React from 'react';
import './ProjectCard.css'

/* <ProjectsBar />
* Takes in image, title, and location parameters.
* Creates and returns project card with given parameters.
*/
export default function ProjectsBar(props) {
    return (
            <div className="card-container">
                <img className="card-image" src={props.image}/>
                <h4 className="card-title"> {props.title} </h4>
                <p className="card-loocation"> {props.location} </p>
            </div>
    )
}