import React from 'react'
import { useNavigate } from "react-router-dom";
import "./main.css";
import Search from '../images/search.png';
import { useState } from 'react';


export default function MainPage() {
  const [username, setSearch] = useState('')

  return (
    <>
    
    <div className='mainPage_container'>
        <div className='header_container'>
            <span class = "name1"> SUPERSTORE </span>
        </div>  
        <div className='searchBar_container'>
        <img src={Search} alt="search" width={20}/>
          <input type = "text" size={80} 
            name = "search" 
            placeholder='Search'
   
          />
        
        </div>  

        <div className='bakery_container'>
          <button class="favorite styledBakery"
              type="button">
              BAKERY
          </button>
        </div> 

        <div className='produce_container'>
          <button class="favorite styledProduce"
                type="button">
                PRODUCE
            </button>
        </div> 

        <div className='dairy_container'>
          <button class="favorite styledDairy"
                type="button">
                DAIRY/EGGS
            </button>
        </div> 


        <div className='equipment_container'>
          <button class="favorite styledEquipment"
                type="button">
                EQUIPMENT
            </button>
        </div> 


        <div className='meat_container'>
          <button class="favorite styledMeat"
                type="button">
                MEAT/SEAFOOD
            </button>
        </div> 

        <div className='frozen_container'>
          <button class="favorite styledFrozen"
                type="button">
                FROZEN
            </button>
        </div> 

    </div> 


    



    </>
  )
}


