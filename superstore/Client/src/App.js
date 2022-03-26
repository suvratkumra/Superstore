import "./App.css";
import { useNavigate } from "react-router-dom";
import Signup from './signup';
import MainPage from "./mainPage/main";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import React, { useState } from 'react';
import {Navigate} from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

return(
  <>
  
  <Router>
    <Routes>
      <Route path="/Home" element = {<Home />} /> 
      <Route path="/" element={<Navigate replace to ="/Home" />} />
      <Route path="/signup" element= {<Signup />} />
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
  </>
  
  
)
  
  
}


export default App;
