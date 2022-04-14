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
import Cosmetics from './Departments/Cosmetics'
import Snacks from './Departments/Snacks'
import Kid_Clothes from './Departments/Kid_Clothes'
import React, { useState } from 'react';
import {Navigate} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WomenClothes from "./Departments/WomenClothes";
import MenClothes from "./Departments/MenClothes";
import Household from "./Departments/Household";
import Manager from "./Manager_Warehouse/Manager";
import Warehouse from "./Manager_Warehouse/Warehouse";
import AccountSettings from "./Menu/AccountSettings";

import Cart from "./Cart/Cart";
import Thankyou from "./Thankyou"



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
      <Route path="/Departments/Cosmetics" element={<Cosmetics />} />
      <Route path="/Departments/Snacks" element={<Snacks />} />
      <Route path="/Departments/MenClothes" element={<MenClothes />} />
      <Route path="/Departments/WomenClothes" element={<WomenClothes />} />
      <Route path="/Departments/Household" element={<Household />} />
      <Route path="/Departments/Kid_Clothes" element={<Kid_Clothes />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/Thankyou" element={<Thankyou />} />
      <Route path="/Manager" element={<Manager />} />
      <Route path="/Warehouse" element={<Warehouse />} />

      <Route path="/Menu/AccountSettings" element={<AccountSettings />} />


      <Route path="/Cart" element={<Cart />} />
      {/* <Route path="/UserProfile" element={<UserProfile />} /> */}

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
  </>
  
  
)
  
  
}


export default App;
