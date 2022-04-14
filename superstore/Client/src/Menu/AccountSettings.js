import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import './AccountSettings.css'
import Axios from 'axios'
import {Navigate} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import pic from '../images/team-male.png';

function AccountSettings() {

  const initialValues = {email:"", oldPassword:"", password:"", confirmPassword:""};
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
    
    if(formValues.email.length !== 0 && formValues.oldPassword.length !== 0 && formValues.password.length !== 0)
      setIsSubmit(true);  
      window.location.href = "http://localhost:3000/Menu/AccountSettings";
    
  }

  useEffect((values) => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      Axios.post("http://localhost:3001/api/Menu/AccountSettings", {
      email:formValues.email,
      oldPassword:formValues.oldPassword,
      password:formValues.password,
      }).then((res) => {
        console.log(res.data);
        setDataFetched(res.data);
      })    
    }

    // setDataFetched('');
    if(dataFetched.length === 0  && formValues.email.length !== 0 && formValues.oldPassword.length !== 0 && formValues.password.length !== 0)
     setIsSubmit(true);
  },[formErrors]);

  const validate = (values) => {
    const errors = {};
    if(!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.oldPassword) {
      errors.oldPassword = "Old Password is required!";
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

    <div className="color">
      <span className = "welcome1">User Profile</span>
    </div>
    
    <form className = "Update" onSubmit={handleSubmit}>

      <label for = "email">Email Address*: </label>
      <input type = "email" 
        name = "email" 
        placeholder="Email Address"
        value = { formValues.email }
        onChange = {handleChange} />
      <p> { formErrors.email } </p>
      <br/> <br/>

      <label for = "oldPassword">Old Password*: </label>
      <input type = "oldPassword" 
        name = "oldPassword" 
        placeholder="Old Password"
        value = { formValues.oldPassword }
        onChange = {handleChange} />
      <p> { formErrors.oldPassword } </p>
      <br/> <br/>
      
      <label for = "password">New Password*: </label>
          <input type = "password" 
            name = "password"
            placeholder='password' 
            value = { formValues.password }
            onChange= {handleChange} />
        <p>{ formErrors.password }</p>
            <br/> <br/>

      <label for = "Confirm Password">Confirm New Password*: </label>
        <input type = "password" 
          name = "confirmPassword"
          placeholder='password' 
          value = { formValues.confirmPassword }
          onChange= {handleChange} />
      <p>{ formErrors.confirmPassword }</p>
      <br/>

      <button className = 'make_btn1'>Update</button>

      <img src={pic} className="photo" alt="pic1" width={200} height={200} />

  
    </form>
    <div className = 'previous__container1'>
      <div classname = 'back'>
         <a href = '../MainPage' ><span class = "back_icon"><BsFillArrowLeftCircleFill /></span></a>
        <span class='goto_previous'>  View all departments</span>
        
      </div>

  
      </div>
    
    </>
  )
}

export default AccountSettings;