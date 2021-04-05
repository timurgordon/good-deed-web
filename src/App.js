import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Landing from './pages/Landing/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


/* <App />
* Component where the site routes are rendered and displayed.
* Also responsible for handling authentication using @aws-amplify.
*/
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
            </ Routes>
            <AmplifySignOut />
        </Router>
  );
}

/* With authenticator ensures user is authenticated prior to page render*/
export default withAuthenticator(App);