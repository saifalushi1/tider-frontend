import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormGroup, Input, Label, FormFeedback, Form } from "reactstrap";

const Login = ({ loginRequest, storeId, isLoginInfoIncorrect, userId, userAuthToken }) => {
  const [inputEmailValue, setinputEmailValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginRequest(inputEmailValue, inputPasswordValue);
    storeId(inputEmailValue);
  };

  return isLoginInfoIncorrect === false ? (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <h3>Login</h3>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          value={inputEmailValue}
          className="login-parameters"
          placeholder="Enter email"
          onChange={(e) => setinputEmailValue(e.target.value)}
        />
        <FormFeedback valid></FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          value={inputPasswordValue}
          className="login-parameters"
          placeholder="Enter password"
          onChange={(e) => setInputPasswordValue(e.target.value)}
        />
        <FormFeedback valid></FormFeedback>
      </FormGroup>
      <input type="submit" value={`submit`} className="login-button" />
      <p className="create-new-account">
        <Link to="/signup">Create a new account</Link>
      </p>
      <p className="forgot-password">
        <Link to="/reset-password">Forgot password?</Link>
      </p>
    </Form>
  ) : (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <h3>Login</h3>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          value={inputEmailValue}
          className="login-parameters"
          placeholder="Enter email"
          onChange={(e) => setinputEmailValue(e.target.value)}
          invalid
        />
        <FormFeedback valid></FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          value={inputPasswordValue}
          className="login-parameters"
          placeholder="Enter password"
          onChange={(e) => setInputPasswordValue(e.target.value)}
          invalid
        />
        <FormFeedback invalid>User Email or Password Is Incorrect</FormFeedback>
      </FormGroup>
      <input type="submit" value={`submit`} className="login-button" />
      <p className="create-new-account">
        <Link to="/signup">Create a new account</Link>
      </p>
      <p className="forgot-password">
        <Link to="/resetPassword">Forgot password?</Link>
      </p>
    </Form>
  );
  // </>
};

export default Login;