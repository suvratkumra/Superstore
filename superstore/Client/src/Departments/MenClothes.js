import React from 'react'
import '../css/Bakery.css'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";

import Crew_Sock from "../images/MenClothes/Crew_Sock.webp"
import Men_Poplin_Pajama_Pant from "../images/MenClothes/Men_Poplin_Pajama_Pant.webp"
import Pack_Men_Comfort_Soft_Knit_Boxer from "../images/MenClothes/Pack_Men_Comfort_Soft_Knit_Boxer.webp"
import Men_Large_Stretch_VNeck_Tee from "../images/MenClothes/Men_Large_Stretch_VNeck_Tee.webp"
import Men_Medium_Fleece_Crew_Neck from "../images/MenClothes/Men_Medium_Fleece_Crew_Neck.webp"
import Men_Medium_Sleep_Pants from "../images/MenClothes/Men_Medium_Sleep_Pants.webp"
import { useState } from 'react';
import Axios from 'axios';

function getEmail(){
  Axios.post("http://localhost:3001/api/getEmail"
  ).then((res) => console.log(res.data) )
}

export default function MenClothes() {
  const initialBoolean = false;
  const initializeValues = {Crew_Sock:initialBoolean, Men_Poplin_Pajama_Pant:initialBoolean, Pack_Men_Comfort_Soft_Knit_Boxer:initialBoolean, Men_Large_Stretch_VNeck_Tee:initialBoolean, Men_Medium_Fleece_Crew_Neck:initialBoolean, Men_Medium_Sleep_Pants:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const [showButton, setShowButton] = useState({showButton: false, showButton2: false});  
  const initializeNumber = {Crew_Sock:1, Men_Poplin_Pajama_Pant:1, Pack_Men_Comfort_Soft_Knit_Boxer:1, Men_Large_Stretch_VNeck_Tee:1, Men_Medium_Fleece_Crew_Neck:1, Men_Medium_Sleep_Pants:1};
  const [itemIncrementer, setItemIncrementer] = useState(initializeNumber);
  const [email, setEmail] = useState("");


  return (
    <>
      <div>
      { getEmail() }
    </div>
    <div className='header__container'>
      <div className='superstore__container'>
          <span class = "name1">  SUPERSTORE  </span>
      </div>  
    </div>

    <div className = 'previous__container'>
      <div classname = 'back'>
         <a href = '../MainPage' ><span class = "back_icon"><BsFillArrowLeftCircleFill /></span></a>
        <span class='goto_previous'>  View all departments</span>
      </div>
      
    
    </div>
    {/* <div>
      {console.log(showButton)}
      {showButton.showButton ? <h1> SHow me </h1> : null}
      {showButton.showButton2 ? <h1> SHow me </h1> : null}
    </div> */}

    <div className='products_name__container'>
      <div className='departmentName'>
        MEN CLOTHES
      </div>



      <div className='bigProducts__container'>
        <div className='item__container'>
          <span className = 'company_name'>Reebok</span>
          <img src = { Crew_Sock } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Crew Sock</span>
            <span className = 'price'>$12.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Crew_Sock: true});}}>
            {
              cartText.Crew_Sock ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Crew_Sock > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Crew_Sock: itemIncrementer.Crew_Sock-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Crew_Sock} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Crew_Sock: itemIncrementer.Crew_Sock+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>



        <div className='item__container'>
          <span className = 'company_name'>George</span>
          <img src = { Men_Poplin_Pajama_Pant } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Men's Poplin Pajama Pant</span>
            <span className = 'price'>$11.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Men_Poplin_Pajama_Pant: true});}}>
            {
              cartText.Men_Poplin_Pajama_Pant ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Men_Poplin_Pajama_Pant > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Men_Poplin_Pajama_Pant: itemIncrementer.Men_Poplin_Pajama_Pant-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Men_Poplin_Pajama_Pant} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Men_Poplin_Pajama_Pant: itemIncrementer.Men_Poplin_Pajama_Pant+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Hanest</span>
          <img src = { Pack_Men_Comfort_Soft_Knit_Boxer } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>4 Pack Men's Comfort Soft Knit Boxer</span>
            <span className = 'price'>$23.50</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Pack_Men_Comfort_Soft_Knit_Boxer: true});}}>
            {
              cartText.Pack_Men_Comfort_Soft_Knit_Boxer ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Pack_Men_Comfort_Soft_Knit_Boxer > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Pack_Men_Comfort_Soft_Knit_Boxer: itemIncrementer.Pack_Men_Comfort_Soft_Knit_Boxer-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Pack_Men_Comfort_Soft_Knit_Boxer} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Pack_Men_Comfort_Soft_Knit_Boxer: itemIncrementer.Pack_Men_Comfort_Soft_Knit_Boxer+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
         
        <div className='item__container'>
          <span className = 'company_name'>George</span>
          <img src = { Men_Large_Stretch_VNeck_Tee } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Men's Large Stretch V-Neck Tee</span>
            <span className = 'price'>$9.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Men_Large_Stretch_VNeck_Tee: true});}}>
            {
              cartText.Men_Large_Stretch_VNeck_Tee ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Men_Large_Stretch_VNeck_Tee > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Men_Large_Stretch_VNeck_Tee: itemIncrementer.Men_Large_Stretch_VNeck_Tee-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Men_Large_Stretch_VNeck_Tee} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Men_Large_Stretch_VNeck_Tee: itemIncrementer.Men_Large_Stretch_VNeck_Tee+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Athletic Works</span>
          <img src = { Men_Medium_Fleece_Crew_Neck } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Men's Medium Fleece Crew Neck</span>
            <span className = 'price'>$15.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Men_Medium_Fleece_Crew_Neck: true});}}>
            {
              cartText.Men_Medium_Fleece_Crew_Neck ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Men_Medium_Fleece_Crew_Neck > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Men_Medium_Fleece_Crew_Neck: itemIncrementer.Men_Medium_Fleece_Crew_Neck-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Men_Medium_Fleece_Crew_Neck} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Men_Medium_Fleece_Crew_Neck: itemIncrementer.Men_Medium_Fleece_Crew_Neck+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Hanes</span>
          <img src = { Men_Medium_Sleep_Pants } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Men_Medium_Sleep_Pants</span>
            <span className = 'price'>$7.00</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Men_Medium_Sleep_Pants: true});}}>
            {
              cartText.Men_Medium_Sleep_Pants ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Men_Medium_Sleep_Pants > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Men_Medium_Sleep_Pants: itemIncrementer.Men_Medium_Sleep_Pants-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Men_Medium_Sleep_Pants} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Men_Medium_Sleep_Pants: itemIncrementer.Men_Medium_Sleep_Pants+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        
        
      </div>
    </div>

  
      

    
      

    </>
  )
}