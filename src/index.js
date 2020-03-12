import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


const NoteApp = () => {
    const [ notes, setNotes ] = useState([]);
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        setNotes([
            ...notes,
            {
                title,
                body,
            },
        ]);
        setTitle('');
        setBody('');
    };

    const removeNote = (title) => {
        setNotes(notes.filter((note) => ( note.title !== title )));
    };

    return (
        <div>
            <h1>Notes</h1>
            <p>Add note:</p>
            <form onSubmit={ addNote }>
                <input value={ title } onChange={ (e) => setTitle(e.target.value) }/>
                <textarea value={ body } onChange={ (e) => setBody(e.target.value)}/>
                <button>Add Note</button>
            </form>
            <hr />
            { notes.map((note) => (
                <div key={ note.title }>
                    <h3>{ note.title }</h3>
                    <p>{ note.body }</p>
                    <button onClick={ () => removeNote(note.title) }>x</button>
                </div>
            )) }
        </div>
    );
};

// export const App = (props) => {
//     const [ count, setCount ] = useState(props.count);
//     const [ text, setText ] = useState('');
//
//     const increment = () => {
//         setCount( count + 1 );
//     };
//
//     const decrement = () => {
//         setCount( count - 1);
//     };
//
//     const reset = () => {
//         setCount( props.count );
//     };
//
//     const onTextChange = (e) => {
//         setText(e.target.value);
//     };
//
//     return (
//       <div>
//           <p>The current { text || 'count' } is { count }</p>
//           <button onClick={ increment } className="plusOne">+1</button>
//           <button onClick={ reset } className="reset">Reset</button>
//           <button onClick={ decrement } className="minusOne">-1</button>
//           <input value={ text } onChange={ (e) => onTextChange(e) }/>
//       </div>
//     );
// };
//
// App.defaultProps = {
//     count: 0,
// };

ReactDOM.render(<NoteApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
