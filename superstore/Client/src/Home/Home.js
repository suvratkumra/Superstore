import React from 'react';
import { useState, useEffect } from 'react';
import '../css/Home.css';     // two dots because you have to go to previous directory first
export default function WelcomePage() {

  // const [username, setUsername] = useState('')
  //   const [emailId, setEmailId] = useState('')
  //   const [password, setPassword] = useState('')

  const initialValues = {email:"", password:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect = (() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      // correct form values with validation.
    }
  },[formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
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