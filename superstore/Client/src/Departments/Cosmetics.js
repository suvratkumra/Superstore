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
import Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder from "../images/Cosmetics/Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder.png"
import LUG_Trolley_Cosmetic_Case from "../images/Cosmetics/LUG_Trolley_Cosmetic_Case.png"
import LUG_Trolley_Cosmetic_Case_Blue from "../images/Cosmetics/LUG_Trolley_Cosmetic_Case_Blue.png"
import QuoBeauty_Cheek_Lip_Multistick_Sunrise from "../images/Cosmetics/QuoBeauty_Cheek_Lip_Multistick_Sunrise.png"
import QuoBeauty_CoolPowder_Bronzer from "../images/Cosmetics/QuoBeauty_CoolPowder_Bronzer.png"
import QuoBeauty_Cosmetic_Wedges from "../images/Cosmetics/QuoBeauty_Cosmetic_Wedges.png"
import Refectocil_Soft_Cosmetic_Brush from "../images/Cosmetics/Refectocil_Soft_Cosmetic_Brush.png"
import Friends_Cosmetic_Case_Set_packof3 from "../images/Cosmetics/Friends_Cosmetic_Case_Set_packof3.png"
import Axios from 'axios';

export default function Cosmetics() {
  const initialBoolean = false;
  const initializeValues = {xLOreal_Paris_Infallible_24H_FreshWear_In_a_Powder: initialBoolean, Annabelle_Perfect_Bronze_Pressed_Powder:initialBoolean, Annabelle_Perfect_Glow_Topaz8point2g:initialBoolean, BV_Dark_Spot_Corrector_Cream:initialBoolean, Deluxe_Unicorn_Cosmetic_Set:initialBoolean, Flower_Serum_Foundation_Warm_Beige:initialBoolean, GirlOnTheGo_Cosmetic_Compact:initialBoolean, Lomi_Rejuvenating_Foot_Spa_Bath:initialBoolean, Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder:initialBoolean, LUG_Trolley_Cosmetic_Case:initialBoolean, LUG_Trolley_Cosmetic_Case_Blue:initialBoolean, QuoBeauty_Cheek_Lip_Multistick_Sunrise:initialBoolean, QuoBeauty_CoolPowder_Bronzer:initialBoolean, QuoBeauty_Cosmetic_Wedges:initialBoolean, Refectocil_Soft_Cosmetic_Brush:initialBoolean, Friends_Cosmetic_Case_Set_packof3:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const [showButton, setShowButton] = useState({showButton: false, showButton2: false});  
  const initializeNumber = {xLOreal_Paris_Infallible_24H_FreshWear_In_a_Powder: 0, Annabelle_Perfect_Bronze_Pressed_Powder:0, Annabelle_Perfect_Glow_Topaz8point2g:0, BV_Dark_Spot_Corrector_Cream:0, Deluxe_Unicorn_Cosmetic_Set:0, Flower_Serum_Foundation_Warm_Beige:0, GirlOnTheGo_Cosmetic_Compact:0, Lomi_Rejuvenating_Foot_Spa_Bath:0, Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder:0, LUG_Trolley_Cosmetic_Case:0, LUG_Trolley_Cosmetic_Case_Blue:0, QuoBeauty_Cheek_Lip_Multistick_Sunrise:0, QuoBeauty_CoolPowder_Bronzer:0, QuoBeauty_Cosmetic_Wedges:0, Refectocil_Soft_Cosmetic_Brush:0, Friends_Cosmetic_Case_Set_packof3:0};
  const [itemIncrementer, setItemIncrementer] = useState(initializeNumber);

  const [continuing, setContinuing] = useState(false);
  const [email, setEmail] = useState("");

  function addToCartListener(str, quantity, price) {
    console.log(str, quantity);
    Axios.post("http://localhost:3001/api/add_to_cart", {
      email: email,
      product_name: str, 
      quantity: quantity, 
      price: price
    }).then((res) => console.log(res.data))
  }
  function logoutFunction() {
    Axios.post("http://localhost:3001/api/logout"
    ).then((res) => {
      setEmail(res.data);
      if(email.length === 0) {
        setContinuing(false);
      }else {
        setContinuing(true);
      }
    })

  }

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
          <button className="button-29" onClick= {()=>{window.location.href = "http://localhost:3000/Cart"}}>CART</button> 
          <button className = "button-29" onClick={logoutFunction}>Logout</button>
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
                                                                                      addToCartListener("Perfect Bronze Pressed Powder", itemIncrementer.Annabelle_Perfect_Bronze_Pressed_Powder, 7.19);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Annabelle_Perfect_Bronze_Pressed_Powder} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Annabelle_Perfect_Bronze_Pressed_Powder: itemIncrementer.Annabelle_Perfect_Bronze_Pressed_Powder+1}) 
                                                                                    addToCartListener("Perfect Bronze Pressed Powder", itemIncrementer.Annabelle_Perfect_Bronze_Pressed_Powder, 7.19);}}> + </button>                                    
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
                                                                                      addToCartListener("Perfect Glow Topaz (8.2g)", itemIncrementer.Annabelle_Perfect_Glow_Topaz8point2g, 7.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Annabelle_Perfect_Glow_Topaz8point2g} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Annabelle_Perfect_Glow_Topaz8point2g: itemIncrementer.Annabelle_Perfect_Glow_Topaz8point2g+1}) 
                                                                                  addToCartListener("Perfect Glow Topaz (8.2g)", itemIncrementer.Annabelle_Perfect_Glow_Topaz8point2g, 7.99);}}> + </button>                                    
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
                                                                                      addToCartListener("Dark Spot Corrector Cream", itemIncrementer.BV_Dark_Spot_Corrector_Cream, 50.00);                                                                         
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.BV_Dark_Spot_Corrector_Cream} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, BV_Dark_Spot_Corrector_Cream: itemIncrementer.BV_Dark_Spot_Corrector_Cream+1})
                                                                                  addToCartListener("Dark Spot Corrector Cream", itemIncrementer.BV_Dark_Spot_Corrector_Cream, 50.00); }}> + </button>                                    
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
                                                                                      addToCartListener("Unicorn Cosmetic Set", itemIncrementer.Deluxe_Unicorn_Cosmetic_Set, 34.99);                                                                   
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Deluxe_Unicorn_Cosmetic_Set} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Deluxe_Unicorn_Cosmetic_Set: itemIncrementer.Deluxe_Unicorn_Cosmetic_Set+1}) 
                                                                                    addToCartListener("Unicorn Cosmetic Set", itemIncrementer.Deluxe_Unicorn_Cosmetic_Set, 34.99);  }}> + </button>                                    
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
                                                                                      addToCartListener("Serum Foundation Warm Beige", itemIncrementer.Flower_Serum_Foundation_Warm_Beige, 21.99);  
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Flower_Serum_Foundation_Warm_Beige} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Flower_Serum_Foundation_Warm_Beige: itemIncrementer.Flower_Serum_Foundation_Warm_Beige+1}) 
                                                                                  addToCartListener("Serum Foundation Warm Beige", itemIncrementer.Flower_Serum_Foundation_Warm_Beige, 21.99);  }}> + </button>                                    
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
                                                                                      addToCartListener("Cosmetic Compact", itemIncrementer.GirlOnTheGo_Cosmetic_Compact, 27.59);                                                                           
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.GirlOnTheGo_Cosmetic_Compact} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, GirlOnTheGo_Cosmetic_Compact: itemIncrementer.GirlOnTheGo_Cosmetic_Compact+1}) 
                                                                                    addToCartListener("Cosmetic Compact", itemIncrementer.GirlOnTheGo_Cosmetic_Compact, 27.59); }}> + </button>                                    
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
                                                                                      addToCartListener("Rejuvenating Foot Spa Bath", itemIncrementer.Lomi_Rejuvenating_Foot_Spa_Bath, 39.59);                                                                             
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Lomi_Rejuvenating_Foot_Spa_Bath} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Lomi_Rejuvenating_Foot_Spa_Bath: itemIncrementer.Lomi_Rejuvenating_Foot_Spa_Bath+1})   
                                                                                  addToCartListener("Rejuvenating Foot Spa Bath", itemIncrementer.Lomi_Rejuvenating_Foot_Spa_Bath, 39.59);        }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Loreal Paris</span>
          <img src = { Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder } alt = 'Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Infallible 24H Fresh Wear In a Powder</span>
            <span className = 'price'>$17.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder: true});}}>
            {
              cartText.Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder: itemIncrementer.Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder-1});                                                                          
                                                                                      addToCartListener("Infallible 24H Fresh Wear In a Powder", itemIncrementer.Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder, 17.99);        
                                                                                    } }> -</button>

                                      <span className = 'number'> {itemIncrementer.Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder} </span>

                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder: itemIncrementer.Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder+1}) 
                                                                                  addToCartListener("Infallible 24H Fresh Wear In a Powder", itemIncrementer.Loreal_Paris_Infallible_24H_FreshWear_In_a_Powder, 17.99);     }}> + </button>                                    
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
                                                                                      addToCartListener("Trolley Cosmetic Case", itemIncrementer.LUG_Trolley_Cosmetic_Case, 67.99);                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.LUG_Trolley_Cosmetic_Case} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, LUG_Trolley_Cosmetic_Case: itemIncrementer.LUG_Trolley_Cosmetic_Case+1}) 
                                                                                    addToCartListener("Trolley Cosmetic Case", itemIncrementer.LUG_Trolley_Cosmetic_Case, 67.99);   }
                                                                                  }> + </button>                                    
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
                                                                                      addToCartListener("Trolley Cosmetic Case Blue", itemIncrementer.LUG_Trolley_Cosmetic_Case_Blue, 67.99);                                                                         
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.LUG_Trolley_Cosmetic_Case_Blue} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, LUG_Trolley_Cosmetic_Case_Blue: itemIncrementer.LUG_Trolley_Cosmetic_Case_Blue+1}) 
                                                                                  addToCartListener("Trolley Cosmetic Case Blue", itemIncrementer.LUG_Trolley_Cosmetic_Case_Blue, 67.99);}}> + </button>                                    
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
                                                                                      addToCartListener("Cheek Lip Multistick Sunrise", itemIncrementer.QuoBeauty_Cheek_Lip_Multistick_Sunrise, 7.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.QuoBeauty_Cheek_Lip_Multistick_Sunrise} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, QuoBeauty_Cheek_Lip_Multistick_Sunrise: itemIncrementer.QuoBeauty_Cheek_Lip_Multistick_Sunrise+1})
                                                                                  addToCartListener("Cheek Lip Multistick Sunrise", itemIncrementer.QuoBeauty_Cheek_Lip_Multistick_Sunrise, 7.99);} }> + </button>                                    
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
                                                                                      addToCartListener("Cool Powder Bronzer", itemIncrementer.QuoBeauty_CoolPowder_Bronzer, 9.99);                                                                      
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.QuoBeauty_CoolPowder_Bronzer} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, QuoBeauty_CoolPowder_Bronzer: itemIncrementer.QuoBeauty_CoolPowder_Bronzer+1}) 
                                                                                    addToCartListener("Cool Powder Bronzer", itemIncrementer.QuoBeauty_CoolPowder_Bronzer, 9.99);}}> + </button>                                    
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
                                                                                      addToCartListener("Cosmetic Wedges", itemIncrementer.QuoBeauty_Cosmetic_Wedges, 4.59);                                                                        
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.QuoBeauty_Cosmetic_Wedges} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, QuoBeauty_Cosmetic_Wedges: itemIncrementer.QuoBeauty_Cosmetic_Wedges+1}) 
                                                                                  addToCartListener("Cosmetic Wedges", itemIncrementer.QuoBeauty_Cosmetic_Wedges, 4.59);  }}> + </button>                                    
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
                                                                                      addToCartListener("Soft Cosmetic Brush", itemIncrementer.Refectocil_Soft_Cosmetic_Brush, 32.99);                                                                           
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Refectocil_Soft_Cosmetic_Brush} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Refectocil_Soft_Cosmetic_Brush: itemIncrementer.Refectocil_Soft_Cosmetic_Brush+1}) 
                                                                                  addToCartListener("Soft Cosmetic Brush", itemIncrementer.Refectocil_Soft_Cosmetic_Brush, 32.99);   }}> + </button>                                    
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
                                                                                      addToCartListener("Friends Cosmetic Case Set (Pack of 3)", itemIncrementer.xLOreal_Paris_Infallible_24H_FreshWear_In_a_Powder, 40.25);   
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.xLOreal_Paris_Infallible_24H_FreshWear_In_a_Powder} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, xLOreal_Paris_Infallible_24H_FreshWear_In_a_Powder: itemIncrementer.xLOreal_Paris_Infallible_24H_FreshWear_In_a_Powder+1}) 
                                                                                  addToCartListener("Friends Cosmetic Case Set (Pack of 3)", itemIncrementer.xLOreal_Paris_Infallible_24H_FreshWear_In_a_Powder, 40.25);   }}> + </button>                                    
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