import React, { useState } from 'react';
import { useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './splash.css'
function Login() {
  const [email, setEmail]=useState("");

  const isEmailValid=(email)=>{
    
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(!email || regex.test(email) === false);
 
  };

  const handleChange=(e)=>{
      setEmail(e.target.value);
  }
  const handleClick=(e)=>{
    e.preventDefault()
    if(isEmailValid(email)){
      alert("Success!!")
    }else{
      alert("Invalid Email!!")
    }
    
  }
  return <div className='loginBox'>
  <h2>Login Page</h2>
  <Form >
    <FormGroup>
      <Label for="email">Email</Label>
      <Input type="email" name="email" id="email"  onChange={handleChange} value={email}/>
    </FormGroup>
    <Button onClick={handleClick} class="btn btn-success">Submit</Button>
  </Form>
  </div>;
}

export default Login;
