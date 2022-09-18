import React from 'react';
//import { withAuthenticator } from "@aws-amplify/ui-react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import Search from './Search.js';

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
                <Routes>
                    <Route path="/search" element={<Search />} />
                </Routes>
            </BrowserRouter>
        );
    }
}