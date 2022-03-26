import "./css/App.css";
import Signup from './Authentication/signup';
import MainPage from "./mainPage/main";
import ErrorPage from "./HelpPages/ErrorPage";
import WelcomePage from "./Home/Home";
import React, { useState } from 'react';
import {Navigate} from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

return(
  <>
  
  <Router>
    <Routes>
      <Route path="/WelcomePage" element = {<WelcomePage />} /> 
      <Route path="/" element={<Navigate replace to ="/WelcomePage" />} />
      <Route path="/signup" element= {<Signup />} />
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
  </>
  
  
)
  
  
}


export default App;
