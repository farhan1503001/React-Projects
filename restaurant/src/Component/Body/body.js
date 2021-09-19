import React, { Component } from "react";
import Menu from "./Menu";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import {Route,Redirect,Switch} from 'react-router-dom'
class Body extends Component{
    render(){
        return(
            <div>
                <Switch>
                <Route path='/home' exact component={Home}></Route>
                <Route path='/menu' exact component={Menu}></Route>
                <Route path='/about' exact component={About}></Route>
                <Route path='/contact' exact component={Contact}></Route>
                <Redirect from='/' to='/home'></Redirect>
                </Switch>
            </div>
        )
    };
}
export default Body;