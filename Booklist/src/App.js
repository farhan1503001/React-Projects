import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Book from './components/representational/Book';
import './stylesheets/Book.css'
import Bookstore from './resources/books';
import Main from './components/stateful/Maincomponent';
import {BrowserRouter} from 'react-router-dom'
function App(){
  return(
    <BrowserRouter>
       <Main />
    </BrowserRouter>
 
  );
}



export default App;
