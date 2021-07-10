import React, { Component } from 'react'
import Book from '../representational/Book';
import Bookstore from '../../resources/books';
import '../../stylesheets/Book.css'
import '../../App.css'
import Booklist from '../representational/Booklist';
class Main extends Component{
    state={
        books:Bookstore,
        //adding new state
        showbookstatus:true,
      }
      
      change_input=(event,index)=>{
        console.log('Text is changing');
        console.log(index);
        console.log("value"+event.target.value);
        
        var books=JSON.parse(JSON.stringify(this.state)).books
        books[index].bookname=event.target.value
        this.setState({
          books:books
        })
        
      }
      togglebook_status=()=>{
          this.setState(
            {showbookstatus:!this.state.showbookstatus}
          )
      }
       delete_book=(index)=>{
         const book=this.state.books
         book.splice(index,1)
         this.setState(
           {
             books:book
           }
         )
       }
      render(){
        //Printing state in console
        let Books="Books are Not Avaiable"
        if(this.state.showbookstatus)
        {
          Books=<Booklist books={this.state.books} delete_book={this.delete_book} change_input={this.change_input} />
          
        
        }
        return(
          <div className="App">
          <h1 className='header'>Book List</h1>
          <button onClick={this.togglebook_status}>Toggle Books</button>
          <hr></hr>
          {Books}
        </div>
        );
      }
}

export default Main;