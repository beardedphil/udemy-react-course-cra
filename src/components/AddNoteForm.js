import React, { useState, useContext } from 'react';
import NotesContext from '../context/notesContext';
import useMousePosition from '../hooks/useMousePosition';

export const AddNoteForm = () => {
    const { dispatch } = useContext(NotesContext);
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const position = useMousePosition();

    const addNote = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_NOTE',
            title,
            body,
        });
        setTitle('');
        setBody('');
    };

    return (
        <>
            <p>Add note { position.x } - { position.y }</p>
            <form onSubmit={ addNote }>
                <input value={ title } onChange={ (e) => setTitle(e.target.value) }/>
                <textarea value={ body } onChange={ (e) => setBody(e.target.value)}/>
                <button>Add Note</button>
            </form>
        </>
    );
};

export { AddNoteForm as default };
