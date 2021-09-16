import React from 'react';
import Book from './Book'
import {withRouter,Link} from 'react-router-dom'
const Booklist=(props)=>{
    console.log(props)
    return(
        props.books.map((book,index)=>{
            //console.log(book)
            return(
            <Link to={"/book/"+book.id} key={book.id} style={{textDecoration:'none',color:'black'}}>
               <Book 
               bookname={book.bookname} 
               writer={book.writer} 
               bookselection={()=>props.selectionbook(book.id)}
               />
               </Link>
            )
          }
        )
    )
}

export default withRouter(Booklist);