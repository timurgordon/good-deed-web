import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import './Header.css'

export default function Header() {
    return (
        <div className="header-container">
            <h1> 450 girls in Anatolia learned web development this summer </h1>
            <h3> See the websites they designed. </h3>
        </div>
    )
}