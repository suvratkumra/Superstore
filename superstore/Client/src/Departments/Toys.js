import React from 'react'
import Kid_Connection_Music_Keyboard from "../images/Toys/Kid_Connection_Music_Keyboard.webp"
import Play_Doh_Drill_n_Fill_Dentist_Toy from "../images/Toys/Play_Doh_Drill_n_Fill_Dentist_Toy.jpg"
import Mattel_Hot_Wheels_5_Car_Pack_Assortment from "../images/Toys/Mattel_Hot_Wheels_5_Car_Pack_Assortment.webp"
import Kid_Connection_Utility_Trucks_Toy from "../images/Toys/Kid_Connection_Utility_Trucks_Toy.webp"
import Mattel_Hot_Wheels_Vehicles from "../images/Toys/Mattel_Hot_Wheels_Vehicles.webp"
import Pressman_Shark_Bite_Game from "../images/Toys/Pressman_Shark_Bite_Game.jpg"
import Regent_Soccerball from "../images/Toys/Regent_Soccerball.webp"
import Size_3T_Paw_Patrol from "../images/Toys/Size_3T_Paw_Patrol.webp"
import Spark_Wooden_Puzzle_Set from "../images/Toys/Spark_Wooden_Puzzle_Set.webp"
import Barbie_Pop_Star_Doll from "../images/Toys/Barbie_Pop_Star_Doll.webp"
import Munchkin_Duck_Dunk_Bath_Toy from "../images/Toys/Munchkin_Duck_Dunk_Bath_Toy.webp"
import Mattel_Kerplunk from "../images/Toys/Mattel_Kerplunk.webp"
import PlayMonster_Things from "../images/Toys/PlayMonster_Things.webp"
import Play_Day_Play_Balls from "../images/Toys/Play_Day_Play_Balls.jpg"
import Playmobil_School_Bus_Playset from "../images/Toys/Playmobil_School_Bus_Playset.webp"
import { useState } from 'react';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
import Axios from 'axios';


export default function Toys() {
  const initialBoolean = false;
  const initializeValues = {Kid_Connection_Music_Keyboard:initialBoolean, Play_Doh_Drill_n_Fill_Dentist_Toy:initialBoolean, Mattel_Hot_Wheels_5_Car_Pack_Assortment:initialBoolean, Kid_Connection_Utility_Trucks_Toy:initialBoolean, Mattel_Hot_Wheels_Vehicles:initialBoolean, Pressman_Shark_Bite_Game:initialBoolean, Regent_Soccerball:initialBoolean, Size_3T_Paw_Patrol:initialBoolean, Spark_Wooden_Puzzle_Set:initialBoolean, Barbie_Pop_Star_Doll:initialBoolean, Munchkin_Duck_Dunk_Bath_Toy:initialBoolean, Mattel_Kerplunk:initialBoolean, PlayMonster_Things:initialBoolean, Play_Day_Play_Balls:initialBoolean, Playmobil_School_Bus_Playset:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const [showButton, setShowButton] = useState({showButton: false, showButton2: false});  
  const initializeNumber = {Kid_Connection_Music_Keyboard:1, Play_Doh_Drill_n_Fill_Dentist_Toy:1, Mattel_Hot_Wheels_5_Car_Pack_Assortment:1, Kid_Connection_Utility_Trucks_Toy:1, Mattel_Hot_Wheels_Vehicles:1, Pressman_Shark_Bite_Game:1, Regent_Soccerball:1, Size_3T_Paw_Patrol:1, Spark_Wooden_Puzzle_Set:1, Barbie_Pop_Star_Doll:1, Munchkin_Duck_Dunk_Bath_Toy:1, Mattel_Kerplunk:1, PlayMonster_Things:1, Play_Day_Play_Balls:1, Playmobil_School_Bus_Playset:1};
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
        TOYS
      </div>



      <div className='bigProducts__container'>
        <div className='item__container'>
          <span className = 'company_name'>Kid Connection</span>
          <img src = { Kid_Connection_Music_Keyboard } alt = 'Kid_Connection_Music_Keyboard' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Music Keyboard</span>
            <span className = 'price'>$25.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Kid_Connection_Music_Keyboard: true});}}>
            {
              cartText.Kid_Connection_Music_Keyboard ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Kid_Connection_Music_Keyboard > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Kid_Connection_Music_Keyboard: itemIncrementer.Kid_Connection_Music_Keyboard-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Kid_Connection_Music_Keyboard} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Kid_Connection_Music_Keyboard: itemIncrementer.Kid_Connection_Music_Keyboard+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>



        <div className='item__container'>
          <span className = 'company_name'>Play Doh</span>
          <img src = { Play_Doh_Drill_n_Fill_Dentist_Toy } alt = 'Play_Doh_Drill_n_Fill_Dentist_Toy' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Drill'n Fill Dentist Toy</span>
            <span className = 'price'>$11.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Play_Doh_Drill_n_Fill_Dentist_Toy: true});}}>
            {
              cartText.Play_Doh_Drill_n_Fill_Dentist_Toy ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Play_Doh_Drill_n_Fill_Dentist_Toy > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Play_Doh_Drill_n_Fill_Dentist_Toy: itemIncrementer.Play_Doh_Drill_n_Fill_Dentist_Toy-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Play_Doh_Drill_n_Fill_Dentist_Toy} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Play_Doh_Drill_n_Fill_Dentist_Toy: itemIncrementer.Play_Doh_Drill_n_Fill_Dentist_Toy+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Mattel Hot Wheels</span>
          <img src = { Mattel_Hot_Wheels_5_Car_Pack_Assortment } alt = 'Mattel Hot Wheels' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>5 Car Pack Assortment</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Mattel_Hot_Wheels_5_Car_Pack_Assortment: true});}}>
            {
              cartText.Mattel_Hot_Wheels_5_Car_Pack_Assortment ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Mattel_Hot_Wheels_5_Car_Pack_Assortment > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Mattel_Hot_Wheels_5_Car_Pack_Assortment: itemIncrementer.Mattel_Hot_Wheels_5_Car_Pack_Assortment-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Mattel_Hot_Wheels_5_Car_Pack_Assortment} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Mattel_Hot_Wheels_5_Car_Pack_Assortment: itemIncrementer.Mattel_Hot_Wheels_5_Car_Pack_Assortment+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
         
        <div className='item__container'>
          <span className = 'company_name'>Kid Connection </span>
          <img src = { Kid_Connection_Utility_Trucks_Toy } alt = 'Kid Connection Utility Trucks Toy' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Utility Trucks Toy</span>
            <span className = 'price'>$9.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Kid_Connection_Utility_Trucks_Toy: true});}}>
            {
              cartText.Kid_Connection_Utility_Trucks_Toy ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Kid_Connection_Utility_Trucks_Toy > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Kid_Connection_Utility_Trucks_Toy: itemIncrementer.Kid_Connection_Utility_Trucks_Toy-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Kid_Connection_Utility_Trucks_Toy} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Kid_Connection_Utility_Trucks_Toy: itemIncrementer.Kid_Connection_Utility_Trucks_Toy+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Mattel Hot Wheels</span>
          <img src = { Mattel_Hot_Wheels_Vehicles } alt = 'Mattel Hot Wheels' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Vehicles</span>
            <span className = 'price'>$15.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Mattel_Hot_Wheels_Vehicles: true});}}>
            {
              cartText.Mattel_Hot_Wheels_Vehicles ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Mattel_Hot_Wheels_Vehicles > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Mattel_Hot_Wheels_Vehicles: itemIncrementer.Mattel_Hot_Wheels_Vehicles-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Mattel_Hot_Wheels_Vehicles} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Mattel_Hot_Wheels_Vehicles: itemIncrementer.Mattel_Hot_Wheels_Vehicles+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Pressman</span>
          <img src = { Pressman_Shark_Bite_Game } alt = 'Pressman' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'> Shark Bite Game</span>
            <span className = 'price'>$20.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Pressman_Shark_Bite_Game: true});}}>
            {
              cartText.Pressman_Shark_Bite_Game ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Pressman_Shark_Bite_Game > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Pressman_Shark_Bite_Game: itemIncrementer.Pressman_Shark_Bite_Game-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Pressman_Shark_Bite_Game} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Pressman_Shark_Bite_Game: itemIncrementer.Pressman_Shark_Bite_Game+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Regent </span>
          <img src = { Regent_Soccerball } alt = 'Regent soccerball' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Soccerball</span>
            <span className = 'price'>$12.99</span>  
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Regent_Soccerball: true});}}>
            {
              cartText.Regent_Soccerball ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Regent_Soccerball > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Regent_Soccerball: itemIncrementer.Regent_Soccerball-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Regent_Soccerball} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Regent_Soccerball: itemIncrementer.Regent_Soccerball+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Size 3T </span>
          <img src = { Size_3T_Paw_Patrol } alt = 'Size 3T ' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Paw Patrol</span>
            <span className = 'price'>$12.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Size_3T_Paw_Patrol: true});}}>
            {
              cartText.Size_3T_Paw_Patrol ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Size_3T_Paw_Patrol > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Size_3T_Paw_Patrol: itemIncrementer.Size_3T_Paw_Patrol-1});                                                                          
                                                                                    } }> -</button>
                                      <span className = 'number'> {itemIncrementer.Size_3T_Paw_Patrol} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Size_3T_Paw_Patrol: itemIncrementer.Size_3T_Paw_Patrol+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Spark </span>
          <img src = { Spark_Wooden_Puzzle_Set } alt = 'Spark ' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Wooden Puzzle Set</span>
            <span className = 'price'>$20.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Spark_Wooden_Puzzle_Set: true});}}>
            {
              cartText.Spark_Wooden_Puzzle_Set ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Spark_Wooden_Puzzle_Set > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Spark_Wooden_Puzzle_Set: itemIncrementer.Spark_Wooden_Puzzle_Set-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Spark_Wooden_Puzzle_Set} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Spark_Wooden_Puzzle_Set: itemIncrementer.Spark_Wooden_Puzzle_Set+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Barbie</span>
          <img src = { Barbie_Pop_Star_Doll } alt = 'Barbie' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Barbie Pop Star Doll</span>
            <span className = 'price'>$12.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Barbie_Pop_Star_Doll: true});}}>
            {
              cartText.Barbie_Pop_Star_Doll ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Barbie_Pop_Star_Doll > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Barbie_Pop_Star_Doll: itemIncrementer.Barbie_Pop_Star_Doll-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Barbie_Pop_Star_Doll} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Barbie_Pop_Star_Doll: itemIncrementer.Barbie_Pop_Star_Doll+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>President's Choice</span>
          <img src = { Munchkin_Duck_Dunk_Bath_Toy } alt = 'Munchkin Duck Dunk Bath Toy' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Munchkin Duck Dunk Bath Toy</span>
            <span className = 'price'>$7.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Munchkin_Duck_Dunk_Bath_Toy: true});}}>
            {
              cartText.Munchkin_Duck_Dunk_Bath_Toy ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Munchkin_Duck_Dunk_Bath_Toy > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Munchkin_Duck_Dunk_Bath_Toy: itemIncrementer.Munchkin_Duck_Dunk_Bath_Toy-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Munchkin_Duck_Dunk_Bath_Toy} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Munchkin_Duck_Dunk_Bath_Toy: itemIncrementer.Munchkin_Duck_Dunk_Bath_Toy+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Mattel</span>
          <img src = { Mattel_Kerplunk } alt = 'Mattel' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Kerplunk</span>
            <span className = 'price'>$8.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Mattel_Kerplunk: true});}}>
            {
              cartText.Mattel_Kerplunk ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Mattel_Kerplunk > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Mattel_Kerplunk: itemIncrementer.Mattel_Kerplunk-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Mattel_Kerplunk} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Mattel_Kerplunk: itemIncrementer.Mattel_Kerplunk+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        <div className='item__container'>
          <span className = 'company_name'>PlayMonster_Things</span>
          <img src = { PlayMonster_Things } alt = 'Mattel' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>PlayMonster_Things</span>
            <span className = 'price'>$6.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, PlayMonster_Things: true});}}>
            {
              cartText.Mattel_Kerplunk ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.PlayMonster_Things > 0)
                                                                                      setItemIncrementer({...itemIncrementer, PlayMonster_Things: itemIncrementer.PlayMonster_Things-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.PlayMonster_Things} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, PlayMonster_Things: itemIncrementer.PlayMonster_Things+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Play Day</span>
          <img src = { Play_Day_Play_Balls } alt = 'Play Day' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Play Day Play Balls</span>
            <span className = 'price'>$21.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Play_Day_Play_Balls: true});}}>
            {
              cartText.Play_Day_Play_Balls ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Play_Day_Play_Balls > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Play_Day_Play_Balls: itemIncrementer.Play_Day_Play_Balls-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Play_Day_Play_Balls} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Play_Day_Play_Balls: itemIncrementer.Play_Day_Play_Balls+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Playmobil</span>
          <img src = { Playmobil_School_Bus_Playset } alt = 'Playmobil' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>School Bus Playset</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Playmobil_School_Bus_Playset: true});}}>
            {
              cartText.Playmobil_School_Bus_Playset ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Playmobil_School_Bus_Playset > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Playmobil_School_Bus_Playset: itemIncrementer.Playmobil_School_Bus_Playset-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Playmobil_School_Bus_Playset} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Playmobil_School_Bus_Playset: itemIncrementer.Playmobil_School_Bus_Playset+1}) }> + </button>                                    
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