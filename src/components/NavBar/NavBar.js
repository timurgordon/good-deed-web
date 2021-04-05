import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'

export default function NavBar() {
    return (
            <nav>
                <div className="nav-left"> 
                    <Link className="nav-item" to="/"> About </Link>
                    <Link className="nav-item" to="/"> Our Project </Link>
                </div>
                <div className="nav-right"> 
                    < SearchBar />
                    <Link className="nav-item" to="/"> Profile </Link>
                </div>
            </nav>
    )
}