import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import '../css/signup.css'
import Axios from 'axios'
import {Navigate} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from '../mainPage/main';

function Signup() {

  const initialValues = {email:"", password:"", username:"", confirmPassword:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [dataFetched, setDataFetched] = useState('');
  const [booleanForExists, setBooleanForExists] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();       // so that page doesnt refresh on submit
    setFormErrors(validate(formValues));
    if(!booleanForExists && formValues.username.length !== 0 && formValues.email.length !== 0 && formValues.password.length !== 0)
      setIsSubmit(true);  
    console.log(isSubmit);
    if(isSubmit){
      window.location.href = "http://localhost:3000/MainPage";
    }
  }

  useEffect((values) => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      Axios.post("http://localhost:3001/api/signup", {
      username:formValues.username,
      email:formValues.email,
      password:formValues.password
      }).then((res) => {
        console.log(res.data);
        if(res.data === "User already registered with this Email") {
          setBooleanForExists(true);
          console.log(booleanForExists);
        }
        setDataFetched(res.data);
      })    
    }
    setDataFetched('');
    if(!booleanForExists && dataFetched.length === 0 && formValues.username.length !== 0 && formValues.email.length !== 0 && formValues.password.length !== 0)
     setIsSubmit(true);
  },[formErrors]);

  const validate = (values) => {
    const errors = {};
    setBooleanForExists(false);
    if(!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    if (!values.username) {
      errors.username = "Username is required";
    }
    if(values.confirmPassword !== values.password) {
      errors.confirmPassword = "Two passwords do not match";
    }
    if(!values.confirmPassword){
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
       <p> {dataFetched} </p>
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
