import React from 'react';
import '../NavBar.css';
import SignIn from '../components/SignIn';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMap, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons'

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
                <Link to="/" className='nav-link'>
                    <FontAwesomeIcon icon={faHeart} color="var(--red)" style={{fontSize: '23px'}}/>
                </Link>
                <div className="nav-links">
                    <div>
                        <FontAwesomeIcon icon={faPaperPlane} color="var(--lightred)" style={{marginRight: '10px'}}/>
                        <Link to="/search" className='nav-link'>Advanced Search</Link>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMap} color="var(--lightred)" style={{marginRight: '10px'}}/>
                        <Link to="/map" className='nav-link'>Map</Link>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUser} color="var(--lightred)" style={{marginRight: '10px'}}/>
                        <Link to="/profile" className='nav-link'>Profile</Link>
                    </div>

                    <button
                        onClick={this.toggleSignIn}
                    >Sign In</button>
                </div>
                {this.state.displaySignIn == true && <SignIn/>}
            </div>
        )
    }
}