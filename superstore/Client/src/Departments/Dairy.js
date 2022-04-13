import React, { useState } from 'react'
import '../css/Bakery.css'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";

import astro_balkan_style_yogurt750g from "../images/Dairy/astro_balkan_style_yogurt750g.png"
import beatrice_onePercent_milk from "../images/Dairy/beatrice_onePercent_milk.png"
import beatrice_twoPercent_milk from "../images/Dairy/beatrice_twoPercent_milk.png"
import beatrice_threePercent_milk from "../images/Dairy/beatrice_threePercent_milk.png"
import becel_margarine_original907g from "../images/Dairy/becel_margarine_original907g.png"
import lactantia_half_n_half_10percent from "../images/Dairy/lactantia_half_n_half_10percent.png"
import lactantia_whipping_cream35percent from "../images/Dairy/lactantia_whipping_cream35percent.png"
import large_eggs_12pack from "../images/Dairy/large_eggs_12pack.png"
import NN_pasteurized_cream_cheese from "../images/Dairy/NN_pasteurized_cream_cheese.png"
import NN_salted_butter from "../images/Dairy/NN_salted_butter.png"
import NN_sourCream_14percent_500ml from "../images/Dairy/NN_sourCream_14percent_500ml.png"
import NN_unsalted_butter454g from "../images/Dairy/NN_unsalted_butter454g.png"
import PC_free_run_brown_egg_large from "../images/Dairy/PC_free_run_brown_egg_large.png"
import saputo_mozzarellissima_500g from "../images/Dairy/saputo_mozzarellissima_500g.png"
import xlarge_eggs_12pack from "../images/Dairy/xlarge_eggs_12pack.png"

import Axios from 'axios';


export default function Dairy() {
  const initialBoolean = false;
  const initializeValues = {astro_balkan_style_yogurt750g:initialBoolean, beatrice_onePercent_milk:initialBoolean, beatrice_twoPercent_milk:initialBoolean, beatrice_threePercent_milk:initialBoolean, becel_margarine_original907g:initialBoolean, lactantia_half_n_half_10percent:initialBoolean, lactantia_whipping_cream35percent:initialBoolean, large_eggs_12pack:initialBoolean, NN_pasteurized_cream_cheese:initialBoolean, NN_salted_butter:initialBoolean, NN_sourCream_14percent_500ml:initialBoolean, NN_unsalted_butter454g:initialBoolean, PC_free_run_brown_egg_large:initialBoolean, saputo_mozzarellissima_500g:initialBoolean, xlarge_eggs_12pack:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const [showButton, setShowButton] = useState({showButton: false, showButton2: false});  
  const initializeNumber = {astro_balkan_style_yogurt750g:1, beatrice_onePercent_milk:1, beatrice_twoPercent_milk:1, beatrice_threePercent_milk:1, becel_margarine_original907g:1, lactantia_half_n_half_10percent:1, lactantia_whipping_cream35percent:1, large_eggs_12pack:1, NN_pasteurized_cream_cheese:1, NN_salted_butter:1, NN_sourCream_14percent_500ml:1, NN_unsalted_butter454g:1, PC_free_run_brown_egg_large:1, saputo_mozzarellissima_500g:1, xlarge_eggs_12pack:1};
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

  function addToCartListener(str, quantity, price) {
    console.log(str, quantity);
    Axios.post("http://localhost:3001/api/add_to_cart", {
      email: email,
      product_name: str, 
      quantity: quantity, 
      price: price
    }).then((res) => console.log(res.data))
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
        DAIRY
      </div>



      <div className='bigProducts__container'>
        <div className='item__container'>
          <span className = 'company_name'>Astro</span>
          <img src = { astro_balkan_style_yogurt750g } alt = 'balkan_style_yogurt750g' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Balkan Style Yogurt (750g)</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, astro_balkan_style_yogurt750g: true});}}>
            {
              cartText.astro_balkan_style_yogurt750g ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.astro_balkan_style_yogurt750g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, astro_balkan_style_yogurt750g: itemIncrementer.astro_balkan_style_yogurt750g-1});                                                                          
                                                                                      addToCartListener("Balkan Style Yogurt (750g)", itemIncrementer.astro_balkan_style_yogurt750g, 4.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.astro_balkan_style_yogurt750g} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, astro_balkan_style_yogurt750g: itemIncrementer.astro_balkan_style_yogurt750g+1}) 
                                                                                  addToCartListener("Balkan Style Yogurt (750g)", itemIncrementer.astro_balkan_style_yogurt750g, 4.99);}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>



        <div className='item__container'>
          <span className = 'company_name'>Beatrice</span>
          <img src = { beatrice_onePercent_milk } alt = 'Beatrice' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>1% milk (4L/1G)</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, beatrice_onePercent_milk: true});}}>
            {
              cartText.beatrice_onePercent_milk ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.beatrice_onePercent_milk > 0)
                                                                                      setItemIncrementer({...itemIncrementer, beatrice_onePercent_milk: itemIncrementer.beatrice_onePercent_milk-1}); 
                                                                                      addToCartListener("1% milk (4L/1G)", itemIncrementer.beatrice_onePercent_milk, 4.99);                                                                         
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.beatrice_onePercent_milk} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, beatrice_onePercent_milk: itemIncrementer.beatrice_onePercent_milk+1}) 
                                                                                  addToCartListener("1% milk (4L/1G)", itemIncrementer.beatrice_onePercent_milk, 4.99);  }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Beatrice</span>
          <img src = { beatrice_twoPercent_milk } alt = 'Beatrice' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>2% milk (4L/1G)</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, beatrice_twoPercent_milk: true});}}>
            {
              cartText.beatrice_twoPercent_milk ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.beatrice_twoPercent_milk > 0)
                                                                                      setItemIncrementer({...itemIncrementer, beatrice_twoPercent_milk: itemIncrementer.beatrice_twoPercent_milk-1}); 
                                                                                      addToCartListener("2% milk (4L/1G)", itemIncrementer.beatrice_twoPercent_milk, 4.99);                                                                           
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.beatrice_twoPercent_milk} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, beatrice_twoPercent_milk: itemIncrementer.beatrice_twoPercent_milk+1}) 
                                                                                  addToCartListener("2% milk (4L/1G)", itemIncrementer.beatrice_twoPercent_milk, 4.99);     }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
         
        <div className='item__container'>
          <span className = 'company_name'>Beatrice</span>
          <img src = { beatrice_threePercent_milk } alt = 'Beatrice' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>3% milk (4L/1G)</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, beatrice_threePercent_milk: true});}}>
            {
              cartText.beatrice_threePercent_milk ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.beatrice_threePercent_milk > 0)
                                                                                      setItemIncrementer({...itemIncrementer, beatrice_threePercent_milk: itemIncrementer.beatrice_threePercent_milk-1});
                                                                                      addToCartListener("3% milk (4L/1G)", itemIncrementer.beatrice_threePercent_milk, 4.99);                                                                               
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.beatrice_threePercent_milk} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, beatrice_threePercent_milk: itemIncrementer.beatrice_threePercent_milk+1}) 
                                                                                  addToCartListener("3% milk (4L/1G)", itemIncrementer.beatrice_threePercent_milk, 4.99);   }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Becel</span>
          <img src = { becel_margarine_original907g } alt = 'becel_margarine_original907g' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Margarine Original (907g)</span>
            <span className = 'price'>$6.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, becel_margarine_original907g: true});}}>
            {
              cartText.becel_margarine_original907g ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.becel_margarine_original907g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, becel_margarine_original907g: itemIncrementer.becel_margarine_original907g-1});  
                                                                                      addToCartListener("Margarine Original (907g)", itemIncrementer.becel_margarine_original907g, 6.99);                                                                           
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.becel_margarine_original907g} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, becel_margarine_original907g: itemIncrementer.becel_margarine_original907g+1}) 
                                                                                  addToCartListener("Margarine Original (907g)", itemIncrementer.becel_margarine_original907g, 6.99); }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Lactantia</span>
          <img src = { lactantia_half_n_half_10percent } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Half and Half - 10%</span>
            <span className = 'price'>$2.59</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, lactantia_half_n_half_10percent: true});}}>
            {
              cartText.lactantia_half_n_half_10percent ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.lactantia_half_n_half_10percent > 0)
                                                                                      setItemIncrementer({...itemIncrementer, lactantia_half_n_half_10percent: itemIncrementer.lactantia_half_n_half_10percent-1}); 
                                                                                      addToCartListener("Half and Half - 10%", itemIncrementer.lactantia_half_n_half_10percent, 2.59);                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.lactantia_half_n_half_10percent} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, lactantia_half_n_half_10percent: itemIncrementer.lactantia_half_n_half_10percent+1}) 
                                                                                  addToCartListener("Half and Half - 10%", itemIncrementer.lactantia_half_n_half_10percent, 2.59); }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Lactantia</span>
          <img src = { lactantia_whipping_cream35percent } alt = 'lactantia_whipping_cream35percent' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Whipping Cream - 35%</span>
            <span className = 'price'>$3.59</span>  
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, lactantia_whipping_cream35percent: true});}}>
            {
              cartText.lactantia_whipping_cream35percent ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.lactantia_whipping_cream35percent > 0)
                                                                                      setItemIncrementer({...itemIncrementer, lactantia_whipping_cream35percent: itemIncrementer.lactantia_whipping_cream35percent-1}); 
                                                                                      addToCartListener("Whipping Cream - 35%", itemIncrementer.lactantia_whipping_cream35percent, 3.59);                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.lactantia_whipping_cream35percent} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, lactantia_whipping_cream35percent: itemIncrementer.lactantia_whipping_cream35percent+1}) 
                                                                                  addToCartListener("Whipping Cream - 35%", itemIncrementer.lactantia_whipping_cream35percent, 3.59);   }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { large_eggs_12pack } alt = 'large_eggs_12pack' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Large Eggs (12-Pack)</span>
            <span className = 'price'>$3.19</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, large_eggs_12pack: true});}}>
            {
              cartText.large_eggs_12pack ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.large_eggs_12pack > 0)
                                                                                      setItemIncrementer({...itemIncrementer, large_eggs_12pack: itemIncrementer.large_eggs_12pack-1});
                                                                                      addToCartListener("Large Eggs (12-Pack)", itemIncrementer.large_eggs_12pack, 3.19);                                                                             
                                                                                    } }> -</button>
                                      <span className = 'number'> {itemIncrementer.large_eggs_12pack} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, large_eggs_12pack: itemIncrementer.large_eggs_12pack+1}) 
                                                                                  addToCartListener("Large Eggs (12-Pack)", itemIncrementer.large_eggs_12pack, 3.19); }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { NN_pasteurized_cream_cheese } alt = 'NN_pasteurized_cream_cheese' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Pasteurized Cream Cheese</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, NN_pasteurized_cream_cheese: true});}}>
            {
              cartText.NN_pasteurized_cream_cheese ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.NN_pasteurized_cream_cheese > 0)
                                                                                      setItemIncrementer({...itemIncrementer, NN_pasteurized_cream_cheese: itemIncrementer.NN_pasteurized_cream_cheese-1}); 
                                                                                      addToCartListener("Pasteurized Cream Cheese", itemIncrementer.NN_pasteurized_cream_cheese, 4.99);                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.NN_pasteurized_cream_cheese} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, NN_pasteurized_cream_cheese: itemIncrementer.NN_pasteurized_cream_cheese+1})  
                                                                                  addToCartListener("Pasteurized Cream Cheese", itemIncrementer.NN_pasteurized_cream_cheese, 4.99);     }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { NN_salted_butter } alt = 'NN_salted_butter' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Salted Butter</span>
            <span className = 'price'>$2.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, NN_salted_butter: true});}}>
            {
              cartText.NN_salted_butter ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.NN_salted_butter > 0)
                                                                                      setItemIncrementer({...itemIncrementer, NN_salted_butter: itemIncrementer.NN_salted_butter-1});  
                                                                                      addToCartListener("Salted Butter", itemIncrementer.NN_salted_butter, 2.99);                                                                             
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.NN_salted_butter} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, NN_salted_butter: itemIncrementer.NN_salted_butter+1}) 
                                                                                  addToCartListener("Salted Butter", itemIncrementer.NN_salted_butter, 2.99);  }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { NN_sourCream_14percent_500ml } alt = 'NN_sourCream_14percent_500ml' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Sour Cream 14% (500ml)</span>
            <span className = 'price'>$3.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, NN_sourCream_14percent_500ml: true});}}>
            {
              cartText.NN_sourCream_14percent_500ml ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.NN_sourCream_14percent_500ml > 0)
                                                                                      setItemIncrementer({...itemIncrementer, NN_sourCream_14percent_500ml: itemIncrementer.NN_sourCream_14percent_500ml-1});
                                                                                      addToCartListener("Sour Cream 14% (500ml)", itemIncrementer.NN_sourCream_14percent_500ml, 3.99);                                                                            
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.NN_sourCream_14percent_500ml} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, NN_sourCream_14percent_500ml: itemIncrementer.NN_sourCream_14percent_500ml+1}) 
                                                                                  addToCartListener("Sour Cream 14% (500ml)", itemIncrementer.NN_sourCream_14percent_500ml, 3.99);  }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { NN_unsalted_butter454g } alt = 'NN_unsalted_butter454g' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Unsalted Butter</span>
            <span className = 'price'>$2.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, NN_unsalted_butter454g: true});}}>
            {
              cartText.NN_unsalted_butter454g ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.NN_unsalted_butter454g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, NN_unsalted_butter454g: itemIncrementer.NN_unsalted_butter454g-1});   
                                                                                      addToCartListener("Unsalted Butter", itemIncrementer.NN_unsalted_butter454g, 2.99);                                                                         
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.NN_unsalted_butter454g} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, NN_unsalted_butter454g: itemIncrementer.NN_unsalted_butter454g+1}) 
                                                                                  addToCartListener("Unsalted Butter", itemIncrementer.NN_unsalted_butter454g, 2.99);      }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { PC_free_run_brown_egg_large } alt = 'PC_free_run_brown_egg_large' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Free Run Brown Egg Large (12-pack)</span>
            <span className = 'price'>$4.59</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, PC_free_run_brown_egg_large: true});}}>
            {
              cartText.PC_free_run_brown_egg_large ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.PC_free_run_brown_egg_large > 0)
                                                                                      setItemIncrementer({...itemIncrementer, PC_free_run_brown_egg_large: itemIncrementer.PC_free_run_brown_egg_large-1}); 
                                                                                      addToCartListener("Free Run Brown Egg Large (12-pack)", itemIncrementer.PC_free_run_brown_egg_large, 4.59);                                                                               
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.PC_free_run_brown_egg_large} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, PC_free_run_brown_egg_large: itemIncrementer.PC_free_run_brown_egg_large+1}) 
                                                                                  addToCartListener("Free Run Brown Egg Large (12-pack)", itemIncrementer.PC_free_run_brown_egg_large, 4.59);}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Saputo</span>
          <img src = { saputo_mozzarellissima_500g } alt = 'saputo_mozzarellissima_500g' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Mozzarellissima (500g)</span>
            <span className = 'price'>$11.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, saputo_mozzarellissima_500g: true});}}>
            {
              cartText.saputo_mozzarellissima_500g ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.saputo_mozzarellissima_500g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, saputo_mozzarellissima_500g: itemIncrementer.saputo_mozzarellissima_500g-1}); 
                                                                                      addToCartListener("Mozzarellissima (500g)", itemIncrementer.saputo_mozzarellissima_500g, 11.99);                                                                         
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.saputo_mozzarellissima_500g} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, saputo_mozzarellissima_500g: itemIncrementer.saputo_mozzarellissima_500g+1}) 
                                                                                  addToCartListener("Mozzarellissima (500g)", itemIncrementer.saputo_mozzarellissima_500g, 11.99);   }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { xlarge_eggs_12pack } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>X-Large Eggs (12-pack)</span>
            <span className = 'price'>$3.59</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, xlarge_eggs_12pack: true});}}>
            {
              cartText.xlarge_eggs_12pack ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.xlarge_eggs_12pack > 0)
                                                                                      setItemIncrementer({...itemIncrementer, xlarge_eggs_12pack: itemIncrementer.xlarge_eggs_12pack-1}); 
                                                                                      addToCartListener("X-Large Eggs (12-pack)", itemIncrementer.xlarge_eggs_12pack, 3.59);                                                                            
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.xlarge_eggs_12pack} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, xlarge_eggs_12pack: itemIncrementer.xlarge_eggs_12pack+1}) 
                                                                                  addToCartListener("X-Large Eggs (12-pack)", itemIncrementer.xlarge_eggs_12pack, 3.59);  }}> + </button>                                    
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