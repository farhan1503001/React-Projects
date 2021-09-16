import React from 'react'
import '../../stylesheets/Book.css';
export default function Book(props) {
   
    return (
        <div className='Book' onClick={props.bookselection}>
            <h2>Book: {props.bookname}</h2>
            <h3>Writer: {props.writer}</h3>
        </div>
    )
}
