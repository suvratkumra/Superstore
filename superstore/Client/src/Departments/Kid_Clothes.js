import React, { useState } from 'react'
import '../css/Bakery.css'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";

import GetReady_1320_Sports_Doll_Clothes from "../images/Kid_Clothes/GetReady_1320_Sports_Doll_Clothes.png"
import GetReady_1322_Kids_Doll_Clothes_2_Princess_Dresses from "../images/Kid_Clothes/GetReady_1322_Kids_Doll_Clothes_2_Princess_Dresses.png"
import GetReady_Mtb1301_Doll_Clothes_setof3 from "../images/Kid_Clothes/GetReady_Mtb1301_Doll_Clothes_setof3.png"
import JoeFresh_Kid_Boys_Double_Cloth_Shirt from "../images/Kid_Clothes/JoeFresh_Kid_Boys_Double_Cloth_Shirt.png"
import LifeAtHome_Flocked_Kids_Hangers from "../images/Kid_Clothes/LifeAtHome_Flocked_Kids_Hangers.png"
import Solid_Wood_Kids_Wooden_Hangers_setof20 from "../images/Kid_Clothes/Solid_Wood_Kids_Wooden_Hangers_setof20.png"
import Axios from 'axios';

function getEmail(){
  Axios.post("http://localhost:3001/api/getEmail"
  ).then((res) => console.log(res.data) )
}

export default function Kid_Clothes() {
  const initialBoolean = false;
  const initializeValues = {GetReady_1320_Sports_Doll_Clothes:initialBoolean, GetReady_1322_Kids_Doll_Clothes_2_Princess_Dresses:initialBoolean, GetReady_Mtb1301_Doll_Clothes_setof3:initialBoolean, JoeFresh_Kid_Boys_Double_Cloth_Shirt:initialBoolean, LifeAtHome_Flocked_Kids_Hangers:initialBoolean, Solid_Wood_Kids_Wooden_Hangers_setof20:initialBoolean, Lomi_Rejuvenating_Foot_Spa_Bath:initialBoolean, LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder:initialBoolean, LUG_Trolley_Cosmetic_Case:initialBoolean, LUG_Trolley_Cosmetic_Case_Blue:initialBoolean, QuoBeauty_Cheek_Lip_Multistick_Sunrise:initialBoolean, QuoBeauty_CoolPowder_Bronzer:initialBoolean, QuoBeauty_Cosmetic_Wedges:initialBoolean, Refectocil_Soft_Cosmetic_Brush:initialBoolean, Friends_Cosmetic_Case_Set_packof3:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const [showButton, setShowButton] = useState({showButton: false, showButton2: false});  
  const initializeNumber = {GetReady_1320_Sports_Doll_Clothes:1, GetReady_1322_Kids_Doll_Clothes_2_Princess_Dresses:1, GetReady_Mtb1301_Doll_Clothes_setof3:1, JoeFresh_Kid_Boys_Double_Cloth_Shirt:1, LifeAtHome_Flocked_Kids_Hangers:1, Solid_Wood_Kids_Wooden_Hangers_setof20:1, Lomi_Rejuvenating_Foot_Spa_Bath:1, LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder:1, LUG_Trolley_Cosmetic_Case:1, LUG_Trolley_Cosmetic_Case_Blue:1, QuoBeauty_Cheek_Lip_Multistick_Sunrise:1, QuoBeauty_CoolPowder_Bronzer:1, QuoBeauty_Cosmetic_Wedges:1, Refectocil_Soft_Cosmetic_Brush:1, Friends_Cosmetic_Case_Set_packof3:1};
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
      
    <div className = 'search__container'>
      <div>
        <input className = 'searchbar__departments' 
            type = "text" 
            name = "search" 
            placeholder='Search'
          />
      </div>
  
      
      <span class = 'search__image'> <GiMagnifyingGlass/> </span>
    </div>
    </div>
    {/* <div>
      {console.log(showButton)}
      {showButton.showButton ? <h1> SHow me </h1> : null}
      {showButton.showButton2 ? <h1> SHow me </h1> : null}
    </div> */}

    <div className='products_name__container'>
      <div className='departmentName'>
        CLOTHES (KIDS)
      </div>



      <div className='bigProducts__container'>
        <div className='item__container'>
          <span className = 'company_name'>Get Ready</span>
          <img src = { GetReady_1320_Sports_Doll_Clothes } alt = 'GetReady_1320_Sports_Doll_Clothes' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>1320 Sports Doll Clothes</span>
            <span className = 'price'>$62.19</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, GetReady_1320_Sports_Doll_Clothes: true});}}>
            {
              cartText.GetReady_1320_Sports_Doll_Clothes ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.GetReady_1320_Sports_Doll_Clothes > 0)
                                                                                      setItemIncrementer({...itemIncrementer, GetReady_1320_Sports_Doll_Clothes: itemIncrementer.GetReady_1320_Sports_Doll_Clothes-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.GetReady_1320_Sports_Doll_Clothes} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, GetReady_1320_Sports_Doll_Clothes: itemIncrementer.GetReady_1320_Sports_Doll_Clothes+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>



        <div className='item__container'>
          <span className = 'company_name'>Get Ready</span>
          <img src = { GetReady_1322_Kids_Doll_Clothes_2_Princess_Dresses } alt = 'GetReady_1322_Kids_Doll_Clothes_2_Princess_Dresses' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>1322 Kids Doll Clothes 2 Princess Dresses</span>
            <span className = 'price'>$73.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, GetReady_1322_Kids_Doll_Clothes_2_Princess_Dresses: true});}}>
            {
              cartText.GetReady_1322_Kids_Doll_Clothes_2_Princess_Dresses ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.GetReady_1322_Kids_Doll_Clothes_2_Princess_Dresses > 0)
                                                                                      setItemIncrementer({...itemIncrementer, GetReady_1322_Kids_Doll_Clothes_2_Princess_Dresses: itemIncrementer.GetReady_1322_Kids_Doll_Clothes_2_Princess_Dresses-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.GetReady_1322_Kids_Doll_Clothes_2_Princess_Dresses} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, GetReady_1322_Kids_Doll_Clothes_2_Princess_Dresses: itemIncrementer.GetReady_1322_Kids_Doll_Clothes_2_Princess_Dresses+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Get Ready</span>
          <img src = { GetReady_Mtb1301_Doll_Clothes_setof3 } alt = 'GetReady_Mtb1301_Doll_Clothes_setof3' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Mtb1301 Doll Clothes (Set of 3)</span>
            <span className = 'price'>$50.00</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, GetReady_Mtb1301_Doll_Clothes_setof3: true});}}>
            {
              cartText.GetReady_Mtb1301_Doll_Clothes_setof3 ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.GetReady_Mtb1301_Doll_Clothes_setof3 > 0)
                                                                                      setItemIncrementer({...itemIncrementer, GetReady_Mtb1301_Doll_Clothes_setof3: itemIncrementer.GetReady_Mtb1301_Doll_Clothes_setof3-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.GetReady_Mtb1301_Doll_Clothes_setof3} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, GetReady_Mtb1301_Doll_Clothes_setof3: itemIncrementer.GetReady_Mtb1301_Doll_Clothes_setof3+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
         
        <div className='item__container'>
          <span className = 'company_name'>Joe Fresh</span>
          <img src = { JoeFresh_Kid_Boys_Double_Cloth_Shirt } alt = 'JoeFresh_Kid_Boys_Double_Cloth_Shirt' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Kid Boys Double Cloth Shirt</span>
            <span className = 'price'>$19.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, JoeFresh_Kid_Boys_Double_Cloth_Shirt: true});}}>
            {
              cartText.JoeFresh_Kid_Boys_Double_Cloth_Shirt ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.JoeFresh_Kid_Boys_Double_Cloth_Shirt > 0)
                                                                                      setItemIncrementer({...itemIncrementer, JoeFresh_Kid_Boys_Double_Cloth_Shirt: itemIncrementer.JoeFresh_Kid_Boys_Double_Cloth_Shirt-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.JoeFresh_Kid_Boys_Double_Cloth_Shirt} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, JoeFresh_Kid_Boys_Double_Cloth_Shirt: itemIncrementer.JoeFresh_Kid_Boys_Double_Cloth_Shirt+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Life At Home</span>
          <img src = { LifeAtHome_Flocked_Kids_Hangers } alt = 'LifeAtHome_Flocked_Kids_Hangers' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Flocked Kids Hangers</span>
            <span className = 'price'>$11.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, LifeAtHome_Flocked_Kids_Hangers: true});}}>
            {
              cartText.LifeAtHome_Flocked_Kids_Hangers ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.LifeAtHome_Flocked_Kids_Hangers > 0)
                                                                                      setItemIncrementer({...itemIncrementer, LifeAtHome_Flocked_Kids_Hangers: itemIncrementer.LifeAtHome_Flocked_Kids_Hangers-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.LifeAtHome_Flocked_Kids_Hangers} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, LifeAtHome_Flocked_Kids_Hangers: itemIncrementer.LifeAtHome_Flocked_Kids_Hangers+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { Solid_Wood_Kids_Wooden_Hangers_setof20 } alt = 'Solid_Wood_Kids_Wooden_Hangers_setof20' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Solid Wood Kids Wooden Hangers (Set of 20)</span>
            <span className = 'price'>$17.59</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Solid_Wood_Kids_Wooden_Hangers_setof20: true});}}>
            {
              cartText.Solid_Wood_Kids_Wooden_Hangers_setof20 ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Solid_Wood_Kids_Wooden_Hangers_setof20 > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Solid_Wood_Kids_Wooden_Hangers_setof20: itemIncrementer.Solid_Wood_Kids_Wooden_Hangers_setof20-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Solid_Wood_Kids_Wooden_Hangers_setof20} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Solid_Wood_Kids_Wooden_Hangers_setof20: itemIncrementer.Solid_Wood_Kids_Wooden_Hangers_setof20+1}) }> + </button>                                    
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