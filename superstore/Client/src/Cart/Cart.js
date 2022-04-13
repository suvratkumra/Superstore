import React from 'react';
import { useState, useEffect } from 'react';
import './Cart.js.css';     // two dots because you have to go to previous directory first
import Axios from 'axios'

export default function Cart() {
    
    const [email, setEmail] = useState("");         // to get the email
    const [continuing, setContinuing] = useState(false); 
    const [resultStore, setResultStore] = useState({});
    const [isEmail, setIsEmail] = useState(false)
    const [isObject, setIsObject] = useState(false)


useEffect(() => {
    // function getEmail(){
        Axios.post("http://localhost:3001/api/getEmail"
        ).then((res) => {
          console.log(res.data);
          setEmail(res.data)
          console.log(email);
          setIsEmail(true);
          console.log(email.length);
          if(res.length === 0) {
            setContinuing(false);
          }else {
            setContinuing(true);
          }
        //   return (setEmail(res.data))
        }
        )
        
    //   }
    // function getCartItems() {
        Axios.post("http://localhost:3001/api/getCart", {
            email: email
        }).then((res) => {
            console.log(res.data)
            setResultStore(res.data);
            setIsObject(true);
            console.log(resultStore)
        })
    // }
}, [isEmail, isObject])
    

    
    
    return(
        <>
        <div>
      {/* { getEmail() } */}
    </div>

    {!continuing && <div id = "errorPage__container">
        <span id = "textError__text">ERROR! <br/> You need to log in first before accessing this page</span>
        <br/><br/>
        <button className= "button-29" onClick = {(()=>{window.location.href = "http://localhost:3000/WelcomePage"})}>Click here to go sign in.</button>
      </div>}

    {continuing && <div>
        <div id = "cartOverall__container">
            <span className='cart__Heading'>YOUR CART</span>
        </div>
        <div id = "products_and_prices__container">
            <div id = "products_section__container">
            {/* {getCartItems()} */}
            {/* { Object.values(resultStore).map((item, value) => {
            return  
                      <span id = "itemName__name">{item}</span>
            
            }) } */}
            </div>

            <div id = "price_sectino__container">

                
            </div>
        </div>

    </div>
    
    }
        </>
    )
}