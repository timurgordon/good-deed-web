import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Projects from '../../components/Projects/Projects'

/* <Landing />
* Good deed platform landing page.
* Page where user is redirected to post login
* Renders three components: navbar, header, projects.
*/
export default function Landing() {
    return (
        <body>
            <NavBar />
            <Header />
            <Projects />
        </body>
    )
}