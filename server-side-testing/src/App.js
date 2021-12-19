import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios'
class App extends Component{
  //react addition
  componentDidMount(){
    axios.get("http://localhost:3001/dishes")
    .then(response=>console.log(response.data))
    .then(data=>console.log(data))
    .catch(error=>console.log(error.message))

    //now posting a value
    
    //axios.post("http://localhost:3001/dishes",{name:"Italian Pasta",price:"450"})
    //.then(response=>console.log(response))
    //now changing a value
    //axios.put("http://localhost:3001/dishes/2",{name:"Chicken Burger",price:135})
    //.then(response=>console.log(response))

    axios.delete("http://localhost:3001/dishes/2")
    .then(response=>console.log(response))
    
  }
    render(){
      return(
        <div>

        </div>
      );
    }
}

export default App;
