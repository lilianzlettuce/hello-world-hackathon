import React from 'react';
import '../NavBar.css';
import SignIn from '../components/SignIn';

import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySignIn: false,
        }
    }

    toggleSignIn = () => {
        this.setState({ 
            displaySignIn: true,
        });
    }

    render() {
        return (
            <div className="navbar">
                <div className="name">
                </div>
                <div className="nav-links">
                    <Link to="/search" className='nav-link'>Advanced Search</Link>
                    <Link to="/map" className='nav-link'>Map</Link>
                    <Link to="/data" className='nav-link'>Input Data</Link>

                    <button
                        onClick={this.toggleSignIn}
                    >Sign In</button>
                </div>
                {this.state.displaySignIn == true && <SignIn/>}
            </div>
        )
    }
}