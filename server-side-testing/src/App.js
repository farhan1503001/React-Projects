import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios'
class App extends Component{
  //react addition
  //using state
  state={
    dishes:null,
    errMessage:null
  }
  componentDidMount(){
    console.log("Initially: ",this.state)
    axios.get("http://localhost:3001/dishes")
    .then(response=>console.log(response.data))
    .then(data=>this.setState({
      dishes:data
    }))
    .catch(error=>this.setState({
      errMessage:error.message
    }))
    /*
    //now posting a value
    
    axios.post("http://localhost:3001/dishes",{name:"Italian Pasta",price:"450"})
    .then(response=>console.log(response))
    //now changing a value
    axios.put("http://localhost:3001/dishes/2",{name:"Chicken Burger",price:135})
    .then(response=>console.log(response))
    */
    axios.delete("http://localhost:3001/dishes/2")
    .then(response=>console.log(response))
    .catch(error=>this.setState(
      {
        errMessage:error.message
      }
    ))
  
  }
  componentDidUpdate(){
    console.log("Updated: ",this.state);
  }
    render(){
      return(
        <div>

        </div>
      );
    }
}

export default App;
