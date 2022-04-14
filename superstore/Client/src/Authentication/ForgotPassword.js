import React from 'react'
import './ForgotPassword.js.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import * as ReactDOM from 'react-dom';
import { validEmail, validPassword } from '../HelpPages/RegEx';

export default function ForgotPassword() {
  
  const initialValues = {email: "", hintQuestion: "", hintAnswer: "", passwordRetrived:"", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [dataFetched, setDataFetched] = useState('');
  const [dataDisplay, setDataDisplay] = useState(false);
  const [emailDoesntExist, setEmailDoesntExist] = useState(false);
  const [isContinuing, setContinuing] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(name, value)
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setFormErrors(validateEmail(formValues)); 
    if(Object.keys(formErrors).length === 0) {
      // doing the SQL commands here to retrieve the quetion
      Axios.post("http://localhost:3001/api/forgot_password", {
        email:formValues.email
      }).then((res) => {
        if(res.data.length > 1) {
          setDataDisplay(false);      // the user does not exist with this email
          setEmailDoesntExist(true);    // cuz the email id does not exist in the database
          window.location.href = "http://localhost:3000/ForgotPassword";
        }
        else {
          setFormValues({...formValues, hintQuestion: Object.values(res.data[0])})
          setContinuing(true);
          console.log(res.data);
          setDataDisplay(true);
        }
      })
    }
  }

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    setFormErrors(validateEmail(formValues)); 
    if(Object.keys(formErrors).length === 0) {
      // doing the SQL commands here to retrieve the quetion
      Axios.post("http://localhost:3001/api/reset_password", {
        hintAnswer:formValues.hintAnswer,
        email: formValues.email
      }).then((res) => {
        console.log(res.data);
        if(res.data == "Wrong Answer to your question.") {
          setFormErrors({"wrongAnswer": "The Answer is wrong"});
          window.location.href = "http://localhost:3000/ForgotPassword";
        }
        else{
          // setContinuing(true);
          setFormValues({...formValues, passwordRetrived: Object.values(res.data[0])})
          console.log(formValues.passwordRetrived)
         
        } 
        })
      }
  }

  const changePassword = () => {
    Axios.post('http://localhost:3001/api/ForgetPassword/UpdatePassword', {
      newPassword: formValues.password,
      email: formValues.email
    }).then((res) =>{ console.log(res.data)
    
      window.location.href = "http://localhost:3000/";
    })
  }


  const validateEmail = (values) => {
    const errors = {};
    if(!values.email) {
      errors.email = "Email is required!";
    }
    if(!validPassword.test(values.password))
      errors.password = "Password is of invalid type";
    if(!validEmail.test(values.email))
      errors.email = "Email is of invalid type";
    if(!values.password) 
      errors.password = "Password is empty"
    return errors;
  }

  return (
    <>
      <div id = "forgotPassword__mainContainer">
          <span id = "forgotPassword__heading"> FORGOT YOUR PASSWORD? </span>
          <br/>
          <span id = "resetBelow__text">Do not worry, you can reset it below.</span>
      </div>

      {/* form evaluation start here.  */}

      <form id = "forgotPassword__form" onSubmit = {handleSubmitEmail}>
      {emailDoesntExist && 
        <span id = "doesntExist__text">User with this specified Email Address does not exist.</span>}
        <br/>
        <label for = "Email_id">Email ID*: </label>
        <input type = "email" 
            id = "email__box"
            name = "email" 
            placeholder='Email'
            value = { formValues.email }
            onChange= {handleChange} />
            <p>{ formErrors.email }</p>
        <button type = "submit" id = "submitEmail__button">  Retrieve my data </button>
      </form>
      
        <br/><br/>
    {/* conditions are so weird in this  */}
    <div id = "displayData__container">
      {dataDisplay && !emailDoesntExist &&
      <form id = "insideDisplayData" onSubmit={handleSubmitAnswer}>
          <span id = "questionHeading__text"> YOUR SECURITY QUESTION </span> <br/>
          <span id = "question__text"> {formValues.hintQuestion} </span>
          <input type = "text" 
            id = "hintAnswer"
            name = "hintAnswer" 
            placeholder="Answer"
            value = { formValues.hintAnswer }
            onChange= {handleChange} />
            <p>{ formErrors.hintAnswer }</p>
            {console.log(formErrors)}
            <p>{ formErrors.wrongAnswer }</p>
            <button type = "submit" id = "submitEmail__button"> Submit </button>
      </form>
         }
         <br/>
         {isContinuing &&
         <div>
           <span id = "displayPassword__text">Enter your new Password:</span>
           <input type = "password" 
            name = "password"
            placeholder='Password' 
            value = { formValues.password }
            onChange= {handleChange}/>
            <button className= 'button-29' onClick = {()=>changePassword()}>Change Password</button>
           <br/>
           <span id = "login__below"><a href = "/WelcomePage">Login</a></span>
          </div>
        }
    </div>

      
    </>
  )
}