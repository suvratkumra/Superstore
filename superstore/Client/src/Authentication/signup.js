import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import '../css/signup.css'
import Axios from 'axios'

function Signup() {

  const initialValues = {email:"", password:"", username:"", confirmPassword:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(true);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();       // so that page doesnt refresh on submit
    setFormErrors(validate(formValues));
    // post request into our backend
    console.log(isSubmit);
    console.log(Object.keys(formErrors));
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log("working");
      Axios.post("http://localhost:3001/api/signup", {
      username:formValues.username,
      email:formValues.email,
      password:formValues.password
      }).then(() => {
      console('successful insert of sql');
      })
    }
    
  }

  useEffect = ((values) => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      alert('Submitted');
      
    }
  },[formErrors]);

  const validate = (values) => {
    const errors = {};
    if(!values.email) {
      setIsSubmit(false);
      errors.email = "Email is required!";
    }
    if (!values.password) {
      setIsSubmit(false);
      errors.password = "Password is required!";
    }
    if (!values.username) {
      setIsSubmit(false);
      errors.username = "Username is required";
    }
    if(values.confirmPassword !== values.password) {
      setIsSubmit(false);
      errors.confirmPassword = "Two passwords do not match";
    }
    if(!values.confirmPassword){
      setIsSubmit(false);
      errors.confirmPassword = "Please enter the password again";
    }
    return errors;
  };

  return (
    <>
    <div>
      <text className = "welcome">Create an Account</text>
    </div>
    
    <form className = "signup" onSubmit={handleSubmit}>
      <label for = "username">Username*: </label>
      <input type = "text" 
        name = "username" 
        placeholder='Username'
        value = { formValues.username }
        onChange={handleChange} />
      <p> { formErrors.username } </p>
      <br/> <br/>
      <label for = "email">Email Address*: </label>
      <input type = "email" 
        name = "email" 
        placeholder="Email Address"
        value = { formValues.email }
        onChange = {handleChange} />
      <p> { formErrors.email } </p>
      <br/> <br/>
      <label for = "password">Password*: </label>
          <input type = "password" 
            name = "password"
            placeholder='password' 
            value = { formValues.password }
            onChange= {handleChange} />
        <p>{ formErrors.password }</p>
            <br/> <br/>
      <label for = "Confirm Password">Confirm Password*: </label>
        <input type = "password" 
          name = "confirmPassword"
          placeholder='password' 
          value = { formValues.confirmPassword }
          onChange= {handleChange} />
      <p>{ formErrors.confirmPassword }</p>
      <button className = 'make_btn'>Make my Account!</button>
    </form>

    </>
  )
}

export default Signup;