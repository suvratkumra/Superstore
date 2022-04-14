import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import './AccountSettings.css'
import Axios from 'axios'
import {Navigate} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function AccountSettings() {

  const initialValues = {email:"", password:"", confirmPassword:""};
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
    
    if(formValues.email.length !== 0 && formValues.password.length !== 0)
      setIsSubmit(true);  
      window.location.href = "http://localhost:3000/Menu/AccountSettings";
    
  }

  useEffect((values) => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      Axios.post("http://localhost:3001/api/Menu/AccountSettings", {
      email:formValues.email,
      password:formValues.password,
      }).then((res) => {
        console.log(res.data);
        setDataFetched(res.data);
      })    
    }
    // setDataFetched('');
    if(dataFetched.length === 0  && formValues.email.length !== 0 && formValues.password.length !== 0)
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
      <span className = "welcome">User Profile</span>
    </div>
    
    <form className = "Update" onSubmit={handleSubmit}>
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
      <br/>
      <button className = 'make_btn'>Update</button>

     
    </form>

    </>
  )
}

export default AccountSettings;
