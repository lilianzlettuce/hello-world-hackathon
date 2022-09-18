import './Search.css';
import { createNote, deleteNote} from './graphql/mutations'
import { listNotes } from './graphql/queries'
import { useCallback, useEffect, useState } from 'react';
import { API } from 'aws-amplify';

import NavBar from './components/NavBar';

function Search({ signOut }) {
    const [ notes, setNotes ] = useState([])

    const fetchNotes = useCallback(async () => {
        const result = await API.graphql({
        query: listNotes,
        authMode: 'AMAZON_COGNITO_USER_POOLS'
        })
        setNotes(result.data.listNotes.items)
    }, [setNotes])

    const handleCreateNote = useCallback(async () => {
        await API.graphql({
        query: createNote,
        variables: { input: { text: window.prompt("New note") } },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
        })
        fetchNotes()
    }, [fetchNotes])

    const handleDeleteNote = useCallback(async (id) => {
        await API.graphql({
        query: deleteNote,
        variables: { input: { id: id } },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
        })
        fetchNotes()
    }, [fetchNotes])

    useEffect(() => {
        fetchNotes()
    }, [fetchNotes])

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

export default /*withAuthenticator(*/Search/*)*/;