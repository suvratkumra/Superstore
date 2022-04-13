import React from 'react';
import { useState, useEffect } from 'react';
import './Cart.js.css';     // two dots because you have to go to previous directory first
import Axios from 'axios'
import PaymentMethod from '../images/PaymentMethod.png'

export default function Cart() {
    
    const [email, setEmail] = useState("");         // to get the email
    const [continuing, setContinuing] = useState(false); 
    const [resultStore, setResultStore] = useState({});
    const [isEmail, setIsEmail] = useState(false)
    const [isObject, setIsObject] = useState(false)
    // const [totalBill, setTotalBill] = useState(0.00)
  var totalBill = 0;


useEffect(() => {
    // function getEmail(){
        Axios.post("http://localhost:3001/api/getEmail"
        ).then((res) => {
          // console.log(res.data);
          setEmail(res.data)
          // console.log(email);
          setIsEmail(true);
          // console.log(email.length);
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
            // console.log(res.data)
            setResultStore(res.data);
            setIsObject(true);
            // console.log(resultStore)
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
          <div id = "heading__container_cart">
            <span>Product Name</span>
            <span>Price</span>
            <span>Quantity</span>

          </div>
        
        <br/>
            <div id = "products_section__container">
            {/* {console.log(resultStore)} */}

            { Object.values(resultStore).map((item, value) => {
            return  <div id = "item_displaying__container">              
              <span id = "itemName__name">{Object.values(item).at(1)}</span>
              <span id = "itemName__name">${(Object.values(item).at(2)*Object.values(item).at(3)).toFixed(2)}</span>
              <span id = "itemName__name">{Object.values(item).at(3)}</span>
                
            </div>
            }) }
            </div>

            { Object.values(resultStore).map((item, value) => {
              totalBill+=parseFloat((Object.values(item).at(2)*Object.values(item).at(3)).toFixed(2))
              // console.log((totalBill));
            })}

            <div id = "price_section__container">
                <span id = "textBill__text">YOUR BILL</span>
                <hr/>
                <br/>
                <span id = "totalSubBill__text">Your Subtotal: ${totalBill.toFixed(2)} <br/> + <br/> GST: ${((totalBill.toFixed(2)/100)*5).toFixed(2)}</span>
                <br/>
                <hr/>
                <br/>
                <span id = "totalBill__text">Total: ${(parseFloat(totalBill.toFixed(2)) + parseFloat((totalBill.toFixed(2)/100)*5)).toFixed(2)}</span>
                <br/>
                <div id = "payUsing__text">
                  Pay Using:<br/><br/>
                  <div id = "buttons__payment">
                    <button className= "button-29" onClick = {"#"}>CRYPTO</button>
                    <button className= "button-29" onClick = {"#"}>VISA</button>
                    <button className= "button-29" onClick = {"#"}>INSTADEBIT</button>
                    <button className= "button-29" onClick = {"#"}>PAYPAL</button>
                    <button className= "button-29" onClick = {"#"}>MASTERCARD</button>
                  </div>
                  
                  </div>
            </div>
        </div>

    </div>
    
    }
        </>
    )
}