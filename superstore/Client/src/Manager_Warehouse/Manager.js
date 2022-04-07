import React from 'react'
import './Manager.js.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import * as ReactDOM from 'react-dom';

export default function Manager() {
    const initialValues = {email:"", password:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [dataFetched, setDataFetched] = useState('');
    const [managerPasswordReset, setManagerPasswordReset] = useState(false);


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log(dataFetched);
    
    if(dataFetched.length > 0){ 
      window.location.href = "http://localhost:3000/MainPage";
    }
  }

  useEffect(() => {
    if(Object.keys(formErrors).length === 0) {
      Axios.post("http://localhost:3001/api/login", {
      email:formValues.email,
      password:formValues.password
      }).then((res) => {
        setDataFetched(res.data);
        //console.log(dataFetched);
      }) 
      setDataFetched('')
      if(dataFetched > 0){
        setIsSubmit(true);
      }
    }
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
    return(

        <>
    <div className='body'>
      <div className='name__container'>
          <span class = "superstore_name">MANAGER </span>
          <span class = "superstore_name"> LOGIN </span>
      </div>


      {/* Now making the login page */}
      <form className = 'login__container' onSubmit={handleSubmit}>
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
            <span className='forgotPassword'> <i> <a href = '#' id = "forgotPasswordLine" onClick = { (() => setManagerPasswordReset(true)) }> Forgot your password? </a> </i> </span>
            {managerPasswordReset && <div>
                <br/><br/>
                <span id = "displayPassword__text"> Contact the higher authority to reset your password. </span>       
            </div>
            
            }
            </div>
        <br/>
       

      </form>
    </div>

    </>
    )
}