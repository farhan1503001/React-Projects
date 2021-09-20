import React, { Component } from 'react'
import {connect} from 'react-redux'
import Loading from "./Loading"
const mapStateToProps = state=>{
    //console.log("From Store Redux ",state);
    return{
        dishes:state.dishes,
        comments:state.comments,
        sample_text:state.sample_text
    }
}
class Home extends Component{
    componentDidMount(){
        console.log("Home props at first",this.props)
        this.props.dispatch(
            {
                type:'TEST',
                str_text:"Bohubrihi"
            }
        )
    }
    componentDidUpdate(){
        console.log("After updating",this.props);
    }
    render(){
        document.title="Ovi's Restaurant"
        return(
            <div>
                <Loading></Loading>
            </div>
        );
    }
}
export default connect(mapStateToProps)(Home);
