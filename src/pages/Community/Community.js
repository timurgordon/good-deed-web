import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import CommunityMenu from '../../components/CommunityMenu/CommunityMenu'
import CommunityInfo from '../../components/CommunityInfo/CommunityInfo'
import CommunityProjects from '../../components/CommunityProjects/CommunityProjects'
import './Community.css'

/* <Community />
* Good deed platform community page.
* Page where user is redirected to post login
* Renders three components: navbar, header, Communitys.
*/
export default function Community() {
    return (
        <body>
            <NavBar />
            <div className="community-layout">
                <CommunityMenu />
                <CommunityInfo />
                <CommunityProjects />
            </div>
        </body>
    )
}