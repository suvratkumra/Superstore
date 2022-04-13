import React, { useState } from 'react'
import '../css/Bakery.css'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";

import Annies_Organic_Berry_Fruit_Snacks from "../images/Snacks/Annies_Organic_Berry_Fruit_Snacks.png"
import BettyCrocker_Fruit_By_The_Foot from "../images/Snacks/BettyCrocker_Fruit_By_The_Foot.png"
import Christie_Chips_Ahoy_Mini from "../images/Snacks/Christie_Chips_Ahoy_Mini.png"
import Christie_Oreo_Mini_Snack_Pack from "../images/Snacks/Christie_Oreo_Mini_Snack_Pack.png"
import Crispers_Original_Snacks from "../images/Snacks/Crispers_Original_Snacks.png"
import Hersheys_CookiesNCreme_Snack_Size_Candy from "../images/Snacks/Hersheys_CookiesNCreme_Snack_Size_Candy.png"
import Kelloggs_MultiGrain_Cereal_Bars_Apple from "../images/Snacks/Kelloggs_MultiGrain_Cereal_Bars_Apple.png"
import Nestle_KitKat_Hide_Me_Eggs from "../images/Snacks/Nestle_KitKat_Hide_Me_Eggs.png"
import NN_Pretzel_Sticks from "../images/Snacks/NN_Pretzel_Sticks.png"
import OhHenry_Snack_Size_Candy120g from "../images/Snacks/OhHenry_Snack_Size_Candy120g.png"
import PC_Peanut_Butter_Filled_Pretzels from "../images/Snacks/PC_Peanut_Butter_Filled_Pretzels.png"
import Starburst_Original_Minis191g from "../images/Snacks/Starburst_Original_Minis191g.png"
import Sunmaid_Yogurt_Raisins_Vanilla from "../images/Snacks/Sunmaid_Yogurt_Raisins_Vanilla.png"
import TheSnackFactory_Pretzel_Crisps_Original from "../images/Snacks/TheSnackFactory_Pretzel_Crisps_Original.png"
import Axios from 'axios';



export default function Snacks() {
  const initialBoolean = false;
  const initializeValues = {Annies_Organic_Berry_Fruit_Snacks:initialBoolean, BettyCrocker_Fruit_By_The_Foot:initialBoolean, Christie_Chips_Ahoy_Mini:initialBoolean, Christie_Oreo_Mini_Snack_Pack:initialBoolean, Crispers_Original_Snacks:initialBoolean, Hersheys_CookiesNCreme_Snack_Size_Candy:initialBoolean, Kelloggs_MultiGrain_Cereal_Bars_Apple:initialBoolean, Nestle_KitKat_Hide_Me_Eggs:initialBoolean, Nestle_KitKat_Hide_Me_Eggs_Blue:initialBoolean, OhHenry_Snack_Size_Candy120g:initialBoolean, PC_Peanut_Butter_Filled_Pretzels:initialBoolean, Starburst_Original_Minis191g:initialBoolean, Sunmaid_Yogurt_Raisins_Vanilla:initialBoolean, TheSnackFactory_Pretzel_Crisps_Original:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const [showButton, setShowButton] = useState({showButton: false, showButton2: false});  
  const initializeNumber = {Annies_Organic_Berry_Fruit_Snacks:0, BettyCrocker_Fruit_By_The_Foot:0, Christie_Chips_Ahoy_Mini:0, Christie_Oreo_Mini_Snack_Pack:0, Crispers_Original_Snacks:0, Hersheys_CookiesNCreme_Snack_Size_Candy:0, Kelloggs_MultiGrain_Cereal_Bars_Apple:0, Nestle_KitKat_Hide_Me_Eggs:0, NN_Pretzel_Sticks:0, OhHenry_Snack_Size_Candy120g:0, PC_Peanut_Butter_Filled_Pretzels:0, Starburst_Original_Minis191g:0, Sunmaid_Yogurt_Raisins_Vanilla:0, TheSnackFactory_Pretzel_Crisps_Original:0};
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
        SNACKS AND CANDY
      </div>



      <div className='bigProducts__container'>
        <div className='item__container'>
          <span className = 'company_name'>Annies</span>
          <img src = { Annies_Organic_Berry_Fruit_Snacks } alt = 'Annies_Organic_Berry_Fruit_Snacks' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Organic Berry Fruit Snacks</span>
            <span className = 'price'>$2.19</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Annies_Organic_Berry_Fruit_Snacks: true});}}>
            {
              cartText.Annies_Organic_Berry_Fruit_Snacks ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Annies_Organic_Berry_Fruit_Snacks > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Annies_Organic_Berry_Fruit_Snacks: itemIncrementer.Annies_Organic_Berry_Fruit_Snacks-1});                                                                          
                                                                                      addToCartListener("Organic Berry Fruit Snacks", itemIncrementer.Annies_Organic_Berry_Fruit_Snacks, 2.19);
                                                                                      } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Annies_Organic_Berry_Fruit_Snacks} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Annies_Organic_Berry_Fruit_Snacks: itemIncrementer.Annies_Organic_Berry_Fruit_Snacks+1});
                                                                                 addToCartListener("Organic Berry Fruit Snacks", itemIncrementer.Annies_Organic_Berry_Fruit_Snacks, 2.19);
                                      }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>



        <div className='item__container'>
          <span className = 'company_name'>Betty Crocker</span>
          <img src = { BettyCrocker_Fruit_By_The_Foot } alt = 'BettyCrocker_Fruit_By_The_Foot' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Fruit By The Foot</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, BettyCrocker_Fruit_By_The_Foot: true});}}>
            {
              cartText.BettyCrocker_Fruit_By_The_Foot ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.BettyCrocker_Fruit_By_The_Foot > 0)
                                                                                      setItemIncrementer({...itemIncrementer, BettyCrocker_Fruit_By_The_Foot: itemIncrementer.BettyCrocker_Fruit_By_The_Foot-1});                                                                          
                                                                                      addToCartListener("Fruit By The Foot", itemIncrementer.BettyCrocker_Fruit_By_The_Foot, 4.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.BettyCrocker_Fruit_By_The_Foot} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, BettyCrocker_Fruit_By_The_Foot: itemIncrementer.BettyCrocker_Fruit_By_The_Foot+1});
                                                                                  addToCartListener("Fruit By The Foot", itemIncrementer.BettyCrocker_Fruit_By_The_Foot, 4.99);
                                      }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Christie</span>
          <img src = { Christie_Chips_Ahoy_Mini } alt = 'Christie_Chips_Ahoy_Mini' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Chips Ahoy Mini</span>
            <span className = 'price'>$6.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Christie_Chips_Ahoy_Mini: true});}}>
            {
              cartText.Christie_Chips_Ahoy_Mini ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Christie_Chips_Ahoy_Mini > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Christie_Chips_Ahoy_Mini: itemIncrementer.Christie_Chips_Ahoy_Mini-1});                                                                          
                                                                                      addToCartListener("Chips Ahoy Mini", itemIncrementer.Christie_Chips_Ahoy_Mini, 6.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Christie_Chips_Ahoy_Mini} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Christie_Chips_Ahoy_Mini: itemIncrementer.Christie_Chips_Ahoy_Mini+1});
                                                                                                                            addToCartListener("Chips Ahoy Mini", itemIncrementer.Christie_Chips_Ahoy_Mini, 6.99);
                                      }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
         
        <div className='item__container'>
          <span className = 'company_name'>Christie</span>
          <img src = { Christie_Oreo_Mini_Snack_Pack } alt = 'Christie_Oreo_Mini_Snack_Pack' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Oreo Mini Snack Pack</span>
            <span className = 'price'>$6.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Christie_Oreo_Mini_Snack_Pack: true});}}>
            {
              cartText.Christie_Oreo_Mini_Snack_Pack ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Christie_Oreo_Mini_Snack_Pack > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Christie_Oreo_Mini_Snack_Pack: itemIncrementer.Christie_Oreo_Mini_Snack_Pack-1});                                                                          
                                                                                      addToCartListener("Oreo Mini Snack Pack", itemIncrementer.Christie_Oreo_Mini_Snack_Pack, 6.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Christie_Oreo_Mini_Snack_Pack} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Christie_Oreo_Mini_Snack_Pack: itemIncrementer.Christie_Oreo_Mini_Snack_Pack+1});
                                                                                  addToCartListener("Oreo Mini Snack Pack", itemIncrementer.Christie_Oreo_Mini_Snack_Pack, 6.99);
                                      }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Crispers</span>
          <img src = { Crispers_Original_Snacks } alt = 'Crispers_Original_Snacks' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Original Snacks</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Crispers_Original_Snacks: true});}}>
            {
              cartText.Crispers_Original_Snacks ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Crispers_Original_Snacks > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Crispers_Original_Snacks: itemIncrementer.Crispers_Original_Snacks-1});                                                                          
                                                                                      addToCartListener("Original Snacks", itemIncrementer.Crispers_Original_Snacks, 4.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Crispers_Original_Snacks} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Crispers_Original_Snacks: itemIncrementer.Crispers_Original_Snacks+1});
                                                                                  addToCartListener("Original Snacks", itemIncrementer.Crispers_Original_Snacks, 4.99);
                                      }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        
        
        <div className='item__container'>
          <span className = 'company_name'>Hershey's</span>
          <img src = { Hersheys_CookiesNCreme_Snack_Size_Candy } alt = 'Hersheys_CookiesNCreme_Snack_Size_Candy' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Cookies'N'Creme Snack Size Candy</span>
            <span className = 'price'>$3.59</span>  
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Hersheys_CookiesNCreme_Snack_Size_Candy: true});}}>
            {
              cartText.Hersheys_CookiesNCreme_Snack_Size_Candy ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Hersheys_CookiesNCreme_Snack_Size_Candy > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Hersheys_CookiesNCreme_Snack_Size_Candy: itemIncrementer.Hersheys_CookiesNCreme_Snack_Size_Candy-1});                                                                          
                                                                                      addToCartListener("Cookies'N'Creme Snack Size Candy", itemIncrementer.Hersheys_CookiesNCreme_Snack_Size_Candy, 3.59);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Hersheys_CookiesNCreme_Snack_Size_Candy} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Hersheys_CookiesNCreme_Snack_Size_Candy: itemIncrementer.Hersheys_CookiesNCreme_Snack_Size_Candy+1});
                                                                                                                            addToCartListener("Cookies'N'Creme Snack Size Candy", itemIncrementer.Hersheys_CookiesNCreme_Snack_Size_Candy, 3.59);
                                      }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Kelloggs'</span>
          <img src = { Kelloggs_MultiGrain_Cereal_Bars_Apple } alt = 'Kelloggs_MultiGrain_Cereal_Bars_Apple' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>MultiGrain Cereal Bars Apple</span>
            <span className = 'price'>$8.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Kelloggs_MultiGrain_Cereal_Bars_Apple: true});}}>
            {
              cartText.Kelloggs_MultiGrain_Cereal_Bars_Apple ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Kelloggs_MultiGrain_Cereal_Bars_Apple > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Kelloggs_MultiGrain_Cereal_Bars_Apple: itemIncrementer.Kelloggs_MultiGrain_Cereal_Bars_Apple-1});                                                                          
                                                                                      addToCartListener("MultiGrain Cereal Bars Apple", itemIncrementer.Kelloggs_MultiGrain_Cereal_Bars_Apple, 8.99);
                                                                                       } }> -</button>
                                      <span className = 'number'> {itemIncrementer.Kelloggs_MultiGrain_Cereal_Bars_Apple} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Kelloggs_MultiGrain_Cereal_Bars_Apple: itemIncrementer.Kelloggs_MultiGrain_Cereal_Bars_Apple+1});
                                                                                  addToCartListener("MultiGrain Cereal Bars Apple", itemIncrementer.Kelloggs_MultiGrain_Cereal_Bars_Apple, 8.99);
                                      }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Nestle</span>
          <img src = { Nestle_KitKat_Hide_Me_Eggs } alt = 'Nestle_KitKat_Hide_Me_Eggs' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>KitKat Hide Me Eggs</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Nestle_KitKat_Hide_Me_Eggs: true});}}>
            {
              cartText.Nestle_KitKat_Hide_Me_Eggs ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Nestle_KitKat_Hide_Me_Eggs > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Nestle_KitKat_Hide_Me_Eggs: itemIncrementer.Nestle_KitKat_Hide_Me_Eggs-1});                                                                          
                                                                                      addToCartListener("KitKat Hide Me Eggs", itemIncrementer.Nestle_KitKat_Hide_Me_Eggs, 5.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Nestle_KitKat_Hide_Me_Eggs} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Nestle_KitKat_Hide_Me_Eggs: itemIncrementer.Nestle_KitKat_Hide_Me_Eggs+1});
                                                            addToCartListener("KitKat Hide Me Eggs", itemIncrementer.Nestle_KitKat_Hide_Me_Eggs, 5.99); }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>No Name</span>
          <img src = { NN_Pretzel_Sticks } alt = 'NN_Pretzel_Sticks' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Pretzel Sticks</span>
            <span className = 'price'>$3.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, NN_Pretzel_Sticks: true});}}>
            {
              cartText.NN_Pretzel_Sticks ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.NN_Pretzel_Sticks > 0)
                                                                                      setItemIncrementer({...itemIncrementer, NN_Pretzel_Sticks: itemIncrementer.NN_Pretzel_Sticks-1});                                                                          
                                                                                      addToCartListener("Pretzel Sticks", itemIncrementer.NN_Pretzel_Sticks, 3.99);
                                                                                      } }> - </button>
                                      <span className = 'number'> {itemIncrementer.NN_Pretzel_Sticks} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, NN_Pretzel_Sticks: itemIncrementer.NN_Pretzel_Sticks+1});
                                                                                    addToCartListener("Pretzel Sticks", itemIncrementer.NN_Pretzel_Sticks, 3.99);
                                                                                  }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>OH Henry!</span>
          <img src = { OhHenry_Snack_Size_Candy120g } alt = 'OhHenry_Snack_Size_Candy120g' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Snack Size Candy (120g)</span>
            <span className = 'price'>$0.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, OhHenry_Snack_Size_Candy120g: true});}}>
            {
              cartText.OhHenry_Snack_Size_Candy120g ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.OhHenry_Snack_Size_Candy120g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, OhHenry_Snack_Size_Candy120g: itemIncrementer.OhHenry_Snack_Size_Candy120g-1});                                                                          
                                                                                      addToCartListener("Snack Size Candy (120g)", itemIncrementer.OhHenry_Snack_Size_Candy120g, 0.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.OhHenry_Snack_Size_Candy120g} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, OhHenry_Snack_Size_Candy120g: itemIncrementer.OhHenry_Snack_Size_Candy120g+1});
                                                                                  addToCartListener("Snack Size Candy (120g)", itemIncrementer.OhHenry_Snack_Size_Candy120g, 0.99);
                                                                                }}>+ </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>President's Choice</span>
          <img src = { PC_Peanut_Butter_Filled_Pretzels } alt = 'PC_Peanut_Butter_Filled_Pretzels' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Peanut Butter Filled Pretzels</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, PC_Peanut_Butter_Filled_Pretzels: true});}}>
            {
              cartText.PC_Peanut_Butter_Filled_Pretzels ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.PC_Peanut_Butter_Filled_Pretzels > 0)
                                                                                      setItemIncrementer({...itemIncrementer, PC_Peanut_Butter_Filled_Pretzels: itemIncrementer.PC_Peanut_Butter_Filled_Pretzels-1});                                                                          
                                                                                      addToCartListener("Peanut Butter Filled Pretzels", itemIncrementer.PC_Peanut_Butter_Filled_Pretzels, 4.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.PC_Peanut_Butter_Filled_Pretzels} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, PC_Peanut_Butter_Filled_Pretzels: itemIncrementer.PC_Peanut_Butter_Filled_Pretzels+1});
                                                                                      addToCartListener("Peanut Butter Filled Pretzels", itemIncrementer.PC_Peanut_Butter_Filled_Pretzels, 4.99);
                                                                                    }}>] + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Starburst</span>
          <img src = { Starburst_Original_Minis191g } alt = 'Starburst_Original_Minis191g' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Original Minis (191g)</span>
            <span className = 'price'>$4.59</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Starburst_Original_Minis191g: true});}}>
            {
              cartText.Starburst_Original_Minis191g ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Starburst_Original_Minis191g > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Starburst_Original_Minis191g: itemIncrementer.Starburst_Original_Minis191g-1});                                                                          
                                                                                      addToCartListener("Original Minis (191g)", itemIncrementer.Starburst_Original_Minis191g, 4.59);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Starburst_Original_Minis191g} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Starburst_Original_Minis191g: itemIncrementer.Starburst_Original_Minis191g+1});
                                                                                    addToCartListener("Original Minis (191g)", itemIncrementer.Starburst_Original_Minis191g, 4.59);
                                                                                  }}> + </button>                                    
                                    </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Sunmaid</span>
          <img src = { Sunmaid_Yogurt_Raisins_Vanilla } alt = 'Sunmaid_Yogurt_Raisins_Vanilla' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Yogurt Raisins Vanilla</span>
            <span className = 'price'>$3.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Sunmaid_Yogurt_Raisins_Vanilla: true});}}>
            {
              cartText.Sunmaid_Yogurt_Raisins_Vanilla ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Sunmaid_Yogurt_Raisins_Vanilla > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Sunmaid_Yogurt_Raisins_Vanilla: itemIncrementer.Sunmaid_Yogurt_Raisins_Vanilla-1});                                                                          
                                                                                      addToCartListener("Yogurt Raisins Vanilla", itemIncrementer.Sunmaid_Yogurt_Raisins_Vanilla, 3.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Sunmaid_Yogurt_Raisins_Vanilla} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Sunmaid_Yogurt_Raisins_Vanilla: itemIncrementer.Sunmaid_Yogurt_Raisins_Vanilla+1});
                                                                                  addToCartListener("Yogurt Raisins Vanilla", itemIncrementer.Sunmaid_Yogurt_Raisins_Vanilla, 3.99);
                                                                                }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>The Snack Factory</span>
          <img src = { TheSnackFactory_Pretzel_Crisps_Original } alt = 'TheSnackFactory_Pretzel_Crisps_Original' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Pretzel Crisps Original</span>
            <span className = 'price'>$5.25</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, TheSnackFactory_Pretzel_Crisps_Original: true});}}>
            {
              cartText.TheSnackFactory_Pretzel_Crisps_Original ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.TheSnackFactory_Pretzel_Crisps_Original > 0)
                                                                                      setItemIncrementer({...itemIncrementer, TheSnackFactory_Pretzel_Crisps_Original: itemIncrementer.TheSnackFactory_Pretzel_Crisps_Original-1});                                                                          
                                                                                      addToCartListener("Pretzel Crisps Original", itemIncrementer.TheSnackFactory_Pretzel_Crisps_Original, 5.25);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.TheSnackFactory_Pretzel_Crisps_Original} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, TheSnackFactory_Pretzel_Crisps_Original: itemIncrementer.TheSnackFactory_Pretzel_Crisps_Original+1});addToCartListener("Pretzel Crisps Original", itemIncrementer.TheSnackFactory_Pretzel_Crisps_Original, 5.25); }}> + </button>                                    
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