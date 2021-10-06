/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import {FormGroup,Label,Col,Button} from 'reactstrap'
import {LocalForm,Control,Errors} from 'react-redux-form'
const required=val=> val && val.length;
const isNumber=val=> !isNaN(Number(val));
const validEmail=val=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(val);
class Contact extends Component{
    handleonSubmit=values=>{
        console.log(values)
        
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
                        <LocalForm onSubmit={values=>this.handleonSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col>
                                   <Control.text model='.firstname' name='firstname' placeholder='First Name'
                                   className='form-control'
                                   validators={
                                    {
                                        required
                                    }
                                   }
                                   />
                                   <Errors
                                   className='text-danger'
                                   model='.firstname'
                                   show='touched'
                                   messages={
                                       {required:"Value is Needed "}
                                   }
                                   />
                                </Col>   
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="secondname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model='.lastname' name='lastname' placeholder='Last Name'
                                    className='form-control'
                                    validators={
                                        {
                                            required
                                        }
                                    }
                                    />
                                    <Errors
                                   className='text-danger'
                                   model='.lastname'
                                   show='touched'
                                   messages={
                                       {required:"Value is Needed "}
                                   }
                                   />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text
                                     model='.telnum' name="telnum" placeholder='Contact Tel.'
                                     className='form-control'
                                     validators={
                                         {
                                             required,
                                             isNumber
                                         }
                                     }
                                    />
                                    <Errors
                                   className='text-danger'
                                   model='.telnum'
                                   show='touched'
                                   messages={
                                       {required:"Value is Needed, ",
                                       isNumber: "Numbers only"
                                    }
                                   }
                                   />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email Address</Label>
                                <Col md={10}>
                                    <Control.text 
                                    model='.email' 
                                    name='email' 
                                    placeholder='Contact Email'
                                    className='form-control'
                                    validators={
                                        {
                                            required,
                                            validEmail
                                        }
                                    }
                                    />
                                    <Errors
                                   className='text-danger'
                                   model='.email'
                                   show='touched'
                                   messages={
                                       {
                                           required:"Value is Needed, ",
                                           validEmail:'Email format invalid'
                                    }
                                   }
                                   />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6,offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                        <Control.checkbox model=".agree" name='agree'
                                        className='form-control'
                                        />
                                        <strong>May We Contact You?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3,offset:0}}>
                                    <Control.select model='.contactType'
                                     name='contactType'
                                     className='form-control'
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model='.message' name='message' rows="12" 
                                    className='form-control'
                                    validators={
                                        {
                                            required
                                        }
                                    }
                                    />
                                    <Errors
                                   className='text-danger'
                                   model='.message'
                                   show='touched'
                                   messages={
                                       {required:"Value is Needed"}
                                   }
                                   />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{size:10,offset:1}}>
                                    <Button type='submit' color='primary'>Send Feeback</Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>

                    </div>

                </div>
            </div>
        );
    }
}
export default Contact;
