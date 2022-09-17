'use strict';
import React from 'react';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="section" id="navbar">
                <div className="name">
                </div>
                <div id="menu">
                    <button onClick={signOut}>Sign Out</button>
                </div>
            </div>
        )
    }
}

//const domContainer = document.querySelector('#top-bar-container')
//ReactDOM.render(<NavBar />, domContainer)