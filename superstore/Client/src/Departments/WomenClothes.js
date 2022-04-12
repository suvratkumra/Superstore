import React from 'react'
import '../css/Bakery.css'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";

import Comfort_Cotton_Socks from "../images/WomenClothes/Comfort_Cotton_Socks.webp"
import Womens_No_Show_Liner_Socks from "../images/WomenClothes/Womens_No_Show_Liner_Socks.webp"
import Women_1X_Shapewear_Boyshorts from "../images/WomenClothes/Women_1X_Shapewear_Boyshorts.webp"
import Large_Size_Womens_Cotton_Bikini_Briefs from "../images/WomenClothes/Large_Size_Womens_Cotton_Bikini_Briefs.webp"
import Womens_1X_Full_Shapewear_Slip from "../images/WomenClothes/Womens_1X_Full_Shapewear_Slip.webp"
import Womens_Seamless_Cross_Back_Sports_Bra from "../images/WomenClothes/Womens_Seamless_Cross_Back_Sports_Bra.webp"
import { useState } from 'react';
import Axios from 'axios';

export default function WomenClothes() {
  const initialBoolean = false;
  const initializeValues = {Comfort_Cotton_Socks:initialBoolean, Womens_No_Show_Liner_Socks:initialBoolean, Women_1X_Shapewear_Boyshorts:initialBoolean, Large_Size_Womens_Cotton_Bikini_Briefs:initialBoolean, Womens_1X_Full_Shapewear_Slip:initialBoolean, Womens_Seamless_Cross_Back_Sports_Bra:initialBoolean, cinnamonBread:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const [showButton, setShowButton] = useState({showButton: false, showButton2: false});  
  const initializeNumber = {Comfort_Cotton_Socks:1, Womens_No_Show_Liner_Socks:1, Women_1X_Shapewear_Boyshorts:1, Large_Size_Womens_Cotton_Bikini_Briefs:1, Womens_1X_Full_Shapewear_Slip:1, Womens_Seamless_Cross_Back_Sports_Bra:1};
  const [itemIncrementer, setItemIncrementer] = useState(initializeNumber);
  const [continuing, setContinuing] = useState(false);
  const [email, setEmail] = useState("");

  function getEmail(){
    Axios.post("http://localhost:3001/api/getEmail"
    ).then((res) => {
      console.log(res.data);
      setEmail(res.data)
      console.log(email.length);
      if(email.length === 0) {
        setContinuing(false);
      }else {
        setContinuing(true);
      }
    }
    )
  }

  return (
    <>
    <div>
      { getEmail() }
    </div>

    {!continuing && <div id = "errorPage__container">
        <span id = "textError__text">ERROR! <br/> You need to log in first before accessing this page</span>
        <br/><br/>
        <button className= "button-29" onClick = {(()=>{window.location.href = "http://localhost:3000/WelcomePage"})}>Click here to go sign in.</button>
      </div>}
    {continuing && <div>
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
        WOMEN CLOTHES
      </div>



      <div className='bigProducts__container'>
        <div className='item__container'>
          <span className = 'company_name'>Secret 6 </span>
          <img src = { Comfort_Cotton_Socks } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>10 Comfort Cotton Socks</span>
            <span className = 'price'>$7.89</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Comfort_Cotton_Socks: true});}}>
            {
              cartText.Comfort_Cotton_Socks ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Comfort_Cotton_Socks > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Comfort_Cotton_Socks: itemIncrementer.Comfort_Cotton_Socks-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Comfort_Cotton_Socks} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Comfort_Cotton_Socks: itemIncrementer.Comfort_Cotton_Socks+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>



        <div className='item__container'>
          <span className = 'company_name'>Reebok</span>
          <img src = {Womens_No_Show_Liner_Socks } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Women's No Show Liner Socks</span>
            <span className = 'price'>$14.00</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Womens_No_Show_Liner_Socks: true});}}>
            {
              cartText.Womens_No_Show_Liner_Socks ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Womens_No_Show_Liner_Socks > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Womens_No_Show_Liner_Socks: itemIncrementer.Womens_No_Show_Liner_Socks-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Womens_No_Show_Liner_Socks} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Womens_No_Show_Liner_Socks: itemIncrementer.Womens_No_Show_Liner_Socks+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>George</span>
          <img src = { Women_1X_Shapewear_Boyshorts } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'> Women's 1X Shapewear Boyshorts</span>
            <span className = 'price'>$16.50</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Women_1X_Shapewear_Boyshorts: true});}}>
            {
              cartText.Women_1X_Shapewear_Boyshorts ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Women_1X_Shapewear_Boyshorts > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Women_1X_Shapewear_Boyshorts: itemIncrementer.Women_1X_Shapewear_Boyshorts-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Women_1X_Shapewear_Boyshorts} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Women_1X_Shapewear_Boyshorts: itemIncrementer.Women_1X_Shapewear_Boyshorts+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
         
        <div className='item__container'>
          <span className = 'company_name'>George</span>
          <img src = { Large_Size_Womens_Cotton_Bikini_Briefs } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'> Large Size Women's Cotton Bikini Briefs</span>
            <span className = 'price'>$7.00</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Large_Size_Womens_Cotton_Bikini_Briefs: true});}}>
            {
              cartText.Large_Size_Womens_Cotton_Bikini_Briefs ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Large_Size_Womens_Cotton_Bikini_Briefs > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Large_Size_Womens_Cotton_Bikini_Briefs: itemIncrementer.Large_Size_Womens_Cotton_Bikini_Briefs-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Large_Size_Womens_Cotton_Bikini_Briefs} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Large_Size_Womens_Cotton_Bikini_Briefs: itemIncrementer.Large_Size_Womens_Cotton_Bikini_Briefs+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>George</span>
          <img src = { Womens_1X_Full_Shapewear_Slip } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Women's 1X Full Shapewear Slip</span>
            <span className = 'price'>$25.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Womens_1X_Full_Shapewear_Slip: true});}}>
            {
              cartText.Womens_1X_Full_Shapewear_Slip ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Womens_1X_Full_Shapewear_Slip > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Womens_1X_Full_Shapewear_Slip: itemIncrementer.Womens_1X_Full_Shapewear_Slip-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Womens_1X_Full_Shapewear_Slip} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Womens_1X_Full_Shapewear_Slip: itemIncrementer.Womens_1X_Full_Shapewear_Slip+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Athletic Works</span>
          <img src = { Womens_Seamless_Cross_Back_Sports_Bra } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Women's Seamless Cross Back Sports Bra</span>
            <span className = 'price'>$17.00</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Womens_Seamless_Cross_Back_Sports_Bra: true});}}>
            {
              cartText.Womens_Seamless_Cross_Back_Sports_Bra ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Womens_Seamless_Cross_Back_Sports_Bra > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Womens_Seamless_Cross_Back_Sports_Bra: itemIncrementer.Womens_Seamless_Cross_Back_Sports_Bra-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Womens_Seamless_Cross_Back_Sports_Bra} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Womens_Seamless_Cross_Back_Sports_Bra: itemIncrementer.Womens_Seamless_Cross_Back_Sports_Bra+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        
        
      </div>
    </div>
    </div>}

    

    </>
  )
}