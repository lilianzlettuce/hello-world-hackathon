import React from 'react';
import '../NavBar.css';
import '../SignUp.css';
import SignIn from '../components/SignIn';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMap, faPaperPlane, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySignIn: false,
            un: '',
            password: '',
        }
    }

    toggleSignIn = () => {
        this.setState({ 
            displaySignIn: !this.state.displaySignIn,
        });
    }

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value,
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
                {this.state.displaySignIn == true && 
                    <div>
                        <div className='transparent-container'>
                        </div>
                        <div className='sign-up-container'>
                            <FontAwesomeIcon icon={faXmark} id='x-icon'
                                onClick={this.toggleSignIn}/>
                            <h1>Log In to RUA_live</h1>
                            <div className="input-container">
                                <input 
                                    className="acct-input"
                                    name="un"
                                    placeholder="Username"
                                    onChange={this.handleChange}
                                    value={this.state.un}
                                />
                                <br/>
                                <input 
                                    className="acct-input"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                />
                            </div>
                            <br/>
                            <button className="acct-btn" onClick={this.login}>Sign in</button>
                        </div>
                    </div>}
            </div>
        )
    }
}