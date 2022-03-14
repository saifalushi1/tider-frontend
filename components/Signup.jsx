import axios from "axios";
import React, { useState } from "react";
import {
    FormGroup,
    Input,
    Label,
    FormFeedback,
    Form,
  } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ headers }) => {
    const [newEmail, setNewEmail] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [newName, setNewName] = useState(null)
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://protected-hollows-70202.herokuapp.com/grouper/signup", {
            name: newName,
            email: newEmail,
            password: newPassword
        }, {headers: headers})
        .then(res => navigate("/loading"))
        .then(oop => setTimeout(() => {navigate("/")}, 3000))
        .catch(err => console.log(err))
    }
    return(
    <Form onSubmit={(e) => handleSubmit(e)} >
        <h3>Sign Up</h3>
    <FormGroup>
      <Label for="signUpEmail">Name</Label>
      <Input
        type="text"
        className="signUp-parameters"
        placeholder="Enter Your Name"
        onChange={ (e) => setNewName(e.target.value) }
      />
      <FormFeedback valid></FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="signUpEmail">Email</Label>
        <Input 
          type="email"
          className="signUp-parameters"
          placeholder="Enter Your Email"
          onChange={ (e) => setNewEmail(e.target.value) }      
        />
        <FormFeedback valid></FormFeedback>
    </FormGroup>
     <FormGroup>
        <Label for="signUpPassword">Password</Label>
        <Input 
          type="password"
          className="signUp-parameters"
          placeholder="Enter Your Password"
          onChange={ (e) => setNewPassword(e.target.value) }      
        />
        <FormFeedback valid></FormFeedback>
    </FormGroup>
   <button type="submit" className="sign-up-button">Sign Up</button>
      <p className="create-new-account">
          <Link to="/">Already Have An Account? Login</Link>
      </p>
      <p className="forgot-password">
        <Link to="/resetPassword">Forgot password?</Link>
      </p>
  </Form>
    )
}

export default SignUp