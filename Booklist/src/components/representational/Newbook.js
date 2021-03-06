import React,{Component} from "react";

class Newbook extends Component{
    constructor(props){
        super(props);
        this.state={
            bookname:'',
            writer:'',
            description:'',
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleInputChange=e=>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState(
            {
                [name]:value
            }
        )
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
                onChange={this.handleInputChange}
                ></input>
                <br/>
                <label>Writer</label>
                <br/>
                <input type='text' name='writer' value={this.state.writer}
                onChange={this.handleInputChange}></input>
                <br/>
                <label>Description</label>
                <br/>
                <textarea name='description' value={this.state.description}
                onChange={this.handleInputChange}
                ></textarea>
                <br/>
                <input type='submit' name='submit'></input>
                </form>
            </div>
        );
    }
    
}
export default Newbook;