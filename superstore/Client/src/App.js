import "./App.css";
import { useNavigate } from "react-router-dom";
import Signup from './signup';

import React, { useState } from 'react';
import {Link} from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  //let history = useNavigate();

return(
  <>
    

  <Router>
    <Routes>
      <Route path="/" />     
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
  <button onClick = {<Signup />}>signup</button>
  </>
  
  
)
  
  
}


export default App;
