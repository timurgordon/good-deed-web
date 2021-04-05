import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Landing from './pages/Landing/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

export default withAuthenticator(App);