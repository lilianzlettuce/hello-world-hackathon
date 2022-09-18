import React from 'react';
//import { withAuthenticator } from "@aws-amplify/ui-react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Search from './components/Search.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        );
    }
}