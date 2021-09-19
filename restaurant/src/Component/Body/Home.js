import React, { Component } from 'react'

class Home extends Component{

    componentDidMount(){
        console.log("Home state",this.state)
        console.log("Home props",this.props)
    }
    render(){
        document.title="Ovi's Restaurant"
        return(
            <div>

            </div>
        );
    }
}
export default Home;
