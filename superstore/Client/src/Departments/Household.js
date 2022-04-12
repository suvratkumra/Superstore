import React from 'react'
import '../css/Bakery.css'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";

import Air_Wick_Relax_Scented_Oil from "../images/Household/Air_Wick_Relax_Scented_Oil.webp"
import Foil_Wrap from "../images/Household/Foil_Wrap.webp"
import Bl5_Maxi_Lighter from "../images/Household/Bl5_Maxi_Lighter.webp"
import Toilet_Cleaner_Gel from "../images/Household/Toilet_Cleaner_Gel.webp";
import W_Ultra_Liquid_April_Fresh from "../images/Household/W_Ultra_Liquid_April_Fresh.webp"
import Air_Line_Sky from "../images/Household/Air_Line_Sky.webp"
import Aluminum_Foil from "../images/Household/Aluminum_Foil.webp"
import Drain_Opener from "../images/Household/Drain_Opener.webp";
import Fruit_Fly_Trap from "../images/Household/Fruit_Fly_Trap.webp"
import Napkins from "../images/Household/Napkins.webp";
import Lemon_Scent_Dish_Liquid from "../images/Household/Lemon_Scent_Dish_Liquid.webp"
import Bathroom_Tissue from "../images/Household/Bathroom_Tissue.webp"
import Liquid_Og from "../images/Household/Liquid_Og.webp"
import Wet_Cloth_Febreze from "../images/Household/Wet_Cloth_Febreze.webp";
import Liquid_Pods_Original from "../images/Household/Liquid_Pods_Original.webp";
import { useState } from 'react';
import Axios from 'axios';

export default function Household() {
  const initialBoolean = false;
  const initializeValues = {Air_Wick_Relax_Scented_Oil:initialBoolean, Foil_Wrap:initialBoolean, Bl5_Maxi_Lighter:initialBoolean, Toilet_Cleaner_Gel:initialBoolean, W_Ultra_Liquid_April_Fresh:initialBoolean, Air_Line_Sky:initialBoolean, Aluminum_Foil:initialBoolean, Drain_Opener:initialBoolean, Fruit_Fly_Trap:initialBoolean, Napkins:initialBoolean, Lemon_Scent_Dish_Liquid:initialBoolean, Bathroom_Tissue:initialBoolean, Liquid_Og:initialBoolean, Wet_Cloth_Febreze:initialBoolean, Liquid_Pods_Original:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const [showButton, setShowButton] = useState({showButton: false, showButton2: false});  
  const initializeNumber = {Air_Wick_Relax_Scented_Oil:1, Foil_Wrap:1, Bl5_Maxi_Lighter:1, Toilet_Cleaner_Gel:1, W_Ultra_Liquid_April_Fresh:1, Air_Line_Sky:1, Aluminum_Foil:1, Drain_Opener:1, Fruit_Fly_Trap:1, Napkins:1, Lemon_Scent_Dish_Liquid:1, Bathroom_Tissue:1, Liquid_Og:1, Wet_Cloth_Febreze:1, Liquid_Pods_Original:1};
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

    {!continuing && <div>
        <button onClick = {(()=>{window.location.href = "http://localhost:3000/WelcomePage"})}>Click here to go sign in and access this page</button>
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
        HOUSEHOLD
      </div>



      <div className='bigProducts__container'>
        <div className='item__container'>
          <span className = 'company_name'>Reckitt</span>
          <img src = { Air_Wick_Relax_Scented_Oil } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Air Wick Relax Scented Oil</span>
            <span className = 'price'>$12.49</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Air_Wick_Relax_Scented_Oil: true});}}>
            {
              cartText.Air_Wick_Relax_Scented_Oil ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Air_Wick_Relax_Scented_Oil > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Air_Wick_Relax_Scented_Oil: itemIncrementer.Air_Wick_Relax_Scented_Oil-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Air_Wick_Relax_Scented_Oil} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Air_Wick_Relax_Scented_Oil: itemIncrementer.Air_Wick_Relax_Scented_Oil+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>



        <div className='item__container'>
          <span className = 'company_name'>Alcan</span>
          <img src = { Foil_Wrap } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'> 100 Foil Wrap</span>
            <span className = 'price'>$6.75</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Foil_Wrap: true});}}>
            {
              cartText.Foil_Wrap ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Foil_Wrap > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Foil_Wrap: itemIncrementer.Foil_Wrap-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Foil_Wrap} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Foil_Wrap: itemIncrementer.Foil_Wrap+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>BiC</span>
          <img src = { Bl5_Maxi_Lighter } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Bl5 Maxi Lighter</span>
            <span className = 'price'>$4.50</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Bl5_Maxi_Lighter: true});}}>
            {
              cartText.Bl5_Maxi_Lighter ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Bl5_Maxi_Lighter > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Bl5_Maxi_Lighter: itemIncrementer.Bl5_Maxi_Lighter-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Bl5_Maxi_Lighter} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Bl5_Maxi_Lighter: itemIncrementer.Bl5_Maxi_Lighter+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
         
        <div className='item__container'>
          <span className = 'company_name'>Clorox</span>
          <img src = { Toilet_Cleaner_Gel } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Toilet Cleaner Gel</span>
            <span className = 'price'>$2.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Toilet_Cleaner_Gel: true});}}>
            {
              cartText.Toilet_Cleaner_Gel ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Toilet_Cleaner_Gel > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Toilet_Cleaner_Gel: itemIncrementer.Toilet_Cleaner_Gel-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Toilet_Cleaner_Gel} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Toilet_Cleaner_Gel: itemIncrementer.Toilet_Cleaner_Gel+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Downy</span>
          <img src = { W_Ultra_Liquid_April_Fresh } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'> 150 W Ultra Liquid April Fresh</span>
            <span className = 'price'>$13.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, W_Ultra_Liquid_April_Fresh: true});}}>
            {
              cartText.W_Ultra_Liquid_April_Fresh ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.W_Ultra_Liquid_April_Fresh > 0)
                                                                                      setItemIncrementer({...itemIncrementer, W_Ultra_Liquid_April_Fresh: itemIncrementer.W_Ultra_Liquid_April_Fresh-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.W_Ultra_Liquid_April_Fresh} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, W_Ultra_Liquid_April_Fresh: itemIncrementer.W_Ultra_Liquid_April_Fresh+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Febreze</span>
          <img src = { Air_Line_Sky } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Air Line and Sky</span>
            <span className = 'price'>$3.67</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Air_Line_Sky: true});}}>
            {
              cartText.Air_Line_Sky ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Air_Line_Sky > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Air_Line_Sky: itemIncrementer.Air_Line_Sky-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Air_Line_Sky} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Air_Line_Sky: itemIncrementer.Air_Line_Sky+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Great Value</span>
          <img src = { Aluminum_Foil } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Aluminum Foil</span>
            <span className = 'price'>$3.57</span>  
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Aluminum_Foil: true});}}>
            {
              cartText.Aluminum_Foil ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Aluminum_Foil > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Aluminum_Foil: itemIncrementer.Aluminum_Foil-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Aluminum_Foil} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Aluminum_Foil: itemIncrementer.Aluminum_Foil+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Great Value </span>
          <img src = { Drain_Opener } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Drain_Opener</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Drain_Opener: true});}}>
            {
              cartText.Drain_Opener ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Drain_Opener > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Drain_Opener: itemIncrementer.Drain_Opener-1});                                                                          
                                                                                    } }> -</button>
                                      <span className = 'number'> {itemIncrementer.Drain_Opener} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Drain_Opener: itemIncrementer.Drain_Opener+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Great Value</span>
          <img src = { Fruit_Fly_Trap } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'> Fruit Fly Trap</span>
            <span className = 'price'>$5.67</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Fruit_Fly_Trap: true});}}>
            {
              cartText.Fruit_Fly_Trap ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Fruit_Fly_Trap > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Fruit_Fly_Trap: itemIncrementer.Fruit_Fly_Trap-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Fruit_Fly_Trap} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Fruit_Fly_Trap: itemIncrementer.Fruit_Fly_Trap+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Great Value</span>
          <img src = { Napkins } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'> Napkins</span>
            <span className = 'price'>$3.29</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Napkins: true});}}>
            {
              cartText.Napkins ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Napkins > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Napkins: itemIncrementer.Napkins-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Napkins} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Napkins: itemIncrementer.Napkins+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Palmolive</span>
          <img src = { Lemon_Scent_Dish_Liquid } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'> Lemon Scent Dish Liquid</span>
            <span className = 'price'>$2.45</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Lemon_Scent_Dish_Liquid: true});}}>
            {
              cartText.Lemon_Scent_Dish_Liquid ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Lemon_Scent_Dish_Liquid > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Lemon_Scent_Dish_Liquid: itemIncrementer.Lemon_Scent_Dish_Liquid-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Lemon_Scent_Dish_Liquid} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Lemon_Scent_Dish_Liquid: itemIncrementer.Lemon_Scent_Dish_Liquid+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Royale Velour</span>
          <img src = { Bathroom_Tissue } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Bathroom Tissue</span>
            <span className = 'price'>$5.55</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Bathroom_Tissue: true});}}>
            {
              cartText.Bathroom_Tissue ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Bathroom_Tissue > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Bathroom_Tissue: itemIncrementer.Bathroom_Tissue-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Bathroom_Tissue} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Bathroom_Tissue: itemIncrementer.Bathroom_Tissue+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Swiffer</span>
          <img src = { Liquid_Og } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'> Liquid Og</span>
            <span className = 'price'>$4.71</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Liquid_Og: true});}}>
            {
              cartText.Liquid_Og ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Liquid_Og > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Liquid_Og: itemIncrementer.Liquid_Og-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Liquid_Og} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Liquid_Og: itemIncrementer.Liquid_Og+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Swiffer</span>
          <img src = { Wet_Cloth_Febreze } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'> Wet Cloth Febreze</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Wet_Cloth_Febreze: true});}}>
            {
              cartText.Wet_Cloth_Febreze ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Wet_Cloth_Febreze > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Wet_Cloth_Febreze: itemIncrementer.Wet_Cloth_Febreze-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Wet_Cloth_Febreze} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Wet_Cloth_Febreze: itemIncrementer.Wet_Cloth_Febreze+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Tide</span>
          <img src = { Liquid_Pods_Original } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Liquid Pods Original</span>
            <span className = 'price'>$6.77</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Wet_Cloth_Febreze: true});}}>
            {
              cartText.Liquid_Pods_Original ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Liquid_Pods_Original > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Liquid_Pods_Original: itemIncrementer.Liquid_Pods_Original-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Liquid_Pods_Original} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Liquid_Pods_Original: itemIncrementer.Liquid_Pods_Original+1}) }> + </button>                                    
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