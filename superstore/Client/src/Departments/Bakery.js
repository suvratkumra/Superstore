import React from 'react'
import '../css/Bakery.css'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import grain_whole_wheat_bread from "../images/Bakery/14_grain_whole_wheat_bread.png"
import banana_chocolate_muffin from "../images/Bakery/banana_chocolate_muffin.png"
import banana_loaf_cake from "../images/Bakery/banana_loaf_cake.png"
import butter_croissant from "../images/Bakery/butter_croissant.png";
import choc_mini_muffin from "../images/Bakery/choc_mini_muffin.png"
import chocolate_chip_muffin from "../images/Bakery/chocolate_chip_muffin.png"
import cinnamon_raisin_bread from "../images/Bakery/cinnamon_raisin_bread.png"
import double_chocolate_muffin from "../images/Bakery/double_chocolate_muffin.png";
import french_bread from "../images/Bakery/french_bread.png"
import large_original_tortillas from "../images/Bakery/large_original_tortillas.png";
import PC_tortillas_original from "../images/Bakery/PC_tortillas_original.png"
import rolls_6_pack from "../images/Bakery/rolls_6_pack.png"
import sourdough_loaf_sliced from "../images/Bakery/sourdough_loaf_sliced.png"
import stone_milled_whole_wheat_bread from "../images/Bakery/stone_milled_whole_wheat_bread.png";
import suraj_naan_original from "../images/Bakery/suraj_naan_original_5.png";
import { useState } from 'react';
import Axios from 'axios';


export default function Bakery() {
  const initialBoolean = false;
  const initializeValues = {grainBread:initialBoolean, bananaMuffin:initialBoolean, bananaCake:initialBoolean, butterCroissant:initialBoolean, chocolateMini:initialBoolean, chocChipMuffin:initialBoolean, cinnamonBread:initialBoolean, doubleChoc:initialBoolean, frenchBread:initialBoolean, largeOriginal:initialBoolean, PCtortillas:initialBoolean, rolls:initialBoolean, sourdoughLoaf:initialBoolean, roastedWheat:initialBoolean, naan:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const [showButton, setShowButton] = useState({showButton: false, showButton2: false});  
  const initializeNumber = {grainBread:0, bananaMuffin:0, bananaCake:0, butterCroissant:0, chocolateMini:0, chocChipMuffin:0, cinnamonBread:0, doubleChoc:0, frenchBread:0, largeOriginal:0, PCtortillas:0, rolls:0, sourdoughLoaf:0, roastedWheat:0, naan:0};
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
    })
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
          <span class = "name1">  SUPERSTORE </span>
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
    

    <div className='products_name__container'>
      <div className='departmentName'>
        BAKERY
      </div>



      <div className='bigProducts__container'>
        <div className='item__container'>
          <span className = 'company_name'>Country Harvest</span>
          <img src = { grain_whole_wheat_bread } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>14 Grain Whole Wheat Bread</span>
            <span className = 'price'>$3.21</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, grainBread: true});}}>
            {
              cartText.grainBread ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.grainBread > 0)
                                                                                      setItemIncrementer({...itemIncrementer, grainBread: itemIncrementer.grainBread-1});                                                                          
                                                                                      addToCartListener("14 Grain Whole Wheat Bread", itemIncrementer.grainBread, 3.21);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.grainBread} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, grainBread: itemIncrementer.grainBread+1});
                                                                                    addToCartListener("14 Grain Whole Wheat Bread", itemIncrementer.grainBread, 3.21);
                                                                                    } }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>



        <div className='item__container'>
          <span className = 'company_name'>Farmer's Market</span>
          <img src = { banana_chocolate_muffin } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Banana Chocolate Muffin</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, bananaMuffin: true});}}>
            {
              cartText.bananaMuffin ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.bananaMuffin > 0)
                                                                                      setItemIncrementer({...itemIncrementer, bananaMuffin: itemIncrementer.bananaMuffin-1});
                                                                                      addToCartListener("Banana Chocolate Muffin", itemIncrementer.bananaMuffin, 4.99);                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.bananaMuffin} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, bananaMuffin: itemIncrementer.bananaMuffin+1}) 
                                                                                  addToCartListener("Banana Chocolate Muffin", itemIncrementer.bananaMuffin, 4.99);}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Farmer's Market</span>
          <img src = { banana_loaf_cake } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Banana Loaf Cake</span>
            <span className = 'price'>$4.49</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, bananaCake: true});}}>
            {
              cartText.bananaCake ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.bananaCake > 0)
                                                                                      setItemIncrementer({...itemIncrementer, bananaCake: itemIncrementer.bananaCake-1});
                                                                                      addToCartListener("Banana Loaf Cake", itemIncrementer.bananaCake, 4.49);                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.bananaCake} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, bananaCake: itemIncrementer.bananaCake+1}) 
                                                                                    addToCartListener("Banana Loaf Cake", itemIncrementer.bananaCake, 4.49);}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
         
        <div className='item__container'>
          <span className = 'company_name'>Farmer's Market</span>
          <img src = { butter_croissant } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Butter Croissant</span>
            <span className = 'price'>$3.49</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, butterCroissant: true});}}>
            {
              cartText.butterCroissant ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.butterCroissant > 0)
                                                                                      setItemIncrementer({...itemIncrementer, butterCroissant: itemIncrementer.butterCroissant-1})
                                                                                      addToCartListener("Butter Croissant", itemIncrementer.butterCroissant, 3.49);                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.butterCroissant} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, butterCroissant: itemIncrementer.butterCroissant+1}) 
                                                                                     addToCartListener("Butter Croissant", itemIncrementer.butterCroissant, 3.49);}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>President's Choice</span>
          <img src = { choc_mini_muffin } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Chocolate Mini Muffin</span>
            <span className = 'price'>$3.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, chocolateMini: true});}}>
            {
              cartText.chocolateMini ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.chocolateMini > 0)
                                                                                      setItemIncrementer({...itemIncrementer, chocolateMini: itemIncrementer.chocolateMini-1});  
                                                                                      addToCartListener("Chocolate Mini Muffin", itemIncrementer.chocolateMini, 3.99)                                                                        
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.chocolateMini} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, chocolateMini: itemIncrementer.chocolateMini+1}) 
                                                                                    addToCartListener("Chocolate Mini Muffin", itemIncrementer.chocolateMini, 3.99)}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Farmer's Market</span>
          <img src = { chocolate_chip_muffin } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Chocolate Chip Muffin</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, chocChipMuffin: true});}}>
            {
              cartText.chocChipMuffin ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.chocChipMuffin > 0)
                                                                                      setItemIncrementer({...itemIncrementer, chocChipMuffin: itemIncrementer.chocChipMuffin-1}); 
                                                                                      addToCartListener("Chocolate Chip Muffin", itemIncrementer.chocChipMuffin, 4.99)                                                                         
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.chocChipMuffin} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, chocChipMuffin: itemIncrementer.chocChipMuffin+1}) 
                                     addToCartListener("Chocolate Chip Muffin", itemIncrementer.chocChipMuffin, 4.99)}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Country Harvest</span>
          <img src = { cinnamon_raisin_bread } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>cinnamon Raisin Bread</span>
            <span className = 'price'>$2.99</span>  
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, cinnamonBread: true});}}>
            {
              cartText.cinnamonBread ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.cinnamonBread > 0)
                                                                                      setItemIncrementer({...itemIncrementer, cinnamonBread: itemIncrementer.cinnamonBread-1});   
                                                                                      addToCartListener("cinnamon Raisin Bread", itemIncrementer.cinnamonBread, 2.99)                                                                       
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.cinnamonBread} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, cinnamonBread: itemIncrementer.cinnamonBread+1}) 
                                                                                  addToCartListener("cinnamon Raisin Bread", itemIncrementer.cinnamonBread, 2.99)}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Farmer's Market</span>
          <img src = { double_chocolate_muffin } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Double Chocolate Muffin</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, doubleChoc: true});}}>
            {
              cartText.doubleChoc ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.doubleChoc > 0)
                                                                                      setItemIncrementer({...itemIncrementer, doubleChoc: itemIncrementer.doubleChoc-1});   
                                                                                      addToCartListener("Double Chocolate Muffin", itemIncrementer.doubleChoc, 4.99)                                                                       
                                                                                    } }> -</button>
                                      <span className = 'number'> {itemIncrementer.doubleChoc} </span>
                                      <button className = 'plus' onClick = {() => { setItemIncrementer({...itemIncrementer, doubleChoc: itemIncrementer.doubleChoc+1}) 
                                                                            addToCartListener("Double Chocolate Muffin", itemIncrementer.doubleChoc, 4.99)}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { french_bread } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>French Bread</span>
            <span className = 'price'>$0.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, frenchBread: true});}}>
            {
              cartText.frenchBread ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.frenchBread > 0)
                                                                                      setItemIncrementer({...itemIncrementer, frenchBread: itemIncrementer.frenchBread-1});
                                                                                      addToCartListener("French Bread", itemIncrementer.frenchBread, 0.99)                                                                           
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.frenchBread} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, frenchBread: itemIncrementer.frenchBread+1})
                                                                                    addToCartListener("French Bread", itemIncrementer.frenchBread, 0.99) } }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Casa Mendosa</span>
          <img src = { large_original_tortillas } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Large Original Tortillas</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, largeOriginal: true});}}>
            {
              cartText.largeOriginal ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.largeOriginal > 0)
                                                                                      setItemIncrementer({...itemIncrementer, largeOriginal: itemIncrementer.largeOriginal-1}); 
                                                                                      addToCartListener("Large Original Tortillas", itemIncrementer.largeOriginal, 5.99)                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.largeOriginal} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, largeOriginal: itemIncrementer.largeOriginal+1})
                                                                                    addToCartListener("Large Original Tortillas", itemIncrementer.largeOriginal, 5.99) }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>President's Choice</span>
          <img src = { PC_tortillas_original } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Tortillas Original</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, PCtortillas: true});}}>
            {
              cartText.PCtortillas ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.PCtortillas > 0)
                                                                                      setItemIncrementer({...itemIncrementer, PCtortillas: itemIncrementer.PCtortillas-1});  
                                                                                      addToCartListener("Tortillas Original", itemIncrementer.PCtortillas, 4.99)                                                                        
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.PCtortillas} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, PCtortillas: itemIncrementer.PCtortillas+1}) 
                                                                                  addToCartListener("Tortillas Original", itemIncrementer.PCtortillas, 4.99)}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { rolls_6_pack } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Rolls 6 Pack</span>
            <span className = 'price'>$2.49</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, rolls: true});}}>
            {
              cartText.rolls ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.rolls > 0)
                                                                                      setItemIncrementer({...itemIncrementer, rolls: itemIncrementer.rolls-1});                                                                          
                                                                                      addToCartListener("Rolls 6 Pack", itemIncrementer.rolls, 2.49)             
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.rolls} </span>
                                      <button className = 'plus' onClick = {() =>{ setItemIncrementer({...itemIncrementer, rolls: itemIncrementer.rolls+1})
                                                                          addToCartListener("Rolls 6 Pack", itemIncrementer.rolls, 2.49)              }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { sourdough_loaf_sliced } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Sourdough Loaf Sliced</span>
            <span className = 'price'>$1.49</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, sourdoughLoaf: true});}}>
            {
              cartText.sourdoughLoaf ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.sourdoughLoaf > 0)
                                                                                      setItemIncrementer({...itemIncrementer, sourdoughLoaf: itemIncrementer.sourdoughLoaf-1});    
                                                                                      addToCartListener("Sourdough Loaf Sliced", itemIncrementer.sourdoughLoaf, 1.49)                                                                       
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.sourdoughLoaf} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, sourdoughLoaf: itemIncrementer.sourdoughLoaf+1}) 
                                                                                                      addToCartListener("Sourdough Loaf Sliced", itemIncrementer.sourdoughLoaf, 1.49) }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Counter Harvest</span>
          <img src = { stone_milled_whole_wheat_bread } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Stone Milled With Roasted Wheat</span>
            <span className = 'price'>$2.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, roastedWheat: true});}}>
            {
              cartText.roastedWheat ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.roastedWheat > 0)
                                                                                      setItemIncrementer({...itemIncrementer, roastedWheat: itemIncrementer.roastedWheat-1}); 
                                                                                      addToCartListener("Stone Milled With Roasted Wheat", itemIncrementer.roastedWheat, 2.99)                                                                         
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.roastedWheat} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, roastedWheat: itemIncrementer.roastedWheat+1})
                                                                                  addToCartListener("Stone Milled With Roasted Wheat", itemIncrementer.roastedWheat, 2.99) }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Suraj</span>
          <img src = { suraj_naan_original } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Naan Original (5-Pack)</span>
            <span className = 'price'>$3.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, naan: true});}}>
            {
              cartText.naan ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.naan > 0)
                                                                                      setItemIncrementer({...itemIncrementer, naan: itemIncrementer.naan-1}); 
                                                                                      addToCartListener("Naan Original (5-Pack)", itemIncrementer.naan, 3.99)                                                                         
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.naan} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, naan: itemIncrementer.naan+1}) 
                                                                                  addToCartListener("Naan Original (5-Pack)", itemIncrementer.naan, 3.99)   }}> + </button>                                    
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