import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Book from './components/Book';
import './stylesheets/Book.css'
/*
function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Person />
    </div>
  );
}
*/

class App extends Component{
  state={
    books:[
      {id:1,bookname:'1984',writer:'George Orwell'},
      {id:2,bookname:'The Vinci Code',writer:"Dan Brown"},
      {id:3,bookname:"Game of Thrones",writer:"George R.R Marin"}
    ],
    //adding new state
    showbookstatus:true,
  }
  
  Changebookstate=(newbookname)=>{
    //this.setState()
    console.log('button has been clicke');
    //changing the state
    this.setState({
      books:[
      {bookname:newbookname,writer:'George Orwell'},
      {bookname:'The Vinci Code',writer:"Dan Brown"},
      {bookname:"Metamorphosis",writer:"Franz Kafka"}
      ]
    })
  };
  
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
    const Books=this.state.books.map((book,index)=>{
      console.log(book)
      return(
         <Book 
         bookname={book.bookname} 
         writer={book.writer} 
         delete_func={()=>this.delete_book(index)}
         change_func={(e)=>this.change_input(e,index)}
         key={book.id}
         />
      );
      
});
    return(
      <div className="App">
      <h1 className='header'>Book List</h1>
      <button onClick={this.togglebook_status}>Toggle Books</button>
      <hr></hr>
      {this.state.showbookstatus ? Books : "Books cannot be shown"}
    </div>
    );
  }
}



export default App;
