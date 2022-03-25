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
    <div>
      <Route path="/signup" component={Signup} />
      
    </div>
  </Router>
  <button >signup</button>
  </>
  
  
)
  
  
}


export default App;
