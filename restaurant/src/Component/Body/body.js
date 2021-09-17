import React, { Component } from "react";
import Menu from "./Menu";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import {Route} from 'react-router-dom'
class Body extends Component{
    render(){
        return(
            <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/menu' exact component={Menu}></Route>
                <Route path='/about' exact component={About}></Route>
                <Route path='/contact' exact component={Contact}></Route>
            </div>
        )
    };
}
export default Body;