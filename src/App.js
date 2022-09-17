import './App.css';
import { createNote, deleteNote} from './graphql/mutations'
import { listNotes } from './graphql/queries'
import { useCallback, useEffect, useState } from 'react';
import { API } from 'aws-amplify';

import NavBar from './components/NavBar'
import DisplayData from './components/DisplayData.js'

//import Typing from './node_modules/typing-animate/typing.js'

function App({ signOut }) {

    /*const el = document.getElementById('el');
    const string = 'Your text...'

    new Typing({
        element: el,
        text: string,
        hideClass: hideElement,
        typingDelay: 70
    }).run();*/

    return (
        <div>
            <NavBar/>
            <div className='frame landing-page'>
                <div className='landing-title'>RUA_live?</div>
                <button className='sos-btn'>SOS</button>
            </div>
            <DisplayData/>
        </div>
    );
}

export default /*withAuthenticator(*/App/*)*/;