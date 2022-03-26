import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Signup() {

    let history = useNavigate();
    const [username, setUsername] = useState('')
    const [emailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')

  return (
    <>
    <div>
      <text className = "welcome">Welcome To Superstore</text>
    </div>
    
    <div className = "signup">
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
      <button onClick={() => {history.push('/login')}}>Make my Account!</button>
    </div>

    </>
  )
}

export default Signup;

// import "./App.css";
// import Signup from './signup';

// import React, { useState } from 'react';

// // import { BrowserRoute}

// function App() {

//   const [username, setUsername] = useState('')
//   const [emailId, setEmailId] = useState('')
//   const [password, setPassword] = useState('')

//   return (
//     <>
//     <div>
//       <text className = "welcome">Welcome To Superstore</text>
//     </div>
    
//     <div className = "signup">
//       <label for = "username">Username: </label>
//       <input type = "text" name = "username" onChange={(e) => {
//         setUsername(e.target.value)
//       }}/>
//       <label for = "Email_Id">EmailID: </label>
//       <input type = "text" name = "Email_Id" onChange={(e) => {
//         setEmailId(e.target.value)
//       }}/>
//       <label for = "password">Password: </label>
//       <input type = "password" name = "username" onChange={(e) => {
//         setPassword(e.target.value)
//       }}/>
//       <button>Make my Account!</button>
//     </div>

//     </>
//   )
// }


// export default App;
