import React from 'react';
//import { withAuthenticator } from "@aws-amplify/ui-react";

import './ProfilePage.css';

import NavBar from './components/NavBar';

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar />
                
            </div>
        );
    }
}