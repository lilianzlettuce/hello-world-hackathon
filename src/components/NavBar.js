import React from 'react';
import '../NavBar.css';
import SignIn from '../components/SignIn';

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
                    <a className='nav-link'>Advanced Search</a>
                    <a className='nav-link'>Map</a>
                    <a className='nav-link'>Input Data</a>
                    <button
                        onClick={this.toggleSignIn}
                    >Sign In</button>
                </div>
                {this.state.displaySignIn == true && <SignIn/>}
            </div>
        )
    }
}