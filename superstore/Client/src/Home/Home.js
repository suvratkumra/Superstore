import React from 'react';
import { useState, useEffect } from 'react';
import '../css/Home.css';     // two dots because you have to go to previous directory first
import MainPage from '../mainPage/main';
import Axios from 'axios'
import  {emailExists} from '../Authentication/signup'
import { validEmail, validPassword } from '../HelpPages/RegEx'      // for regex  



function WelcomePage() {

  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );
  const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

  const initialValues = {email:"", password:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [dataFetched, setDataFetched] = useState('');
  
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log(dataFetched);
    
    if(isSubmit){ 
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
      if(dataFetched === "User Found, redirecting to the store page"){
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
    if(!validEmail.test(values.email)){
      errors.email = "Email is Invalid type";
    }
    if(!validPassword.test(values.password)) {
      errors.password = "Password is Invalid Type."
    }
    return errors;
  };

  return (
    <>
    {console.log(emailExists)}
    {emailExists && <div>This Email Already Exists. Log in Below</div>}
    <div className='body'>
      <div className='name__container'>
          <span className = "superstore_name">WELCOME </span>
          <span className = "superstore_name"> TO </span>
          <span className = "superstore_name">SUPERSTORE</span>
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
          <span className='forgotPassword'> <i> <a href = '/ForgotPassword' id = "forgotPasswordLine"> Forgot your password? </a> </i> </span>
        </div>
        <br/>
      </form>
      <form>
        <div className='signup__container'>
        <div className='signup__containerHeader'>
          New user?

        </div>
        <a href = "/signup" id='signup_line'>Sign Up!</a>

          {/* <span id = "new_user"> New user? </span>
          <span className='signup'><a href = "/signup" id='signup_line'>Sign Up!</a></span> */}
        </div>

        <div className = 'footer__manager_guest'>
          {/* <span className = 'guest_continue'><a href="#" id='guest_continue_line'>Continue as a Guest</a></span> */}
          <span className = 'manager_continue'><a href = "./Manager" id='manager_continue_line'>Continue as a Manager</a></span>
        </div>

      </form>
    </div>

    </>
    
    
  )
  
}

export default WelcomePage;