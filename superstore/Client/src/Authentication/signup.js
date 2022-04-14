import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import '../css/signup.css'
import Axios from 'axios'
import {Navigate} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from '../mainPage/main';

function Signup() {

  const initialValues = {email:"", password:"", username:"", confirmPassword:"", hintQuestion:"", hintAnswer:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [dataFetched, setDataFetched] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();       // so that page doesnt refresh on submit
    setFormErrors(validate(formValues));
    
    if(formValues.username.length !== 0 && formValues.email.length !== 0 && formValues.password.length !== 0)
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
      password:formValues.password,
      hintQuestion: formValues.hintQuestion,
      hintAnswer: formValues.hintAnswer
      }).then((res) => {
        console.log(res.data);
        setDataFetched(res.data);
      })    
    }
    setDataFetched('');
    if(dataFetched.length === 0 && formValues.username.length !== 0 && formValues.email.length !== 0 && formValues.password.length !== 0)
     setIsSubmit(true);
  },[formErrors]);

  const validate = (values) => {
    const errors = {};
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
    if(values.hintQuestion === ""){
      errors.hintQuestion = "Please enter a valid question";
    }
    if(!values.hintAnswer){
      errors.hintAnswer = "Please enter the password";
    }
    return errors;
  };

  return (
    <>
    <div className="stylingWelcome">
      <text className = "welcome">Create an Account</text>
    </div>
    
    <form className = "signup1" onSubmit={handleSubmit}>
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
            placeholder='Password' 
            value = { formValues.password }
            onChange= {handleChange} />
        <p>{ formErrors.password }</p>
            <br/> <br/>
      <label for = "Confirm Password">Confirm Password*: </label>
        <input type = "password" 
          name = "confirmPassword"
          placeholder='Password' 
          value = { formValues.confirmPassword }
          onChange= {handleChange} />
      <p>{ formErrors.confirmPassword }</p>
      <br/>

      {/* <label for = "hintQuestion">Hint Question*: </label>
      <input type = "text" 
        name = "hintQuestion" 
        placeholder='Hint Question'
        value = { formValues.hintQuestion }
        onChange={handleChange} /> */}

   
      <label for = "hintQuestion">Security Question*: </label>
          <select id="hintQuestion" name="hintQuestion" value = {formValues.hintQuestion} onChange = {handleChange}>
          <option value="none">Select a question</option>
          <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
          <option value="Who is your childhood hero?">Who is your childhood hero?</option>
          <option value="What was the first car you bought?">What was the first car you bought?</option>
          <option value="What is your favorite movie?">What is your favorite movie?</option>
        </select>
      <p>{ formErrors.hintQuestion }</p>
     
     <br/> <br/>

      <label for = "hintAnswer">Hint Answer*: </label>
      <input type = "text" 
        name = "hintAnswer" 
        placeholder='Hint Question'
        value = { formValues.hintAnswer }
        onChange={handleChange} />
      <p>{ formErrors.hintAnswer }</p>
      <br/> <br/>
      <button className = 'make_btn'>Make my Account!</button>
    </form>

    </>
  )
}

export default Signup;
