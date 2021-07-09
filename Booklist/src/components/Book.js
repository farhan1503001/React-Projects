import React from 'react'
import '../stylesheets/Book.css';
export default function Book(props) {
    return (
        <div className='Book'>
            <h2 onClick={props.changer}>Book: {props.name}</h2>
            <h3>Writer: {props.writer}</h3>
            <input type='text' onChange={props.inputter} />
        </div>
    )
}
