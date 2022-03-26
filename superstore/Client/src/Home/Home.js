import React from 'react';
import { useState } from 'react';
import '../css/Home.css';     // two dots because you have to go to previous directory first
export default function WelcomePage() {

  const [username, setUsername] = useState('')
    const [emailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')

  return (
    <>
    <div className='body'>
      <div className='name__container'>
          <span class = "superstore_name">WELCOME </span>
          <span class = "superstore_name"> TO </span>
          <span class = "superstore_name">SUPERSTORE</span>
      </div>


      {/* Now making the login page */}
      <div className = 'login__container'>
        <div className='login__containerHeader'>
          A registered user? Login below...
        </div>
        <div className='login__credentials'>
          <label for = "username">Username: </label>
          <input type = "text" name = "username" onChange={(e) => {
            setUsername(e.target.value)
          }}/>
          <label for = "Email_Id">EmailID: </label>
          <input type = "text" name = "Email_Id" onChange={(e) => {
            setEmailId(e.target.value)
          }}/>
          <label for = "password">Password: </label>
          <input type = "password" name = "username" onChange={(e) => {
            setPassword(e.target.value)
          }}/>
        </div>
      </div>
    </div>
    




    {/* <div className='buttons__container'>
       <button onClick = {event => window.location.href='/signup'}>signup</button>
    </div> */}
    </>
    
    
  )
}