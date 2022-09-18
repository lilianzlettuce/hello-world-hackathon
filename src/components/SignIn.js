import '../SignUp.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            un: '',
            password: '',
        }
    }

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <div className='transparent-container'>
                </div>
                <div className='sign-up-container'>
                    <FontAwesomeIcon icon={faXmark} id='x-icon'/>
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
            </div>
        );
    }
}