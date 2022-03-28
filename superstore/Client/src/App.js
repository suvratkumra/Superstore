import "./css/App.css";
import Signup from './Authentication/signup';
import MainPage from "./mainPage/main";
import ErrorPage from "./HelpPages/ErrorPage";
import WelcomePage from "./Home/Home";
import ForgotPassword from "./Authentication/ForgotPassword";
import Bakery from './Departments/Bakery'
import Produce from './Departments/Produce'
import Dairy from './Departments/Dairy'
import Equipment from './Departments/Equipment'
import Meat from './Departments/Meat'
import Frozen from './Departments/Frozen'
import Toys from './Departments/Toys'
import Medical from './Departments/Medical'
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
      <Route path="/Departments/Bakery" element={<Bakery />} />
      <Route path="/Departments/Produce" element={<Produce />} />
      <Route path="/Departments/Dairy" element={<Dairy />} />
      <Route path="/Departments/Equipment" element={<Equipment />} />
      <Route path="/Departments/Meat" element={<Meat />} />
      <Route path="/Departments/Frozen" element={<Frozen />} />
      <Route path="/Departments/Toys" element={<Toys />} />
      <Route path="/Departments/Medical" element={<Medical />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
  </>
  
  
)
  
  
}


export default App;
