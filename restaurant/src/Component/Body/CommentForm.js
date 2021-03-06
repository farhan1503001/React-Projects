import React,{Component} from "react";
import {Form,Input,Button} from 'reactstrap'
class CommentForm extends Component{
    constructor(props){
        super(props)
        this.state={
            author:"",
            rating:"",
            comment:""
        }
        this.handleInputOnChange=this.handleInputOnChange.bind(this);
        this.handlePressSubmit=this.handlePressSubmit.bind(this);
    }
    handleInputOnChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handlePressSubmit=(e)=>{
        //console.log(this.state)
        //now for changing redux store
        this.props.comment_addition(this.props.dishId,this.state.rating,
            this.state.author,
            this.state.comment
            )
        //clearing fields
        this.setState(
            {
                author:"",
                rating:"",
                comment:""
            }
        )
        
        e.preventDefault();
    }
    render(){
        //console.log(this.props)
        return(
            
            <Form>
                <Input type='text' name='author' value={this.state.author}
                placeholder="Your Name" onChange={this.handleInputOnChange}
                required 
                />
                <br/>
                <Input type='select' name='rating' value={this.state.rating}
                onChange={this.handleInputOnChange}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                <br/>
                <Input type='textarea' name='comment' value={this.state.comment}
                placeholder='Write Your Feedback'
                onChange={this.handleInputOnChange}
                required>
                </Input>
                <br/>
                <Button type='submit' color='primary' onClick={this.handlePressSubmit}>Submit</Button>
            </Form>
        )
    }
}
//adding mapping in props
export default CommentForm;