import React, { useEffect } from 'react'
import './Thankyou.js.css'


export default function Thankyou() {
    return(
        <>
        
            <div className='thankyou__container'>
                <span>Thank you for shopping at the superstore...</span>
                <span>We hope to see you again soon!</span>
                <div className= 'cart__container'>
                <button className = "button-29" onClick={()=>window.location.href = "http://localhost:3000/MainPage"}>Go Back</button>
                </div>
            </div>
        
        </>
    )
}