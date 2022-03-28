import React from 'react'
import { useState } from 'react';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
import Coconut from "../images/Produce/Coconut.webp"
import Cranberries from "../images/Produce/Cranberries.webp"
import Dill from "../images/Produce/Dill.webp"
import Fresh_Mint from "../images/Produce/Fresh_Mint.webp"
import Garlic from "../images/Produce/Garlic.webp"
import Great_Value_Fruit_Salad_With_Cherries from "../images/Produce/Great_Value_Fruit_Salad_With_Cherries.webp"
import Kale_Sweet_Salad from "../images/Produce/Kale_Sweet_Salad.webp"
import Lemon from "../images/Produce/Lemon.webp"
import Lettuce_Butter from "../images/Produce/Lettuce_Butter.webp"
import Mango_Red from "../images/Produce/Mango_Red.webp"
import Organic_Brown_Bell_Pepper from "../images/Produce/Organic_Brown_Bell_Pepper.webp"
import Organic_Cauliflower from "../images/Produce/Organic_Cauliflower.webp"
import Parsnip from "../images/Produce/Parsnip.webp"
import Potatoes_Yellow from "../images/Produce/Potatoes_Yellow.webp"
import Raspberries from "../images/Produce/Raspberries.webp"


export default function Produce() {
  const initialBoolean = false;
  const initializeValues = {Coconut:initialBoolean, Cranberries:initialBoolean, Dill:initialBoolean, Fresh_Mint:initialBoolean, Garlic:initialBoolean, Great_Value_Fruit_Salad_With_Cherries:initialBoolean, Kale_Sweet_Salad:initialBoolean, Lemon:initialBoolean, Lettuce_Butter:initialBoolean, Mango_Red:initialBoolean, Organic_Brown_Bell_Pepper:initialBoolean, Organic_Cauliflower:initialBoolean, Parsnip:initialBoolean, Potatoes_Yellow:initialBoolean, Raspberries:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const [showButton, setShowButton] = useState({showButton: false, showButton2: false});  
  const initializeNumber = {Coconut:1, Cranberries:1, Dill:1, Fresh_Mint:1, Garlic:1, Great_Value_Fruit_Salad_With_Cherries:1, Kale_Sweet_Salad:1, Lemon:1, Lettuce_Butter:1, Mango_Red:1, Organic_Brown_Bell_Pepper:1, Organic_Cauliflower:1, Parsnip:1, Potatoes_Yellow:1, Raspberries:1};
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
        PRODUCE
      </div>



      <div className='bigProducts__container'>
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { Coconut } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Coconut</span>
            <span className = 'price'>$3.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Coconut: true});}}>
            {
              cartText.Coconut ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Coconut > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Coconut: itemIncrementer.Coconut-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Coconut} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Coconut: itemIncrementer.Coconut+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>



        <div className='item__container'>
          <span className = 'company_name'>Great Value</span>
          <img src = { Cranberries } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Cranberries</span>
            <span className = 'price'>$3.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Cranberries: true});}}>
            {
              cartText.Cranberries ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Cranberries > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Cranberries: itemIncrementer.Cranberries-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Cranberries} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Cranberries: itemIncrementer.Cranberries+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { Dill } alt = 'Dill' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Dill</span>
            <span className = 'price'>$2.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Dill: true});}}>
            {
              cartText.Dill ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Dill > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Dill: itemIncrementer.Dill-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Dill} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Dill: itemIncrementer.Dill+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
         
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { Fresh_Mint } alt = 'Fresh_Mint' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Fresh Mint</span>
            <span className = 'price'>$1.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Fresh_Mint: true});}}>
            {
              cartText.Fresh_Mint ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Fresh_Mint > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Fresh_Mint: itemIncrementer.Fresh_Mint-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Fresh_Mint} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Fresh_Mint: itemIncrementer.Fresh_Mint+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { Garlic } alt = 'Garlic' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Garlic</span>
            <span className = 'price'>$2.59</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Garlic: true});}}>
            {
              cartText.Garlic ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Garlic > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Garlic: itemIncrementer.Garlic-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Garlic} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Garlic: itemIncrementer.Garlic+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Great Value</span>
          <img src = { Great_Value_Fruit_Salad_With_Cherries } alt = 'Fruit Salad With Cherries' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Fruit Salad With Cherries</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Great_Value_Fruit_Salad_With_Cherries: true});}}>
            {
              cartText.Great_Value_Fruit_Salad_With_Cherries ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Great_Value_Fruit_Salad_With_Cherries > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Great_Value_Fruit_Salad_With_Cherries: itemIncrementer.Great_Value_Fruit_Salad_With_Cherries-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Great_Value_Fruit_Salad_With_Cherries} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Great_Value_Fruit_Salad_With_Cherries: itemIncrementer.Great_Value_Fruit_Salad_With_Cherries+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { Kale_Sweet_Salad } alt = 'Kale_Sweet_Salad' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Kale Sweet Salad</span>
            <span className = 'price'>$4.99</span>  
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Kale_Sweet_Salad: true});}}>
            {
              cartText.Kale_Sweet_Salad ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Kale_Sweet_Salad > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Kale_Sweet_Salad: itemIncrementer.Kale_Sweet_Salad-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Kale_Sweet_Salad} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Kale_Sweet_Salad: itemIncrementer.Kale_Sweet_Salad+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Your Fresh Market</span>
          <img src = { Lemon } alt = 'Lemon' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Lemon</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Lemon: true});}}>
            {
              cartText.Lemon ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Lemon > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Lemon: itemIncrementer.Lemon-1});                                                                          
                                                                                    } }> -</button>
                                      <span className = 'number'> {itemIncrementer.Lemon} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Lemon: itemIncrementer.Lemon+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { Lettuce_Butter } alt = 'Lettuce_Butter' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Lettuce Butter</span>
            <span className = 'price'>$4.49</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Lettuce_Butter: true});}}>
            {
              cartText.Lettuce_Butter ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Lettuce_Butter > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Lettuce_Butter: itemIncrementer.Lettuce_Butter-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Lettuce_Butter} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Lettuce_Butter: itemIncrementer.Lettuce_Butter+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { Mango_Red } alt = 'Mango_Red' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Mango Red</span>
            <span className = 'price'>$1.49</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Mango_Red: true});}}>
            {
              cartText.Mango_Red ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Mango_Red > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Mango_Red: itemIncrementer.Mango_Red-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Mango_Red} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Mango_Red: itemIncrementer.Mango_Red+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>President's Choice</span>
          <img src = { Organic_Brown_Bell_Pepper } alt = 'Organic_Brown_Bell_Pepper' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Organic Brown Bell Pepper</span>
            <span className = 'price'>$1.49</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Organic_Brown_Bell_Pepper: true});}}>
            {
              cartText.Organic_Brown_Bell_Pepper ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Organic_Brown_Bell_Pepper > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Organic_Brown_Bell_Pepper: itemIncrementer.Organic_Brown_Bell_Pepper-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Organic_Brown_Bell_Pepper} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Organic_Brown_Bell_Pepper: itemIncrementer.Organic_Brown_Bell_Pepper+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>President's Choice</span>
          <img src = { Organic_Cauliflower } alt = 'Organic_Cauliflower' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Organic Cauliflower 6 Pack</span>
            <span className = 'price'>$3.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Organic_Cauliflower: true});}}>
            {
              cartText.Organic_Cauliflower ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Organic_Cauliflower > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Organic_Cauliflower: itemIncrementer.Organic_Cauliflower-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Organic_Cauliflower} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Organic_Cauliflower: itemIncrementer.Organic_Cauliflower+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { Parsnip } alt = 'Parsnip' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Parsnip</span>
            <span className = 'price'>$1.49</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Parsnip: true});}}>
            {
              cartText.Parsnip ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Parsnip > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Parsnip: itemIncrementer.Parsnip-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Parsnip} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Parsnip: itemIncrementer.Parsnip+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Your Fresh Market</span>
          <img src = { Potatoes_Yellow } alt = 'Potatoes_Yellow' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Potatoes Yellow</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Potatoes_Yellow: true});}}>
            {
              cartText.Potatoes_Yellow ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Potatoes_Yellow > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Potatoes_Yellow: itemIncrementer.Potatoes_Yellow-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Potatoes_Yellow} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Potatoes_Yellow: itemIncrementer.Potatoes_Yellow+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>President's Choice</span>
          <img src = { Raspberries } alt = 'Raspberries' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Raspberries Original</span>
            <span className = 'price'>$3.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Raspberries: true});}}>
            {
              cartText.Raspberries ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Raspberries > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Raspberries: itemIncrementer.Raspberries-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Raspberries} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Raspberries: itemIncrementer.Raspberries+1}) }> + </button>                                    
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