import React from 'react';
import { useState, useEffect } from 'react';
import '../css/Home.css';     // two dots because you have to go to previous directory first
import MainPage from '../mainPage/main';
import Axios from 'axios'

export default function WelcomePage() {

  const initialValues = {email:"", password:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [dataFetched, setDataFetched] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if(isSubmit){
      window.location.href = "http://localhost:3000/MainPage";
    }
  }

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      Axios.post("http://localhost:3001/api/login", {
      email:formValues.email,
      password:formValues.password
      }).then((res) => {
        console.log(res.data);
       setDataFetched(res.data);
      })    
      console.log(dataFetched);
    }
    if(dataFetched.length > 0)
      setIsSubmit(true);
    
    console.log(isSubmit);
    setDataFetched('');
  },[formErrors]);


  const validate = (values) => {
    const errors = {};
    if(!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  return (
    <>
    <div className='body'>
      <div className='name__container'>
          <span class = "superstore_name">WELCOME </span>
          <span class = "superstore_name"> TO </span>
          <span class = "superstore_name">SUPERSTORE</span>
      </div>


      {/* Now making the login page */}
      <form className = 'login__container' onSubmit={handleSubmit}>
        <div className='login__containerHeader'>
          A registered user? Login below...
        </div>
        <div className='login__credentials'>
          
          <label for = "Email_Id">Email ID*: </label>
          <input type = "email" 
            name = "email" 
            placeholder='Email'
            value = { formValues.email } 
            onChange= {handleChange} />
            <p>{ formErrors.email }</p>
            
          <label for = "password">Password*: </label>
          <input type = "password" 
            name = "password"
            placeholder='password' 
            value = { formValues.password }
            onChange= {handleChange} />
            <p>{ formErrors.password }</p>
          <button className = 'LoginButton'> Login </button>
        </div>
        <div className='forgotPassword__container'>
          <span className='forgotPassword'> <i> <a href = '/ForgotPassword'> Forgot your password? </a> </i> </span>
        </div>
        <br/>
        <div className='signup__container'>
          <span> New user? </span>
          <span className='signup'><a href = "/signup">Sign Up!</a></span>
        </div>
      </form>
    </div>
    




    {/* <div className='buttons__container'>
       <button onClick = {event => window.location.href='/signup'}>signup</button>
    </div> */}
    </>
    
    
  )
}