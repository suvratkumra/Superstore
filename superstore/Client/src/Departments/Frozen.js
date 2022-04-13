import React, { useState } from 'react'
import '../css/Bakery.css'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";

import mccain_frenchFriedPotatoes from "../images/Frozen/mccain_frenchFriedPotatoes.png"
import michelina_macNCheese from "../images/Frozen/michelina_macNCheese.png"
import NN_chopped_spinach300g from "../images/Frozen/NN_chopped_spinach300g.png"
import NN_crinkleCut_FriedPotatoes from "../images/Frozen/NN_crinkleCut_FriedPotatoes.png"
import NN_friedPotatoes_Crispy_SkinOn from "../images/Frozen/NN_friedPotatoes_Crispy_SkinOn.png"
import NN_green_peas750g from "../images/Frozen/NN_green_peas750g.png"
import NN_mixed_vegatables750g from "../images/Frozen/NN_mixed_vegatables750g.png"
import NN_mixed_vegatables2000g from "../images/Frozen/NN_mixed_vegatables2000g.png"
import NN_peas_carrots750g from "../images/Frozen/NN_peas_carrots750g.png"
import NN_potato_patties20ea from "../images/Frozen/NN_potato_patties20ea.png"
import NN_whole_kernel_corns750g from "../images/Frozen/NN_whole_kernel_corns750g.png"
import PC_broccoli_florets500g from "../images/Frozen/PC_broccoli_florets500g.png"
import PC_mango_chunks600g from "../images/Frozen/PC_mango_chunks600g.png"
import PC_pacific_white_shrimp_raw_peeled from "../images/Frozen/PC_pacific_white_shrimp_raw_peeled.png"
import PC_sliced_strawberries600g from "../images/Frozen/PC_sliced_strawberries600g.png"

import Axios from 'axios';

export default function Frozen() {
  const initialBoolean = false;
  const initializeValues = {mccain_frenchFriedPotatoes:initialBoolean, michelina_macNCheese:initialBoolean, NN_chopped_spinach300g:initialBoolean, NN_crinkleCut_FriedPotatoes:initialBoolean, NN_friedPotatoes_Crispy_SkinOn:initialBoolean, NN_green_peas750g:initialBoolean, NN_mixed_vegatables750g:initialBoolean, NN_mixed_vegatables2000g:initialBoolean, NN_peas_carrots750g:initialBoolean, NN_potato_patties20ea:initialBoolean, NN_whole_kernel_corns750g:initialBoolean, PC_broccoli_florets500g :initialBoolean, PC_mango_chunks600g:initialBoolean, PC_pacific_white_shrimp_raw_peeled:initialBoolean, naan:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const [showButton, setShowButton] = useState({showButton: false, showButton2: false});  
  const initializeNumber = {mccain_frenchFriedPotatoes:1, michelina_macNCheese:1, NN_chopped_spinach300g:1, NN_crinkleCut_FriedPotatoes:1, NN_friedPotatoes_Crispy_SkinOn:1, NN_green_peas750g:1, NN_mixed_vegatables750g:1, NN_mixed_vegatables2000g:1, NN_peas_carrots750g:1, NN_potato_patties20ea:1, NN_whole_kernel_corns750g:1, PC_broccoli_florets500g :1, PC_mango_chunks600g:1, PC_pacific_white_shrimp_raw_peeled:1, PC_sliced_strawberries600g:1};
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
        FROZEN
      </div>



      <div className='bigProducts__container'>
        <div className='item__container'>
          <span className = 'company_name'>McCain</span>
          <img src = { mccain_frenchFriedPotatoes } alt = 'mccain_frenchFriedPotatoes' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>French Fried Potatoes</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, mccain_frenchFriedPotatoes: true});}}>
            {
              cartText.mccain_frenchFriedPotatoes ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.mccain_frenchFriedPotatoes > 0)
                                                                                      setItemIncrementer({...itemIncrementer, mccain_frenchFriedPotatoes: itemIncrementer.mccain_frenchFriedPotatoes-1});                                                                          
                                                                                      addToCartListener("French Fried Potatoes", itemIncrementer.mccain_frenchFriedPotatoes, 4.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.mccain_frenchFriedPotatoes} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, mccain_frenchFriedPotatoes: itemIncrementer.mccain_frenchFriedPotatoes+1}) 
                                                                                  addToCartListener("French Fried Potatoes", itemIncrementer.mccain_frenchFriedPotatoes, 4.99);}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>



        <div className='item__container'>
          <span className = 'company_name'>Michelina</span>
          <img src = { michelina_macNCheese } alt = 'michelina_macNCheese' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Macarroni and Cheese</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, michelina_macNCheese: true});}}>
            {
              cartText.michelina_macNCheese ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.michelina_macNCheese > 0)
                                                                                      setItemIncrementer({...itemIncrementer, michelina_macNCheese: itemIncrementer.michelina_macNCheese-1}); 
                                                                                      addToCartListener("Macarroni and Cheese", itemIncrementer.michelina_macNCheese, 5.99);                                                                         
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.michelina_macNCheese} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, michelina_macNCheese: itemIncrementer.michelina_macNCheese+1}) 
                                                                                  addToCartListener("Macarroni and Cheese", itemIncrementer.michelina_macNCheese, 5.99);   }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { NN_chopped_spinach300g } alt = 'NN_chopped_spinach300g' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Chopped Spinach (300g)</span>
            <span className = 'price'>$3.49</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, NN_chopped_spinach300g: true});}}>
            {
              cartText.NN_chopped_spinach300g ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.NN_chopped_spinach300g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, NN_chopped_spinach300g: itemIncrementer.NN_chopped_spinach300g-1});
                                                                                      addToCartListener("Chopped Spinach (300g)", itemIncrementer.NN_chopped_spinach300g, 3.49);                                                                            
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.NN_chopped_spinach300g} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, NN_chopped_spinach300g: itemIncrementer.NN_chopped_spinach300g+1}) 
                                                                                  addToCartListener("Chopped Spinach (300g)", itemIncrementer.NN_chopped_spinach300g, 3.49);}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
         
        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { NN_crinkleCut_FriedPotatoes } alt = 'NN_crinkleCut_FriedPotatoes' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Crinkle Cut Fried Potatoes</span>
            <span className = 'price'>$5.49</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, NN_crinkleCut_FriedPotatoes: true});}}>
            {
              cartText.NN_crinkleCut_FriedPotatoes ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.NN_chopped_spinach300g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, NN_crinkleCut_FriedPotatoes: itemIncrementer.NN_crinkleCut_FriedPotatoes-1}); 
                                                                                      addToCartListener("Crinkle Cut Fried Potatoes", itemIncrementer.NN_crinkleCut_FriedPotatoes, 5.49);                                                                         
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.NN_crinkleCut_FriedPotatoes} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, NN_crinkleCut_FriedPotatoes: itemIncrementer.NN_crinkleCut_FriedPotatoes+1}) 
                                                                                  addToCartListener("Crinkle Cut Fried Potatoes", itemIncrementer.NN_crinkleCut_FriedPotatoes, 5.49);    }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { NN_friedPotatoes_Crispy_SkinOn } alt = 'NN_friedPotatoes_Crispy_SkinOn' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Fried Potatoes Crispy with Skin-On</span>
            <span className = 'price'>$5.49</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, NN_friedPotatoes_Crispy_SkinOn: true});}}>
            {
              cartText.NN_friedPotatoes_Crispy_SkinOn ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.NN_friedPotatoes_Crispy_SkinOn > 0)
                                                                                      setItemIncrementer({...itemIncrementer, NN_friedPotatoes_Crispy_SkinOn: itemIncrementer.NN_friedPotatoes_Crispy_SkinOn-1});   
                                                                                      addToCartListener("Fried Potatoes Crispy with Skin-On", itemIncrementer.NN_friedPotatoes_Crispy_SkinOn, 5.49);                                                                           
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.NN_friedPotatoes_Crispy_SkinOn} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, NN_friedPotatoes_Crispy_SkinOn: itemIncrementer.NN_friedPotatoes_Crispy_SkinOn+1}) 
                                                                                  addToCartListener("Fried Potatoes Crispy with Skin-On", itemIncrementer.NN_friedPotatoes_Crispy_SkinOn, 5.49); }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { NN_green_peas750g } alt = 'NN_green_peas750g' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Green Peas (750g)</span>
            <span className = 'price'>$3.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, NN_green_peas750g: true});}}>
            {
              cartText.NN_green_peas750g ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.NN_green_peas750g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, NN_green_peas750g: itemIncrementer.NN_green_peas750g-1});    
                                                                                      addToCartListener("Green Peas (750g)", itemIncrementer.NN_green_peas750g, 3.99);                                                                       
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.NN_green_peas750g} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, NN_green_peas750g: itemIncrementer.NN_green_peas750g+1}) 
                                                                                  addToCartListener("Green Peas (750g)", itemIncrementer.NN_green_peas750g, 3.99); }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { NN_mixed_vegatables750g } alt = 'NN_mixed_vegatables750g' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Mixed Vegetables (750g)</span>
            <span className = 'price'>$3.99</span>  
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, NN_mixed_vegatables750g: true});}}>
            {
              cartText.NN_mixed_vegatables750g ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.NN_mixed_vegatables750g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, NN_mixed_vegatables750g: itemIncrementer.NN_mixed_vegatables750g-1});  
                                                                                      addToCartListener("Mixed Vegetables (750g)", itemIncrementer.NN_mixed_vegatables750g, 3.99);                                                                         
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.NN_mixed_vegatables750g} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, NN_mixed_vegatables750g: itemIncrementer.NN_mixed_vegatables750g+1}) 
                                                                                  addToCartListener("Mixed Vegetables (750g)", itemIncrementer.NN_mixed_vegatables750g, 3.99); }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { NN_mixed_vegatables2000g } alt = 'NN_mixed_vegatables2000g' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Mixed Vegetables (2kg)</span>
            <span className = 'price'>$7.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, NN_mixed_vegatables2000g: true});}}>
            {
              cartText.NN_mixed_vegatables2000g ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.NN_mixed_vegatables2000g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, NN_mixed_vegatables2000g: itemIncrementer.NN_mixed_vegatables2000g-1});    
                                                                                      addToCartListener("Mixed Vegetables (2kg)", itemIncrementer.NN_mixed_vegatables2000g, 7.99);                                                                       
                                                                                    } }> -</button>
                                      <span className = 'number'> {itemIncrementer.NN_mixed_vegatables2000g} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, NN_mixed_vegatables2000g: itemIncrementer.NN_mixed_vegatables2000g+1}) 
                                                                                  addToCartListener("Mixed Vegetables (2kg)", itemIncrementer.NN_mixed_vegatables2000g, 7.99);}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { NN_peas_carrots750g } alt = 'NN_peas_carrots750gPicture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Peas And Carrots (750g)</span>
            <span className = 'price'>$3.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, NN_peas_carrots750g: true});}}>
            {
              cartText.NN_peas_carrots750g ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.NN_peas_carrots750g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, NN_peas_carrots750g: itemIncrementer.NN_peas_carrots750g-1}); 
                                                                                      addToCartListener("Peas And Carrots (750g)", itemIncrementer.NN_peas_carrots750g, 3.99);                                                                         
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.NN_peas_carrots750g} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, NN_peas_carrots750g: itemIncrementer.NN_peas_carrots750g+1}) 
                                                                                  addToCartListener("Peas And Carrots (750g)", itemIncrementer.NN_peas_carrots750g, 3.99);  }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { NN_potato_patties20ea } alt = 'NN_potato_patties20ea' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Potato Patties (20EA)</span>
            <span className = 'price'>$16.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, NN_potato_patties20ea: true});}}>
            {
              cartText.NN_potato_patties20ea ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.NN_potato_patties20ea > 0)
                                                                                      setItemIncrementer({...itemIncrementer, NN_potato_patties20ea: itemIncrementer.NN_potato_patties20ea-1});                                                                          
                                                                                      addToCartListener("Potato Patties (20EA)", itemIncrementer.NN_potato_patties20ea, 16.99);  
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.NN_potato_patties20ea} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, NN_potato_patties20ea: itemIncrementer.NN_potato_patties20ea+1}) 
                                                                                    addToCartListener("Potato Patties (20EA)", itemIncrementer.NN_potato_patties20ea, 16.99); }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { NN_whole_kernel_corns750g } alt = 'NN_whole_kernel_corns750g' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Whole Kernel Crons (750g)</span>
            <span className = 'price'>$2.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, NN_whole_kernel_corns750g: true});}}>
            {
              cartText.NN_whole_kernel_corns750g ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.NN_whole_kernel_corns750g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, NN_whole_kernel_corns750g: itemIncrementer.NN_whole_kernel_corns750g-1}); 
                                                                                      addToCartListener("Whole Kernel Crons (750g)", itemIncrementer.NN_whole_kernel_corns750g, 2.99);                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.NN_whole_kernel_corns750g} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, NN_whole_kernel_corns750g: itemIncrementer.NN_whole_kernel_corns750g+1}) 
                                                                                  addToCartListener("Whole Kernel Crons (750g)", itemIncrementer.NN_whole_kernel_corns750g, 2.99); }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>President's Choice</span>
          <img src = { PC_broccoli_florets500g } alt = 'PC_broccoli_florets500g' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Brocolli Florets (500g)</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, PC_broccoli_florets500g : true});}}>
            {
              cartText.PC_broccoli_florets500g  ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.PC_broccoli_florets500g  > 0)
                                                                                      setItemIncrementer({...itemIncrementer, PC_broccoli_florets500g : itemIncrementer.PC_broccoli_florets500g -1});
                                                                                      addToCartListener("Brocolli Florets (500g)", itemIncrementer.PC_broccoli_florets500g, 4.99);                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.PC_broccoli_florets500g } </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, PC_broccoli_florets500g : itemIncrementer.PC_broccoli_florets500g +1}) 
                                                                                  addToCartListener("Brocolli Florets (500g)", itemIncrementer.PC_broccoli_florets500g, 4.99);  }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>President's Choice</span>
          <img src = { PC_mango_chunks600g } alt = 'PC_mango_chunks600g' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Mango Chunks (600g)</span>
            <span className = 'price'>$6.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, PC_mango_chunks600g: true});}}>
            {
              cartText.PC_mango_chunks600g ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.PC_mango_chunks600g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, PC_mango_chunks600g: itemIncrementer.PC_mango_chunks600g-1}); 
                                                                                      addToCartListener("Mango Chunks (600g)", itemIncrementer.PC_mango_chunks600g, 6.99);                                                                           
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.PC_mango_chunks600g} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, PC_mango_chunks600g: itemIncrementer.PC_mango_chunks600g+1}) 
                                                                                  addToCartListener("Mango Chunks (600g)", itemIncrementer.PC_mango_chunks600g, 6.99); }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>President's Choice</span>
          <img src = { PC_pacific_white_shrimp_raw_peeled } alt = 'PC_pacific_white_shrimp_raw_peeled' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Pacific White Shrimp Raw Peeled</span>
            <span className = 'price'>$15.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, PC_pacific_white_shrimp_raw_peeled: true});}}>
            {
              cartText.PC_pacific_white_shrimp_raw_peeled ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.PC_pacific_white_shrimp_raw_peeled > 0)
                                                                                      setItemIncrementer({...itemIncrementer, PC_pacific_white_shrimp_raw_peeled: itemIncrementer.PC_pacific_white_shrimp_raw_peeled-1});                                                                          
                                                                                      addToCartListener("Pacific White Shrimp Raw Peeled", itemIncrementer.PC_pacific_white_shrimp_raw_peeled, 15.99); 
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.PC_pacific_white_shrimp_raw_peeled} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, PC_pacific_white_shrimp_raw_peeled: itemIncrementer.PC_pacific_white_shrimp_raw_peeled+1}) 
                                                                                  addToCartListener("Pacific White Shrimp Raw Peeled", itemIncrementer.PC_pacific_white_shrimp_raw_peeled, 15.99); }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>President's Choice</span>
          <img src = { PC_sliced_strawberries600g } alt = 'PC_sliced_strawberries600g' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Sliced Strawberries (600g)</span>
            <span className = 'price'>$10.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, PC_sliced_strawberries600g: true});}}>
            {
              cartText.naan ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.PC_sliced_strawberries600g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, PC_sliced_strawberries600g: itemIncrementer.PC_sliced_strawberries600g-1});                                                                          
                                                                                      addToCartListener("Sliced Strawberries (600g)", itemIncrementer.PC_sliced_strawberries600g, 10.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.PC_sliced_strawberries600g} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, PC_sliced_strawberries600g: itemIncrementer.PC_sliced_strawberries600g+1}) 
                                                                                  addToCartListener("Sliced Strawberries (600g)", itemIncrementer.PC_sliced_strawberries600g, 10.99);}}> + </button>                                    
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