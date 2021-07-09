import React, { Component } from 'react'


let Person=(props)=>{
  console.log(props);
  return(
  <div>
    <h2>Name: {props.name} Age: {props.age} years</h2>
    <h3>Info: {props.children ? props.children : "Not Available"}</h3>
  </div>
  );
}
export default Person;


/*
class Person extends Component{
    constructor(props){
        super(props);
    }
    render(){
  
      return(
        <div>

        <h2>Name: {this.props.name} Age: {this.props.age} years</h2>
        <h3>Info: {this.props.children ? this.props.children : "Not Available"}</h3>
  
        </div>
      );
  
    }
  }
  export default Person;
 // */