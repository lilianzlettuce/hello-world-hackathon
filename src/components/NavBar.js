'use strict';
import React from 'react';
import '../NavBar.css';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="navbar">
                <div className="name">
                </div>
                <div className="nav-links">
                    <a className='nav-link'>Advanced Search</a>
                    <a className='nav-link'>Map</a>
                    <a className='nav-link'>Input Data</a>
                    <button>Sign In</button>
                </div>
            </div>
        )
    }
}

//const domContainer = document.querySelector('#top-bar-container')
//ReactDOM.render(<NavBar />, domContainer)