import React, { useState } from 'react'
import '../css/Bakery.css'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";

import asus_prime_H410M_E_LGA_1200_Intel_H410_SATA from "../images/Equipment/asus_prime_H410M-E_LGA_1200_Intel_H410_SATA.png"
import canon_imageClass_D1650_monochrome_lazer from "../images/Equipment/canon_imageClass_D1650_monochrome_lazer.png"
import cat5e_ethernet_cable from "../images/Equipment/cat5e_ethernet_cable.png"
import cat6_green_ethernet_cable_10foot from "../images/Equipment/cat6_green_ethernet_cable_10foot.png"
import decora_wall_plate_white_dual from "../images/Equipment/decora_wall_plate_white_dual.png"
import energizer_batteries_alkaline_AA24 from "../images/Equipment/energizer_batteries_alkaline_AA24.png"
import energizer_maxAA_batteries_8pack from "../images/Equipment/energizer_maxAA_batteries_8pack.png"
import fiber_optic_cable_LC_Duplex from "../images/Equipment/fiber_optic_cable_LC_Duplex.png"
import fiber_optic_cable_singlemodeDuplex from "../images/Equipment/fiber_optic_cable_singlemodeDuplex.png"
import globe_electric_with_slim_plug from "../images/Equipment/globe_electric_with_slim_plug.png"
import JVC_inear_headphones from "../images/Equipment/JVC_inear_headphones.png"
import samsung_27_curved_FHD_VA_monitor from "../images/Equipment/samsung_27_curved_FHD_VA_monitor.png"
import samsung_black_toner_cartridge from "../images/Equipment/samsung_black_toner_cartridge.png"
import Xtrike_Me_HP_310_gaming_headset from "../images/Equipment/Xtrike_Me_HP-310_gaming_headset.png"
import slim_cat6_ethernet_cable from "../images/Equipment/slim_cat6_ethernet_cable.png"


export default function Equipment() {
  const initialBoolean = false;
  const initializeValues = {grainBread:initialBoolean, bananaMuffin:initialBoolean, bananaCake:initialBoolean, butterCroissant:initialBoolean, chocolateMini:initialBoolean, chocChipMuffin:initialBoolean, cinnamonBread:initialBoolean, doubleChoc:initialBoolean, frenchBread:initialBoolean, largeOriginal:initialBoolean, PCtortillas:initialBoolean, rolls:initialBoolean, sourdoughLoaf:initialBoolean, roastedWheat:initialBoolean, naan:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const [showButton, setShowButton] = useState({showButton: false, showButton2: false});  
  const initializeNumber = {grainBread:1, bananaMuffin:1, bananaCake:1, butterCroissant:1, chocolateMini:1, chocChipMuffin:1, cinnamonBread:1, doubleChoc:1, frenchBread:1, largeOriginal:1, PCtortillas:1, rolls:1, sourdoughLoaf:1, roastedWheat:1, naan:1};
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
        EQUIPMENT
      </div>



      <div className='bigProducts__container'>
        <div className='item__container'>
          <span className = 'company_name'>Country Harvest</span>
          <img src = { asus_prime_H410M_E_LGA_1200_Intel_H410_SATA } alt = 'Bread Picture' className = 'product_image' />
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
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.grainBread} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, grainBread: itemIncrementer.grainBread+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>



        <div className='item__container'>
          <span className = 'company_name'>Farmer's Market</span>
          <img src = { canon_imageClass_D1650_monochrome_lazer } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Banana Chocolate Muffin</span>
            <span className = 'price'>$3.21</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, bananaMuffin: true});}}>
            {
              cartText.bananaMuffin ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.bananaMuffin > 0)
                                                                                      setItemIncrementer({...itemIncrementer, bananaMuffin: itemIncrementer.bananaMuffin-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.bananaMuffin} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, bananaMuffin: itemIncrementer.bananaMuffin+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Farmer's Market</span>
          <img src = { cat5e_ethernet_cable } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Banana Loaf Cake</span>
            <span className = 'price'>$3.21</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, bananaCake: true});}}>
            {
              cartText.bananaCake ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.bananaCake > 0)
                                                                                      setItemIncrementer({...itemIncrementer, bananaCake: itemIncrementer.bananaCake-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.bananaCake} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, bananaCake: itemIncrementer.bananaCake+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
         
        <div className='item__container'>
          <span className = 'company_name'>Farmer's Market</span>
          <img src = { cat6_green_ethernet_cable_10foot } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Butter Croissant</span>
            <span className = 'price'>$3.21</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, butterCroissant: true});}}>
            {
              cartText.butterCroissant ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.butterCroissant > 0)
                                                                                      setItemIncrementer({...itemIncrementer, butterCroissant: itemIncrementer.butterCroissant-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.butterCroissant} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, butterCroissant: itemIncrementer.butterCroissant+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>President's Choice</span>
          <img src = { decora_wall_plate_white_dual } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Chocolate Mini Muffin</span>
            <span className = 'price'>$3.21</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, chocolateMini: true});}}>
            {
              cartText.chocolateMini ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.chocolateMini > 0)
                                                                                      setItemIncrementer({...itemIncrementer, chocolateMini: itemIncrementer.chocolateMini-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.chocolateMini} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, chocolateMini: itemIncrementer.chocolateMini+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Farmer's Market</span>
          <img src = { energizer_batteries_alkaline_AA24 } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Chocolate Chip Muffin</span>
            <span className = 'price'>$3.21</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, chocChipMuffin: true});}}>
            {
              cartText.chocChipMuffin ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.chocChipMuffin > 0)
                                                                                      setItemIncrementer({...itemIncrementer, chocChipMuffin: itemIncrementer.chocChipMuffin-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.chocChipMuffin} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, chocChipMuffin: itemIncrementer.chocChipMuffin+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Country Harvest</span>
          <img src = { energizer_maxAA_batteries_8pack } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>cinnamon Raisin Bread</span>
            <span className = 'price'>$3.21</span>  
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, cinnamonBread: true});}}>
            {
              cartText.cinnamonBread ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.cinnamonBread > 0)
                                                                                      setItemIncrementer({...itemIncrementer, cinnamonBread: itemIncrementer.cinnamonBread-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.cinnamonBread} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, cinnamonBread: itemIncrementer.cinnamonBread+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Farmer's Market</span>
          <img src = { fiber_optic_cable_LC_Duplex } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Double Chocolate Muffin</span>
            <span className = 'price'>$3.21</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, doubleChoc: true});}}>
            {
              cartText.doubleChoc ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.doubleChoc > 0)
                                                                                      setItemIncrementer({...itemIncrementer, doubleChoc: itemIncrementer.doubleChoc-1});                                                                          
                                                                                    } }> -</button>
                                      <span className = 'number'> {itemIncrementer.doubleChoc} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, doubleChoc: itemIncrementer.doubleChoc+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { fiber_optic_cable_singlemodeDuplex } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>French Bread</span>
            <span className = 'price'>$3.21</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, frenchBread: true});}}>
            {
              cartText.frenchBread ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.frenchBread > 0)
                                                                                      setItemIncrementer({...itemIncrementer, frenchBread: itemIncrementer.frenchBread-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.frenchBread} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, frenchBread: itemIncrementer.frenchBread+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Casa Mendosa</span>
          <img src = { globe_electric_with_slim_plug } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Large Original Tortillas</span>
            <span className = 'price'>$3.21</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, largeOriginal: true});}}>
            {
              cartText.largeOriginal ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.largeOriginal > 0)
                                                                                      setItemIncrementer({...itemIncrementer, largeOriginal: itemIncrementer.largeOriginal-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.largeOriginal} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, largeOriginal: itemIncrementer.largeOriginal+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>President's Choice</span>
          <img src = { JVC_inear_headphones } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Tortillas Original</span>
            <span className = 'price'>$3.21</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, PCtortillas: true});}}>
            {
              cartText.PCtortillas ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.PCtortillas > 0)
                                                                                      setItemIncrementer({...itemIncrementer, PCtortillas: itemIncrementer.PCtortillas-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.PCtortillas} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, PCtortillas: itemIncrementer.PCtortillas+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { samsung_27_curved_FHD_VA_monitor } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Rolls 6 Pack</span>
            <span className = 'price'>$3.21</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, rolls: true});}}>
            {
              cartText.rolls ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.rolls > 0)
                                                                                      setItemIncrementer({...itemIncrementer, rolls: itemIncrementer.rolls-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.rolls} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, rolls: itemIncrementer.rolls+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { samsung_black_toner_cartridge } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Sourdough Loaf Sliced</span>
            <span className = 'price'>$3.21</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, sourdoughLoaf: true});}}>
            {
              cartText.sourdoughLoaf ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.sourdoughLoaf > 0)
                                                                                      setItemIncrementer({...itemIncrementer, sourdoughLoaf: itemIncrementer.sourdoughLoaf-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.sourdoughLoaf} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, sourdoughLoaf: itemIncrementer.sourdoughLoaf+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Counter Harvest</span>
          <img src = { slim_cat6_ethernet_cable } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Stone Milled With Roasted Wheat</span>
            <span className = 'price'>$3.21</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, roastedWheat: true});}}>
            {
              cartText.roastedWheat ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.roastedWheat > 0)
                                                                                      setItemIncrementer({...itemIncrementer, roastedWheat: itemIncrementer.roastedWheat-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.roastedWheat} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, roastedWheat: itemIncrementer.roastedWheat+1}) }> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Suraj</span>
          <img src = { Xtrike_Me_HP_310_gaming_headset } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Naan Original (5-Pack)</span>
            <span className = 'price'>$3.21</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, naan: true});}}>
            {
              cartText.naan ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.naan > 0)
                                                                                      setItemIncrementer({...itemIncrementer, naan: itemIncrementer.naan-1});                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.naan} </span>
                                      <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, naan: itemIncrementer.naan+1}) }> + </button>                                    
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