import React from 'react';
import '../css/Home.css';     // two dots because you have to go to previous directory first
export default function WelcomePage() {
  return (
    <>
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
        
      </div>
    </div>




    {/* <div className='buttons__container'>
       <button onClick = {event => window.location.href='/signup'}>signup</button>
    </div> */}
    </>
    
    
  )
}