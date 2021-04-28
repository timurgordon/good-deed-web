import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import CommunityMenu from '../../components/CommunityMenu/CommunityMenu'
import CommunityInfo from '../../components/CommunityInfo/CommunityInfo'
import CommunityRequirements from '../../components/CommunityRequirements/CommunityRequirements'
import './Project.css'

/* <Community />
* Good deed platform community page.
* Page where user is redirected to post login
* Renders three components: navbar, header, Communitys.
*/
export default function Project() {
    return (
        <body>
            <NavBar />
            <div className="community-layout">
                <CommunityMenu />
                <CommunityInfo />
                <CommunityRequirements />
            </div>
        </body>
    )
}