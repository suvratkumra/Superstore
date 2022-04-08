import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import '../css/signup.css'
import Axios from 'axios'
import {Navigate} from 'react-router-dom';

function Warehouse() {

    // allocating the departments name with number
    const initialValues = {cosmetics: "1", bakery: "2", produce: "3", meat_seafood: "4", dairy_eggs: "5", equipment: "6", medical: "7", toys: "8", frozen: "9", kids_clothes: "10", men_clothes: "11", household: "12", snacks_candy: "13", women_clothes: "14"}

    const handleExtraction = (e) => {
        
    }

    return(
        <>
          <div id = "overallWarehouse__container">
              <div id = "departmentCol1__container">
                    <div class = "department__container" id = "Bakery__division">
                        { handleExtraction }
                    </div>
              </div>

              <div id = "departmentCol2__container">

              </div>

              <div id = "departmentCol3__container">
                
              </div>
          </div>  



        </>
    )
    
}

export default Warehouse;