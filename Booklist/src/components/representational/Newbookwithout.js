import React,{Component,createRef} from "react";

class Newbook extends Component{
    constructor(props){
        super(props);
        this.bookname=React.createRef();
        this.writer=React.createRef();
        this.description=React.createRef();
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit=e=>{
        e.preventDefault()
        console.log(this.state);
    }
    /*
    componentDidUpdate(){
        console.log(this.state)
    }
    */
    render(){
        return(
            <div>
                <h1>New Book Entry</h1>
                <label>Book Name</label>
                <br/>
                <form onSubmit={this.handleSubmit}>
                <input type='text' name='bookname' value={this.state.bookname}
                ref={this.bookname}
                ></input>
                <br/>
                <label>Writer</label>
                <br/>
                <input type='text' name='writer' value={this.state.writer}
                ref={this.writer}></input>
                <br/>
                <label>Description</label>
                <br/>
                <textarea name='description' value={this.state.description}
                ref={this.description}
                ></textarea>
                <br/>
                <input type='submit' name='submit'></input>
                </form>
            </div>
        );
    }
    
}