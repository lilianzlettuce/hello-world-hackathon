import React from 'react';
import './HomePage.css';
//import { withAuthenticator } from "@aws-amplify/ui-react";

import NavBar from './components/NavBar';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className='frame landing-page'>
                    <div className='landing-title' id='landing-title'>RUA_<span style={{color: 'var(--lightred)'}}>live</span>?</div>
                    <button className='sos-btn'>SOS</button>
                </div>
            </div>
        );
    }
}