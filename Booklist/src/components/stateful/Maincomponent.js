import React, { Component } from 'react'
import Book from '../representational/Book';
import Bookstore from '../../resources/books';
import '../../stylesheets/Book.css'
import '../../App.css'
import Booklist from '../representational/Booklist';
import Newbook from '../representational/Newbook';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import Bookdetails from '../representational/Bookdetails';
class Main extends Component{
    state={
        books:Bookstore,
        //adding new state
        showbookstatus:true,
        selectedBook:null,
      }
      //creating a function for handeling books
      bookSelectionHandler=bookId=>{
        const book=this.state.books.filter(element_book=>
          element_book.id===bookId
          )[0]
        this.setState({selectedBook:book});
      }
      render(){
        //Printing state in console
        let Books="Books are Not Avaiable"
        if(this.state.showbookstatus)
        {
          Books=<Booklist books={this.state.books} 
          selectionbook={this.bookSelectionHandler}
          />
          //<button onClick={this.togglebook_status}>Toggle Books</button>
         }
        return(
          <div className="App">
           <h1 className='header'>Book List</h1>
          <nav className="nav-bar">
          <ul>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/newbook">Newbook</NavLink></li>
           </ul>
          </nav>
          <hr></hr>
          <Switch>
          <Route path="/books" exact render={()=>Books}/>
          <Route path="/newbook" exact component={Newbook} />
          <Route path="/book/:id" exact render={()=>
          <Bookdetails selected_book={this.state.selectedBook} />
          }
          />
          <Redirect from="/" to="/books"></Redirect>
          </Switch>
        </div>
        );
      }
}

export default Main;