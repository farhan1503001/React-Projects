import React from 'react';
import Book from './Book'
const Booklist=(props)=>{

    return(
        props.books.map((book,index)=>{
            console.log(book)
            return(
               <Book 
               bookname={book.bookname} 
               writer={book.writer} 
               delete_func={()=>props.delete_book(index)}
               change_func={(e)=>props.change_input(e,index)}
               key={book.id}
               />
            )
            
          }
          )

    )

    

}

export default Booklist;