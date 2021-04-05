import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import './ProjectsBar.css'


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