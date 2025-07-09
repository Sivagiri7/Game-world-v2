import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Control=()=>{
    const [updatedMail, mail]=useState("");
    const [updatedPass, pass]=useState("");
    const [updatedName,name]=useState("");
    const Handle=(event)=>{
        event.preventDefault();
        console.log(updatedName);
        console.log(updatedMail);
        console.log(updatedPass);
    }
    
    
return(
    <>
  <Form onSubmit={Handle}>
  <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Enter the name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" 
        onChange={(event)=>{
            name(event.target.value);
        }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        onChange={(event)=>{
            mail(event.target.value);
        }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        onChange={(event)=>{
            pass(event.target.value);
        }}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </>
)
}
export default Control;