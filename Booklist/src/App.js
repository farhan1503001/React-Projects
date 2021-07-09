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
      {bookname:'1984',writer:'George Orwell'},
      {bookname:'The Vinci Code',writer:"Dan Brown"},
      {bookname:"Game of Thrones",writer:"George R.R Marin"}
    ]
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
  change_input=(event)=>{
    console.log('Text is changing');
    this.setState({
      books:[
      {bookname: event.target.value,writer:'George Orwell'},
      {bookname:'The Vinci Code',writer:"Dan Brown"},
      {bookname:"Metamorphosis",writer:"Franz Kafka"}
      ]
    })

  }
  render(){
    //Printing state in console
    console.log(this.state.books)
    return(
      <div className="App">
      <h1 className='header'>Book List</h1>
      <button onClick={this.Changebookstate.bind(this,'Ninenteen 84')}>Change State</button>
      <input type='text' onChange={this.change_input} />
      <hr></hr>
      <Book name={this.state.books[0].bookname} 
      writer={this.state.books[0].writer}
      changer={this.Changebookstate.bind(this,'Nineteen 84')}
      inputter={this.change_input}
      />
     
      <Book name={this.state.books[1].bookname} 
      writer={this.state.books[1].writer}/>
      <Book name={this.state.books[2].bookname} 
      writer={this.state.books[2].writer}/>
    </div>
    );
  }
}



export default App;
