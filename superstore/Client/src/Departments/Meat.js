import React, { useState } from 'react'
import '../css/Bakery.css'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";

import chicken_breast_clubPack from "../images/Meat/chicken_breast_clubPack.png"
import chicken_leg_clubPack from "../images/Meat/chicken_leg_clubPack.png"
import chicken_thigh_clubPack from "../images/Meat/chicken_thigh_clubPack.png"
import extra_lean_ground_beef from "../images/Meat/extra_lean_ground_beef.png"
import juicy_jumbo_all_beef_wieners from "../images/Meat/juicy_jumbo_all_beef_wieners.png"
import lean_ground_beef from "../images/Meat/lean_ground_beef.png"
import minced_turkey from "../images/Meat/minced_turkey.png"
import mild_sugar_cured_bacon from "../images/Meat/mild_sugar_cured_bacon.png"
import ML_natural_top_dogs from "../images/Meat/ML_natural_top_dogs.png"
import nn_hotdogs from "../images/Meat/nn_hotdogs.png"
import PC_boneless_chickenBreast from "../images/Meat/PC_boneless_chickenBreast.png"
import PC_FF_mild_italian_pork from "../images/Meat/PC_FF_mild_italian_pork.png"
import pork_tendelion_2pack from "../images/Meat/pork_tendelion_2pack.png"
import smoked_classicCut_bacon from "../images/Meat/smoked_classicCut_bacon.png"
import smokehouse_bacon from "../images/Meat/smokehouse_bacon.png"
import Axios from 'axios';

export default function Meat() {
  const initialBoolean = false;
  const initializeValues = {chicken_breast_clubPack:initialBoolean, chicken_leg_clubPack:initialBoolean, chicken_thigh_clubPack:initialBoolean, extra_lean_ground_beef:initialBoolean, juicy_jumbo_all_beef_wieners:initialBoolean, lean_ground_beef:initialBoolean, minced_turkey:initialBoolean, mild_sugar_cured_bacon:initialBoolean, ML_natural_top_dogs:initialBoolean, nn_hotdogs:initialBoolean, PC_boneless_chickenBreast:initialBoolean, PC_FF_mild_italian_pork:initialBoolean, pork_tendelion_2pack:initialBoolean, smoked_classicCut_bacon:initialBoolean, smokehouse_bacon:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const initializeNumber = {chicken_breast_clubPack:1, chicken_leg_clubPack:1, chicken_thigh_clubPack:1, extra_lean_ground_beef:1, juicy_jumbo_all_beef_wieners:1, lean_ground_beef:1, minced_turkey:1, mild_sugar_cured_bacon:1, ML_natural_top_dogs:1, nn_hotdogs:1, PC_boneless_chickenBreast:1, PC_FF_mild_italian_pork:1, pork_tendelion_2pack:1, smoked_classicCut_bacon:1, smokehouse_bacon:1};
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
        MEAT
      </div>



      <div className='bigProducts__container'>
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { chicken_breast_clubPack } alt = 'chicken_breast_clubPack' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Chicken Breast ClubPack</span>
            <span className = 'price'>$23.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, grainBread: true});}}>
            {
              cartText.grainBread ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.grainBread > 0)
                                                                                      setItemIncrementer({...itemIncrementer, grainBread: itemIncrementer.grainBread-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.grainBread} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, grainBread: itemIncrementer.grainBread+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>



        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { chicken_leg_clubPack } alt = 'Chicken Leg ClubPack' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Chicken Leg ClubPack</span>
            <span className = 'price'>$18.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, chicken_leg_clubPack: true});}}>
            {
              cartText.chicken_leg_clubPack ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.chicken_leg_clubPack > 0)
                                                                                      setItemIncrementer({...itemIncrementer, chicken_leg_clubPack: itemIncrementer.chicken_leg_clubPack-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.chicken_leg_clubPack} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, chicken_leg_clubPack: itemIncrementer.chicken_leg_clubPack+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { chicken_thigh_clubPack } alt = 'Chicken Thigh ClubPack' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Chicken Thigh ClubPack</span>
            <span className = 'price'>$16.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, chicken_thigh_clubPack: true});}}>
            {
              cartText.chicken_thigh_clubPack ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.chicken_thigh_clubPack > 0)
                                                                                      setItemIncrementer({...itemIncrementer, chicken_thigh_clubPack: itemIncrementer.chicken_thigh_clubPack-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.chicken_thigh_clubPack} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, chicken_thigh_clubPack: itemIncrementer.chicken_thigh_clubPack+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
         
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { extra_lean_ground_beef } alt = 'extra_lean_ground_beef' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Extra Lean Ground Beef (954g)</span>
            <span className = 'price'>$12.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, extra_lean_ground_beef: true});}}>
            {
              cartText.extra_lean_ground_beef ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.extra_lean_ground_beef > 0)
                                                                                      setItemIncrementer({...itemIncrementer, extra_lean_ground_beef: itemIncrementer.extra_lean_ground_beef-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.extra_lean_ground_beef} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, extra_lean_ground_beef: itemIncrementer.extra_lean_ground_beef+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Schneiders</span>
          <img src = { juicy_jumbo_all_beef_wieners } alt = 'juicy_jumbo_all_beef_wieners' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Juicy Jumbo All Beef Wieners</span>
            <span className = 'price'>$11.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, juicy_jumbo_all_beef_wieners: true});}}>
            {
              cartText.juicy_jumbo_all_beef_wieners ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.juicy_jumbo_all_beef_wieners > 0)
                                                                                      setItemIncrementer({...itemIncrementer, juicy_jumbo_all_beef_wieners: itemIncrementer.juicy_jumbo_all_beef_wieners-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.juicy_jumbo_all_beef_wieners} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, juicy_jumbo_all_beef_wieners: itemIncrementer.juicy_jumbo_all_beef_wieners+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Farmer's Market</span>
          <img src = { lean_ground_beef } alt = 'lean_ground_beef' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Lean Ground Beef (456g) </span>
            <span className = 'price'>$7.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, lean_ground_beef: true});}}>
            {
              cartText.lean_ground_beef ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.lean_ground_beef > 0)
                                                                                      setItemIncrementer({...itemIncrementer, lean_ground_beef: itemIncrementer.lean_ground_beef-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.lean_ground_beef} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, lean_ground_beef: itemIncrementer.lean_ground_beef+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { mild_sugar_cured_bacon } alt = 'mild_sugar_cured_bacon' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Mild Sugar Cured Bacon</span>
            <span className = 'price'>$3.99</span>  
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, minced_turkey: true});}}>
            {
              cartText.minced_turkey ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.minced_turkey > 0)
                                                                                      setItemIncrementer({...itemIncrementer, minced_turkey: itemIncrementer.minced_turkey-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.minced_turkey} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, minced_turkey: itemIncrementer.minced_turkey+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>PC Blue Menu</span>
          <img src = { minced_turkey } alt = 'minced_turkey' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Minced Turkey</span>
            <span className = 'price'>$6.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, mild_sugar_cured_bacon: true});}}>
            {
              cartText.mild_sugar_cured_bacon ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.mild_sugar_cured_bacon > 0)
                                                                                      setItemIncrementer({...itemIncrementer, mild_sugar_cured_bacon: itemIncrementer.mild_sugar_cured_bacon-1});                                                                          
                                                                                    } }> -</button>
                                      <span className = 'number'> {itemIncrementer.mild_sugar_cured_bacon} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, mild_sugar_cured_bacon: itemIncrementer.mild_sugar_cured_bacon+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Maple Leaf</span>
          <img src = { ML_natural_top_dogs } alt = 'ML_natural_top_dogs' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Natural Top Dogs</span>
            <span className = 'price'>$8.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, ML_natural_top_dogs: true});}}>
            {
              cartText.ML_natural_top_dogs ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.ML_natural_top_dogs > 0)
                                                                                      setItemIncrementer({...itemIncrementer, ML_natural_top_dogs: itemIncrementer.ML_natural_top_dogs-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.ML_natural_top_dogs} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, ML_natural_top_dogs: itemIncrementer.ML_natural_top_dogs+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { nn_hotdogs } alt = 'hotdogs' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Hot Dogs</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, nn_hotdogs: true});}}>
            {
              cartText.nn_hotdogs ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.nn_hotdogs > 0)
                                                                                      setItemIncrementer({...itemIncrementer, nn_hotdogs: itemIncrementer.nn_hotdogs-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.nn_hotdogs} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, nn_hotdogs: itemIncrementer.nn_hotdogs+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>PC Blue Menu</span>
          <img src = { PC_boneless_chickenBreast } alt = 'PC_boneless_chickenBreast' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Boneless Chicken Breast</span>
            <span className = 'price'>$10.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, PC_boneless_chickenBreast: true});}}>
            {
              cartText.PC_boneless_chickenBreast ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.PC_boneless_chickenBreast > 0)
                                                                                      setItemIncrementer({...itemIncrementer, PC_boneless_chickenBreast: itemIncrementer.PC_boneless_chickenBreast-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.PC_boneless_chickenBreast} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, PC_boneless_chickenBreast: itemIncrementer.PC_boneless_chickenBreast+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>President's Choice FF</span>
          <img src = { PC_FF_mild_italian_pork } alt = 'PC_FF_mild_italian_pork' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Mild Italian Pork (6-Pack)</span>
            <span className = 'price'>$9.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, PC_FF_mild_italian_pork: true});}}>
            {
              cartText.PC_FF_mild_italian_pork ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.PC_FF_mild_italian_pork > 0)
                                                                                      setItemIncrementer({...itemIncrementer, PC_FF_mild_italian_pork: itemIncrementer.PC_FF_mild_italian_pork-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.PC_FF_mild_italian_pork} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, PC_FF_mild_italian_pork: itemIncrementer.PC_FF_mild_italian_pork+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { pork_tendelion_2pack } alt = 'pork_tendelion_2pack' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Pork Tendalion (2-Pack)</span>
            <span className = 'price'>$21.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, pork_tendelion_2pack: true});}}>
            {
              cartText.pork_tendelion_2pack ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.pork_tendelion_2pack > 0)
                                                                                      setItemIncrementer({...itemIncrementer, pork_tendelion_2pack: itemIncrementer.pork_tendelion_2pack-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.pork_tendelion_2pack} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, pork_tendelion_2pack: itemIncrementer.pork_tendelion_2pack+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Schneiders</span>
          <img src = { smoked_classicCut_bacon } alt = 'smoked_classicCut_bacon' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Classic Cut Bacon</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, smoked_classicCut_bacon: true});}}>
            {
              cartText.smoked_classicCut_bacon ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.smoked_classicCut_bacon > 0)
                                                                                      setItemIncrementer({...itemIncrementer, smoked_classicCut_bacon: itemIncrementer.smoked_classicCut_bacon-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.smoked_classicCut_bacon} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, smoked_classicCut_bacon: itemIncrementer.smoked_classicCut_bacon+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Smokehouse</span>
          <img src = { smokehouse_bacon } alt = 'smoked_classicCut_bacon' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Bacon Original</span>
            <span className = 'price'>$6.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, smokehouse_bacon: true});}}>
            {
              cartText.smokehouse_bacon ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.smokehouse_bacon > 0)
                                                                                      setItemIncrementer({...itemIncrementer, smokehouse_bacon: itemIncrementer.smokehouse_bacon-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.smokehouse_bacon} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, smokehouse_bacon: itemIncrementer.smokehouse_bacon+1}) }> + </button>                                    
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