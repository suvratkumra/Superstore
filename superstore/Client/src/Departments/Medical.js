import React from 'react'
import { useState } from 'react';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";

import Band_Aid_Large_Gauze_Pads from "../images/Medical/Band_Aid_Large_Gauze_Pads.webp"
import Band_Aid_Wet_Flex_Bandages from "../images/Medical/Band_Aid_Wet_Flex_Bandages.webp"
import Blistex_Medicated_Berry_Lip_Balm from "../images/Medical/Blistex_Medicated_Berry_Lip_Balm.webp"
import Br45_Flex_Fab_Band from "../images/Medical/Br45_Flex_Fab_Band.webp"
import Drive_Medical_Foam_Ring_Cushion from "../images/Medical/Drive_Medical_Foam_Ring_Cushion.webp"
import Equate_Cot_Style_Finger_Splin from "../images/Medical/Equate_Cot_Style_Finger_Splin.webp"
import Equate_Oral_Medication_Dispenser from "../images/Medical/Equate_Oral_Medication_Dispenser.webp"
import Equate_Self_Adhering_Bandage from "../images/Medical/Equate_Self_Adhering_Bandage.webp"
import Equate_Small_Rolled_Gauze from "../images/Medical/Equate_Small_Rolled_Gauze.webp"
import Gold_Bond_Medicated_Anti_Itch_Cream from "../images/Medical/Gold_Bond_Medicated_Anti_Itch_Cream.webp"
import Gold_Bond_Medicated_Body_Powder from "../images/Medical/Gold_Bond_Medicated_Body_Powder.webp"
import Nexcare_Sensitive_Skin_Removable_Tape from "../images/Medical/Nexcare_Sensitive_Skin_Removable_Tape.webp"
import Penaten_Medicated_Cream from "../images/Medical/Penaten_Medicated_Cream.webp"
import Tylenol_500_Mg_Eztabs from "../images/Medical/Tylenol_500_Mg_Eztabs.webp"
import Vicks_Vaporub_Ointment from "../images/Medical/Vicks_Vaporub_Ointment.webp"

import Axios from 'axios';

export default function Medical() {
  const initialBoolean = false;
  const initializeValues = {Band_Aid_Large_Gauze_Pads:initialBoolean, Band_Aid_Wet_Flex_Bandages:initialBoolean, Blistex_Medicated_Berry_Lip_Balm:initialBoolean, Br45_Flex_Fab_Band:initialBoolean, Drive_Medical_Foam_Ring_Cushion:initialBoolean, Equate_Cot_Style_Finger_Splin:initialBoolean, Equate_Oral_Medication_Dispenser:initialBoolean, Equate_Self_Adhering_Bandage:initialBoolean, Equate_Small_Rolled_Gauze:initialBoolean, Gold_Bond_Medicated_Anti_Itch_Cream:initialBoolean, Gold_Bond_Medicated_Body_Powder:initialBoolean, Nexcare_Sensitive_Skin_Removable_Tape:initialBoolean, Penaten_Medicated_Cream:initialBoolean, Tylenol_500_Mg_Eztabs:initialBoolean, Vicks_Vaporub_Ointment:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const [showButton, setShowButton] = useState({showButton: false, showButton2: false});  
  const initializeNumber = {Band_Aid_Large_Gauze_Pads:1, Band_Aid_Wet_Flex_Bandages:1, Blistex_Medicated_Berry_Lip_Balm:1, Br45_Flex_Fab_Band:1, Drive_Medical_Foam_Ring_Cushion:1, Equate_Cot_Style_Finger_Splin:1, Equate_Oral_Medication_Dispenser:1, Equate_Self_Adhering_Bandage:1, Equate_Small_Rolled_Gauze:1, Gold_Bond_Medicated_Anti_Itch_Cream:1, Gold_Bond_Medicated_Body_Powder:1, Nexcare_Sensitive_Skin_Removable_Tape:1, Penaten_Medicated_Cream:1, Tylenol_500_Mg_Eztabs:1, Vicks_Vaporub_Ointment:1};
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
    

    <div className='products_name__container'>
      <div className='departmentName'>
        MEDICAL
      </div>



      <div className='bigProducts__container'>
        <div className='item__container'>
          <span className = 'company_name'>Johnson-Johnson</span>
          <img src = { Band_Aid_Large_Gauze_Pads } alt = 'Band_Aid_Large_Gauze_Pads' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Band Aid Large Gauze Pads</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Band_Aid_Large_Gauze_Pads: true});}}>
            {
              cartText.Band_Aid_Large_Gauze_Pads ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Band_Aid_Large_Gauze_Pads > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Band_Aid_Large_Gauze_Pads: itemIncrementer.Band_Aid_Large_Gauze_Pads-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Band_Aid_Large_Gauze_Pads} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Band_Aid_Large_Gauze_Pads: itemIncrementer.Band_Aid_Large_Gauze_Pads+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>



        <div className='item__container'>
          <span className = 'company_name'>Johnson-Johnson</span>
          <img src = { Band_Aid_Wet_Flex_Bandages } alt = 'Band_Aid_Wet_Flex_Bandages' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Band Aid Wet Flex Bandages</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Band_Aid_Wet_Flex_Bandages: true});}}>
            {
              cartText.Band_Aid_Wet_Flex_Bandages ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Band_Aid_Wet_Flex_Bandages > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Band_Aid_Wet_Flex_Bandages: itemIncrementer.Band_Aid_Wet_Flex_Bandages-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Band_Aid_Wet_Flex_Bandages} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Band_Aid_Wet_Flex_Bandages: itemIncrementer.Band_Aid_Wet_Flex_Bandages+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Blistex</span>
          <img src = { Blistex_Medicated_Berry_Lip_Balm } alt = 'Blistex_Medicated_Berry_Lip_Balm' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Medicated Berry Lip Balm</span>
            <span className = 'price'>$6.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Blistex_Medicated_Berry_Lip_Balm: true});}}>
            {
              cartText.Blistex_Medicated_Berry_Lip_Balm ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Blistex_Medicated_Berry_Lip_Balm > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Blistex_Medicated_Berry_Lip_Balm: itemIncrementer.Blistex_Medicated_Berry_Lip_Balm-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Blistex_Medicated_Berry_Lip_Balm} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Blistex_Medicated_Berry_Lip_Balm: itemIncrementer.Blistex_Medicated_Berry_Lip_Balm+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
         
        <div className='item__container'>
          <span className = 'company_name'>Johnson-Johnson</span>
          <img src = { Br45_Flex_Fab_Band } alt = 'Br45_Flex_Fab_Band' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Flexible Band Aid</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Br45_Flex_Fab_Band: true});}}>
            {
              cartText.Br45_Flex_Fab_Band ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Br45_Flex_Fab_Band > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Br45_Flex_Fab_Band: itemIncrementer.Br45_Flex_Fab_Band-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Br45_Flex_Fab_Band} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Br45_Flex_Fab_Band: itemIncrementer.Br45_Flex_Fab_Band+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Drive Medical</span>
          <img src = { Drive_Medical_Foam_Ring_Cushion } alt = 'Drive_Medical_Foam_Ring_Cushion' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Foam Ring Cushion</span>
            <span className = 'price'>$6.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Drive_Medical_Foam_Ring_Cushion: true});}}>
            {
              cartText.Drive_Medical_Foam_Ring_Cushion ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Drive_Medical_Foam_Ring_Cushion > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Drive_Medical_Foam_Ring_Cushion: itemIncrementer.Drive_Medical_Foam_Ring_Cushion-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Drive_Medical_Foam_Ring_Cushion} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Drive_Medical_Foam_Ring_Cushion: itemIncrementer.Drive_Medical_Foam_Ring_Cushion+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Equate</span>
          <img src = { Equate_Cot_Style_Finger_Splin } alt = 'Equate_Cot_Style_Finger_Splin' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Cot Style Finger Splin</span>
            <span className = 'price'>$3.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Equate_Cot_Style_Finger_Splin: true});}}>
            {
              cartText.Equate_Cot_Style_Finger_Splin ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Equate_Cot_Style_Finger_Splin > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Equate_Cot_Style_Finger_Splin: itemIncrementer.Equate_Cot_Style_Finger_Splin-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Equate_Cot_Style_Finger_Splin} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Equate_Cot_Style_Finger_Splin: itemIncrementer.Equate_Cot_Style_Finger_Splin+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Equate</span>
          <img src = { Equate_Oral_Medication_Dispenser } alt = 'Equate_Oral_Medication_Dispenser' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Oral Medication Dispenser</span>
            <span className = 'price'>$5.99</span>  
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Equate_Oral_Medication_Dispenser: true});}}>
            {
              cartText.Equate_Oral_Medication_Dispenser ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Equate_Oral_Medication_Dispenser > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Equate_Oral_Medication_Dispenser: itemIncrementer.Equate_Oral_Medication_Dispenser-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Equate_Oral_Medication_Dispenser} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Equate_Oral_Medication_Dispenser: itemIncrementer.Equate_Oral_Medication_Dispenser+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Equate</span>
          <img src = { Equate_Self_Adhering_Bandage } alt = 'Equate_Self_Adhering_Bandage' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Self Adhering Bandage</span>
            <span className = 'price'>$8.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Equate_Self_Adhering_Bandage: true});}}>
            {
              cartText.Equate_Self_Adhering_Bandage ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Equate_Self_Adhering_Bandage > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Equate_Self_Adhering_Bandage: itemIncrementer.Equate_Self_Adhering_Bandage-1});                                                                          
                                                                                    } }> -</button>
                                      <span className = 'number'> {itemIncrementer.Equate_Self_Adhering_Bandage} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Equate_Self_Adhering_Bandage: itemIncrementer.Equate_Self_Adhering_Bandage+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Equate</span>
          <img src = { Equate_Small_Rolled_Gauze } alt = 'Equate_Small_Rolled_Gauze' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Small Rolled Gauze</span>
            <span className = 'price'>$3.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Equate_Small_Rolled_Gauze: true});}}>
            {
              cartText.Equate_Small_Rolled_Gauze ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Equate_Small_Rolled_Gauze > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Equate_Small_Rolled_Gauze: itemIncrementer.Equate_Small_Rolled_Gauze-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Equate_Small_Rolled_Gauze} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Equate_Small_Rolled_Gauze: itemIncrementer.Equate_Small_Rolled_Gauze+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Gold Bond</span>
          <img src = { Gold_Bond_Medicated_Anti_Itch_Cream } alt = 'Gold_Bond_Medicated_Anti_Itch_Cream' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Medicated Anti Itch Cream</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Gold_Bond_Medicated_Anti_Itch_Cream: true});}}>
            {
              cartText.Gold_Bond_Medicated_Anti_Itch_Cream ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Gold_Bond_Medicated_Anti_Itch_Cream > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Gold_Bond_Medicated_Anti_Itch_Cream: itemIncrementer.Gold_Bond_Medicated_Anti_Itch_Cream-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Gold_Bond_Medicated_Anti_Itch_Cream} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Gold_Bond_Medicated_Anti_Itch_Cream: itemIncrementer.Gold_Bond_Medicated_Anti_Itch_Cream+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Gold Bond</span>
          <img src = { Gold_Bond_Medicated_Body_Powder } alt = 'Gold_Bond_Medicated_Body_Powder' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Medicated Body Powder</span>
            <span className = 'price'>$3.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Gold_Bond_Medicated_Body_Powder: true});}}>
            {
              cartText.Gold_Bond_Medicated_Body_Powder ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Gold_Bond_Medicated_Body_Powder > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Gold_Bond_Medicated_Body_Powder: itemIncrementer.Gold_Bond_Medicated_Body_Powder-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Gold_Bond_Medicated_Body_Powder} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Gold_Bond_Medicated_Body_Powder: itemIncrementer.Gold_Bond_Medicated_Body_Powder+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Nexcare</span>
          <img src = { Nexcare_Sensitive_Skin_Removable_Tape } alt = 'Nexcare_Sensitive_Skin_Removable_Tape' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Sensitive Skin Removable Tape</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Nexcare_Sensitive_Skin_Removable_Tape: true});}}>
            {
              cartText.Nexcare_Sensitive_Skin_Removable_Tape ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Nexcare_Sensitive_Skin_Removable_Tape > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Nexcare_Sensitive_Skin_Removable_Tape: itemIncrementer.Nexcare_Sensitive_Skin_Removable_Tape-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Nexcare_Sensitive_Skin_Removable_Tape} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Nexcare_Sensitive_Skin_Removable_Tape: itemIncrementer.Nexcare_Sensitive_Skin_Removable_Tape+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Paneten</span>
          <img src = { Penaten_Medicated_Cream } alt = 'Penaten_Medicated_Cream' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Medicated Cream</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Penaten_Medicated_Cream: true});}}>
            {
              cartText.Penaten_Medicated_Cream ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Penaten_Medicated_Cream > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Penaten_Medicated_Cream: itemIncrementer.Penaten_Medicated_Cream-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Penaten_Medicated_Cream} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Penaten_Medicated_Cream: itemIncrementer.Penaten_Medicated_Cream+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Tylenol</span>
          <img src = { Tylenol_500_Mg_Eztabs } alt = 'Tylenol_500_Mg_Eztabs' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Tylenol 500Mg Eztabs (24 Tablets)</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Tylenol_500_Mg_Eztabs: true});}}>
            {
              cartText.Tylenol_500_Mg_Eztabs ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Tylenol_500_Mg_Eztabs > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Tylenol_500_Mg_Eztabs: itemIncrementer.Tylenol_500_Mg_Eztabs-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Tylenol_500_Mg_Eztabs} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Tylenol_500_Mg_Eztabs: itemIncrementer.Tylenol_500_Mg_Eztabs+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Vicks</span>
          <img src = { Vicks_Vaporub_Ointment } alt = 'Vicks_Vaporub_Ointment' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Vaporub Ointment</span>
            <span className = 'price'>$5.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Vicks_Vaporub_Ointment: true});}}>
            {
              cartText.Vicks_Vaporub_Ointment ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Vicks_Vaporub_Ointment > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Vicks_Vaporub_Ointment: itemIncrementer.Vicks_Vaporub_Ointment-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Vicks_Vaporub_Ointment} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, Vicks_Vaporub_Ointment: itemIncrementer.Vicks_Vaporub_Ointment+1}) }> + </button>                                    
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