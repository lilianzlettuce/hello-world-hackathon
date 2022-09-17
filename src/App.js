import './App.css';
import { withAuthenticator } from "@aws-amplify/ui-react";

import NavBar from './components/NavBar'
import DisplayData from './components/DisplayData.js'
import SignUp from './components/SignUp'

function App({ signOut }) {
    return (
        <div>
            <NavBar/>
            <div className='frame landing-page'>
                <div className='landing-title' id='landing-title'>RUA_live?</div>
                <button className='sos-btn'>SOS</button>
            </div>
            <DisplayData/>
            <SignUp/>
        </div>
    );
}

export default App;