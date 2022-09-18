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
                <div className='frame'>
                    {notes.map(note => <div>
                        <p>{note.text}</p>
                        <button onClick={() => handleDeleteNote(note.id)}>Remove</button>
                    </div>)}
                    <button onClick={handleCreateNote}>Add Note</button>
                    </div>
            </div>
        );
    }
}