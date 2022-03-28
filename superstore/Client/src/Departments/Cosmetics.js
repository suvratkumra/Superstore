import React, { useState } from 'react'
import '../css/Bakery.css'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";

import Annabelle_Perfect_Bronze_Pressed_Powder from "../images/Cosmetics/Annabelle_Perfect_Bronze_Pressed_Powder.png"
import Annabelle_Perfect_Glow_Topaz8point2g from "../images/Cosmetics/Annabelle_Perfect_Glow_Topaz8.2g.png"
import BV_Dark_Spot_Corrector_Cream from "../images/Cosmetics/BV_Dark_Spot_Corrector_Cream.png"
import Deluxe_Unicorn_Cosmetic_Set from "../images/Cosmetics/Deluxe_Unicorn_Cosmetic_Set.png"
import Flower_Serum_Foundation_Warm_Beige from "../images/Cosmetics/Flower_Serum_Foundation_Warm_Beige.png"
import GirlOnTheGo_Cosmetic_Compact from "../images/Cosmetics/GirlOnTheGo_Cosmetic_Compact.png"
import Lomi_Rejuvenating_Foot_Spa_Bath from "../images/Cosmetics/Lomi_Rejuvenating_Foot_Spa_Bath.png"
import LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder from "../images/Cosmetics/LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder.png"
import LUG_Trolley_Cosmetic_Case from "../images/Cosmetics/LUG_Trolley_Cosmetic_Case.png"
import LUG_Trolley_Cosmetic_Case_Blue from "../images/Cosmetics/LUG_Trolley_Cosmetic_Case_Blue.png"
import QuoBeauty_Cheek_Lip_Multistick_Sunrise from "../images/Cosmetics/QuoBeauty_Cheek_Lip_Multistick_Sunrise.png"
import QuoBeauty_CoolPowder_Bronzer from "../images/Cosmetics/QuoBeauty_CoolPowder_Bronzer.png"
import QuoBeauty_Cosmetic_Wedges from "../images/Cosmetics/QuoBeauty_Cosmetic_Wedges.png"
import Refectocil_Soft_Cosmetic_Brush from "../images/Cosmetics/Refectocil_Soft_Cosmetic_Brush.png"
import Friends_Cosmetic_Case_Set_packof3 from "../images/Cosmetics/Friends_Cosmetic_Case_Set_packof3.png"

export default function Cosmetics() {
  const initialBoolean = false;
  const initializeValues = {Annabelle_Perfect_Bronze_Pressed_Powder:initialBoolean, Annabelle_Perfect_Glow_Topaz8point2g:initialBoolean, BV_Dark_Spot_Corrector_Cream:initialBoolean, Deluxe_Unicorn_Cosmetic_Set:initialBoolean, Flower_Serum_Foundation_Warm_Beige:initialBoolean, GirlOnTheGo_Cosmetic_Compact:initialBoolean, Lomi_Rejuvenating_Foot_Spa_Bath:initialBoolean, LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder:initialBoolean, LUG_Trolley_Cosmetic_Case:initialBoolean, LUG_Trolley_Cosmetic_Case_Blue:initialBoolean, QuoBeauty_Cheek_Lip_Multistick_Sunrise:initialBoolean, QuoBeauty_CoolPowder_Bronzer:initialBoolean, QuoBeauty_Cosmetic_Wedges:initialBoolean, Refectocil_Soft_Cosmetic_Brush:initialBoolean, Friends_Cosmetic_Case_Set_packof3:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const [showButton, setShowButton] = useState({showButton: false, showButton2: false});  
  const initializeNumber = {Annabelle_Perfect_Bronze_Pressed_Powder:1, Annabelle_Perfect_Glow_Topaz8point2g:1, BV_Dark_Spot_Corrector_Cream:1, Deluxe_Unicorn_Cosmetic_Set:1, Flower_Serum_Foundation_Warm_Beige:1, GirlOnTheGo_Cosmetic_Compact:1, Lomi_Rejuvenating_Foot_Spa_Bath:1, LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder:1, LUG_Trolley_Cosmetic_Case:1, LUG_Trolley_Cosmetic_Case_Blue:1, QuoBeauty_Cheek_Lip_Multistick_Sunrise:1, QuoBeauty_CoolPowder_Bronzer:1, QuoBeauty_Cosmetic_Wedges:1, Refectocil_Soft_Cosmetic_Brush:1, Friends_Cosmetic_Case_Set_packof3:1};
  const [itemIncrementer, setItemIncrementer] = useState(initializeNumber);


  return (
    <>
    
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
        COSMETICS
      </div>



      <div className='bigProducts__container'>
        <div className='item__container'>
          <span className = 'company_name'>Annabelle</span>
          <img src = { Annabelle_Perfect_Bronze_Pressed_Powder } alt = 'Annabelle_Perfect_Bronze_Pressed_Powder' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Perfect Bronze Pressed Powder</span>
            <span className = 'price'>$7.19</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Annabelle_Perfect_Bronze_Pressed_Powder: true});}}>
            {
              cartText.Annabelle_Perfect_Bronze_Pressed_Powder ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Annabelle_Perfect_Bronze_Pressed_Powder > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Annabelle_Perfect_Bronze_Pressed_Powder: itemIncrementer.Annabelle_Perfect_Bronze_Pressed_Powder-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Annabelle_Perfect_Bronze_Pressed_Powder} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Annabelle_Perfect_Bronze_Pressed_Powder: itemIncrementer.Annabelle_Perfect_Bronze_Pressed_Powder+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>



        <div className='item__container'>
          <span className = 'company_name'>Annabelle</span>
          <img src = { Annabelle_Perfect_Glow_Topaz8point2g } alt = 'Annabelle_Perfect_Glow_Topaz8point2g' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Perfect Glow Topaz (8.2g)</span>
            <span className = 'price'>$7.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Annabelle_Perfect_Glow_Topaz8point2g: true});}}>
            {
              cartText.Annabelle_Perfect_Glow_Topaz8point2g ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Annabelle_Perfect_Glow_Topaz8point2g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Annabelle_Perfect_Glow_Topaz8point2g: itemIncrementer.Annabelle_Perfect_Glow_Topaz8point2g-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Annabelle_Perfect_Glow_Topaz8point2g} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Annabelle_Perfect_Glow_Topaz8point2g: itemIncrementer.Annabelle_Perfect_Glow_Topaz8point2g+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>BV</span>
          <img src = { BV_Dark_Spot_Corrector_Cream } alt = 'BV_Dark_Spot_Corrector_Cream' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Dark Spot Corrector Cream</span>
            <span className = 'price'>$50.00</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, BV_Dark_Spot_Corrector_Cream: true});}}>
            {
              cartText.BV_Dark_Spot_Corrector_Cream ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.BV_Dark_Spot_Corrector_Cream > 0)
                                                                                      setItemIncrementer({...itemIncrementer, BV_Dark_Spot_Corrector_Cream: itemIncrementer.BV_Dark_Spot_Corrector_Cream-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.BV_Dark_Spot_Corrector_Cream} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, BV_Dark_Spot_Corrector_Cream: itemIncrementer.BV_Dark_Spot_Corrector_Cream+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
         
        <div className='item__container'>
          <span className = 'company_name'>Deluxe</span>
          <img src = { Deluxe_Unicorn_Cosmetic_Set } alt = 'Deluxe_Unicorn_Cosmetic_Set' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Unicorn Cosmetic Set</span>
            <span className = 'price'>$34.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Deluxe_Unicorn_Cosmetic_Set: true});}}>
            {
              cartText.Deluxe_Unicorn_Cosmetic_Set ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Deluxe_Unicorn_Cosmetic_Set > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Deluxe_Unicorn_Cosmetic_Set: itemIncrementer.Deluxe_Unicorn_Cosmetic_Set-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Deluxe_Unicorn_Cosmetic_Set} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Deluxe_Unicorn_Cosmetic_Set: itemIncrementer.Deluxe_Unicorn_Cosmetic_Set+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Flower</span>
          <img src = { Flower_Serum_Foundation_Warm_Beige } alt = 'Flower_Serum_Foundation_Warm_Beige' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Serum Foundation Warm Beige</span>
            <span className = 'price'>$21.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Flower_Serum_Foundation_Warm_Beige: true});}}>
            {
              cartText.Flower_Serum_Foundation_Warm_Beige ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Flower_Serum_Foundation_Warm_Beige > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Flower_Serum_Foundation_Warm_Beige: itemIncrementer.Flower_Serum_Foundation_Warm_Beige-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Flower_Serum_Foundation_Warm_Beige} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Flower_Serum_Foundation_Warm_Beige: itemIncrementer.Flower_Serum_Foundation_Warm_Beige+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Girl on the Go</span>
          <img src = { GirlOnTheGo_Cosmetic_Compact } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Cosmetic Compact</span>
            <span className = 'price'>$27.59</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, GirlOnTheGo_Cosmetic_Compact: true});}}>
            {
              cartText.GirlOnTheGo_Cosmetic_Compact ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.GirlOnTheGo_Cosmetic_Compact > 0)
                                                                                      setItemIncrementer({...itemIncrementer, GirlOnTheGo_Cosmetic_Compact: itemIncrementer.GirlOnTheGo_Cosmetic_Compact-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.GirlOnTheGo_Cosmetic_Compact} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, GirlOnTheGo_Cosmetic_Compact: itemIncrementer.GirlOnTheGo_Cosmetic_Compact+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Lomi</span>
          <img src = { Lomi_Rejuvenating_Foot_Spa_Bath } alt = 'Lomi_Rejuvenating_Foot_Spa_Bath' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Rejuvenating Foot Spa Bath</span>
            <span className = 'price'>$39.59</span>  
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Lomi_Rejuvenating_Foot_Spa_Bath: true});}}>
            {
              cartText.Lomi_Rejuvenating_Foot_Spa_Bath ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Lomi_Rejuvenating_Foot_Spa_Bath > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Lomi_Rejuvenating_Foot_Spa_Bath: itemIncrementer.Lomi_Rejuvenating_Foot_Spa_Bath-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Lomi_Rejuvenating_Foot_Spa_Bath} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Lomi_Rejuvenating_Foot_Spa_Bath: itemIncrementer.Lomi_Rejuvenating_Foot_Spa_Bath+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>LOreal Paris</span>
          <img src = { LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder } alt = 'LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Infallible 24H Fresh Wear In a Powder</span>
            <span className = 'price'>$17.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder: true});}}>
            {
              cartText.LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder > 0)
                                                                                      setItemIncrementer({...itemIncrementer, LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder: itemIncrementer.LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder-1});                                                                          
                                                                                    } }> -</button>
                                      <span className = 'number'> {itemIncrementer.LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder: itemIncrementer.LOreal_Paris_Infallible_24H_FreshWear_In_a_Powder+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>LUG</span>
          <img src = { LUG_Trolley_Cosmetic_Case } alt = 'LUG_Trolley_Cosmetic_Case' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Trolley Cosmetic Case</span>
            <span className = 'price'>$67.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, LUG_Trolley_Cosmetic_Case: true});}}>
            {
              cartText.LUG_Trolley_Cosmetic_Case ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.LUG_Trolley_Cosmetic_Case > 0)
                                                                                      setItemIncrementer({...itemIncrementer, LUG_Trolley_Cosmetic_Case: itemIncrementer.LUG_Trolley_Cosmetic_Case-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.LUG_Trolley_Cosmetic_Case} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, LUG_Trolley_Cosmetic_Case: itemIncrementer.LUG_Trolley_Cosmetic_Case+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>LUG</span>
          <img src = { LUG_Trolley_Cosmetic_Case_Blue } alt = 'LUG_Trolley_Cosmetic_Case_Blue' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Trolley Cosmetic Case Blue</span>
            <span className = 'price'>$67.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, LUG_Trolley_Cosmetic_Case_Blue: true});}}>
            {
              cartText.LUG_Trolley_Cosmetic_Case_Blue ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.LUG_Trolley_Cosmetic_Case_Blue > 0)
                                                                                      setItemIncrementer({...itemIncrementer, LUG_Trolley_Cosmetic_Case_Blue: itemIncrementer.LUG_Trolley_Cosmetic_Case_Blue-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.LUG_Trolley_Cosmetic_Case_Blue} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, LUG_Trolley_Cosmetic_Case_Blue: itemIncrementer.LUG_Trolley_Cosmetic_Case_Blue+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Quo Beauty</span>
          <img src = { QuoBeauty_Cheek_Lip_Multistick_Sunrise } alt = 'QuoBeauty_Cheek_Lip_Multistick_Sunrise' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Cheek Lip Multistick Sunrise</span>
            <span className = 'price'>$7.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, QuoBeauty_Cheek_Lip_Multistick_Sunrise: true});}}>
            {
              cartText.QuoBeauty_Cheek_Lip_Multistick_Sunrise ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.QuoBeauty_Cheek_Lip_Multistick_Sunrise > 0)
                                                                                      setItemIncrementer({...itemIncrementer, QuoBeauty_Cheek_Lip_Multistick_Sunrise: itemIncrementer.QuoBeauty_Cheek_Lip_Multistick_Sunrise-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.QuoBeauty_Cheek_Lip_Multistick_Sunrise} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, QuoBeauty_Cheek_Lip_Multistick_Sunrise: itemIncrementer.QuoBeauty_Cheek_Lip_Multistick_Sunrise+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Quo Beauty</span>
          <img src = { QuoBeauty_CoolPowder_Bronzer } alt = 'QuoBeauty_CoolPowder_Bronzer' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Cool Powder Bronzer</span>
            <span className = 'price'>$9.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, QuoBeauty_CoolPowder_Bronzer: true});}}>
            {
              cartText.QuoBeauty_CoolPowder_Bronzer ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.QuoBeauty_CoolPowder_Bronzer > 0)
                                                                                      setItemIncrementer({...itemIncrementer, QuoBeauty_CoolPowder_Bronzer: itemIncrementer.QuoBeauty_CoolPowder_Bronzer-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.QuoBeauty_CoolPowder_Bronzer} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, QuoBeauty_CoolPowder_Bronzer: itemIncrementer.QuoBeauty_CoolPowder_Bronzer+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Quo Beauty</span>
          <img src = { QuoBeauty_Cosmetic_Wedges } alt = 'QuoBeauty_Cosmetic_Wedges' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Cosmetic Wedges</span>
            <span className = 'price'>$4.59</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, QuoBeauty_Cosmetic_Wedges: true});}}>
            {
              cartText.QuoBeauty_Cosmetic_Wedges ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.QuoBeauty_Cosmetic_Wedges > 0)
                                                                                      setItemIncrementer({...itemIncrementer, QuoBeauty_Cosmetic_Wedges: itemIncrementer.QuoBeauty_Cosmetic_Wedges-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.QuoBeauty_Cosmetic_Wedges} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, QuoBeauty_Cosmetic_Wedges: itemIncrementer.QuoBeauty_Cosmetic_Wedges+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Refectocil</span>
          <img src = { Refectocil_Soft_Cosmetic_Brush } alt = 'Refectocil_Soft_Cosmetic_Brush' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Soft Cosmetic Brush</span>
            <span className = 'price'>$32.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Refectocil_Soft_Cosmetic_Brush: true});}}>
            {
              cartText.Refectocil_Soft_Cosmetic_Brush ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Refectocil_Soft_Cosmetic_Brush > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Refectocil_Soft_Cosmetic_Brush: itemIncrementer.Refectocil_Soft_Cosmetic_Brush-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Refectocil_Soft_Cosmetic_Brush} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Refectocil_Soft_Cosmetic_Brush: itemIncrementer.Refectocil_Soft_Cosmetic_Brush+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { Friends_Cosmetic_Case_Set_packof3 } alt = 'Friends_Cosmetic_Case_Set_packof3' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Friends Cosmetic Case Set (Pack of 3)</span>
            <span className = 'price'>$40.25</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, xLOreal_Paris_Infallible_24H_FreshWear_In_a_Powder: true});}}>
            {
              cartText.xLOreal_Paris_Infallible_24H_FreshWear_In_a_Powder ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.xLOreal_Paris_Infallible_24H_FreshWear_In_a_Powder > 0)
                                                                                      setItemIncrementer({...itemIncrementer, xLOreal_Paris_Infallible_24H_FreshWear_In_a_Powder: itemIncrementer.xLOreal_Paris_Infallible_24H_FreshWear_In_a_Powder-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.xLOreal_Paris_Infallible_24H_FreshWear_In_a_Powder} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, xLOreal_Paris_Infallible_24H_FreshWear_In_a_Powder: itemIncrementer.xLOreal_Paris_Infallible_24H_FreshWear_In_a_Powder+1}) }> + </button>                                    
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