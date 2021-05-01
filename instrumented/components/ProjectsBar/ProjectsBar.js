import React from 'react';
import './ProjectsBar.css'

/* Function that returns category selection buttons for projects navbar */
function renderCategories() {
    return (
        <div className="category-container">
            <div className="category-box"> All </div>
            <div className="category-box"> Education </div>
            <div className="category-box"> Art </div>
            <div className="category-box"> Healthcare </div>
            <div className="category-box"> Environment </div>
            <div className="category-box"> Accesibility </div>
        </div>

    )
}

/* <ProjectsBar />
* Bar with filtering, sorting and category selection functionality.
* Rendered above project cards in <Projects /> for project navigation.
*/
export default function ProjectsBar() {
    return (
            <div className="bar">
                <div className="bar-left"> 
                    <div className="sort-box"> Projects </div>
                </div>
                <div className="bar-center">
                    {renderCategories()}
                </div>
                <div className="bar-right"> 
                    <div className="filter-box"> Filters </div>
                </div>
            </div>
    )
}