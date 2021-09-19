import React, { Component } from 'react'
import {Form,FormGroup,Label,Input,Col} from 'reactstrap'
import Button from 'reactstrap/lib/Button';
class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            telnum:"",
            email:"",
            agree:false,
            contactType:'Tel.',
            message:""
        }
        this.handleOnInputChange=this.handleOnInputChange.bind(this);
        this.handleonSubmit=this.handleonSubmit.bind(this);
    }
    handleOnInputChange=e=>{
        const value = e.target.type==='checkbox' ? e.target.checked:e.target.value;
        const name=e.target.name;
        this.setState({
            [name]:value
        })

    }
    handleonSubmit=e=>{
        console.log(this.state)
        e.preventDefault();
        
    }
    render(){
        document.title="Feedback"
        return(
            <div className='container'>
                <div className='row row-contents'>
                    <div className='col-12'>
                        <h1>Send Us Your Feedbacks!</h1>
                    </div>
                    <div className='col-12'>
                        <Form onSubmit={this.handleonSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col>
                                   <Input type='text' name='firstname' placeholder='First Name'  value={this.state.firstname}
                                   onChange={this.handleOnInputChange}
                                   />
                                </Col>   
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="secondname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' name='lastname' placeholder='Last Name' value={this.state.lastname} 
                                    onChange={this.handleOnInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type='tel.' name="telnum" placeholder='Contact Tel.' value={this.state.telnum}
                                    onChange={this.handleOnInputChange} 
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email Address</Label>
                                <Col md={10}>
                                    <Input type='email' name='email' placeholder='Contact Email' value={this.state.email} 
                                    onChange={this.handleOnInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6,offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type='checkbox' name='agree' value={this.state.agree} 
                                        onChange={this.handleOnInputChange}
                                        />
                                        <strong>May We Contact You?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3,offset:0}}>
                                    <Input type='select' name='contactType' value={this.state.contactType}
                                    onChange={this.handleOnInputChange}
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type='textarea' name='message' value={this.state.message} rows="12" 
                                    onChange={this.handleOnInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{size:10,offset:1}}>
                                    <Button type='submit' color='primary'>Send Feeback</Button>
                                </Col>
                            </FormGroup>
                        </Form>

                    </div>

                </div>
            </div>
        );
    }
}
export default Contact;
