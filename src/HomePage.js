import React from 'react';
import './HomePage.css';
//import { withAuthenticator } from "@aws-amplify/ui-react";

import NavBar from './components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleCheck, faBatteryHalf, faGlobe, faEarthOceania, 
    faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className='frame landing-sec'>
                    <div className='landing-title' id='landing-title'>RUA_<span style={{color: 'var(--lightred)'}}>live</span>?</div>
                    <button className='sos-btn'>SOS</button>
                </div>
                <div className='section'>
                    <div className='black-box'>
                        <div>
                            <h2>A Centralized Solution to </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec diam finibus, tempor duis nec diam finibus, tempor or leo eu, fermentum est. Nunc vestibulum vul.</p>
                            <button className='button2' style={{margin: '7px 0 10px 0'}}>Try it out</button>
                        </div>
                    </div>
                </div>
                <div className='section card-list'>
                    <div className='card'>
                        <FontAwesomeIcon icon={faHeartCircleCheck} size='6x' color='var(--lightred)' />
                        <h2>Live Updates</h2>
                        <p className='center-text'>Verify the safety of your loved ones in real time.</p>
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faEarthOceania} size='6x' color='var(--lightred)' />
                        <h2>Live Updates</h2>
                        <p className='center-text'>Verify the safety of your loved ones in real time.</p>
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faCloudArrowUp} size='6x' color='var(--lightred)' />
                        <h2>Easy Access</h2>
                        <p className='center-text'>Filter on-demand data accessed through the cloud.</p>
                    </div>
                </div>
            </div>
        );
    }
}