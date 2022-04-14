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
import Axios from 'axios';

export default function Equipment() {
  const initialBoolean = false;
  const initializeValues = {asus_prime_H410M_E_LGA_1200_Intel_H410_SATA:initialBoolean, canon_imageClass_D1650_monochrome_lazer:initialBoolean, cat5e_ethernet_cable:initialBoolean, cat6_green_ethernet_cable_10foot:initialBoolean, decora_wall_plate_white_dual:initialBoolean, energizer_batteries_alkaline_AA24:initialBoolean, energizer_maxAA_batteries_8pack:initialBoolean, fiber_optic_cable_LC_Duplex:initialBoolean, fiber_optic_cable_singlemodeDuplex:initialBoolean, globe_electric_with_slim_plug:initialBoolean, JVC_inear_headphones:initialBoolean, samsung_27_curved_FHD_VA_monitor:initialBoolean, samsung_black_toner_cartridge:initialBoolean, Xtrike_Me_HP_310_gaming_headset:initialBoolean, slim_cat6_ethernet_cable:initialBoolean};
  const [cartText, setCartText] = useState(initializeValues);
  const [showButton, setShowButton] = useState({showButton: false, showButton2: false});  
  const initializeNumber = {asus_prime_H410M_E_LGA_1200_Intel_H410_SATA:0, canon_imageClass_D1650_monochrome_lazer:0, cat5e_ethernet_cable:0, cat6_green_ethernet_cable_10foot:0, decora_wall_plate_white_dual:0, energizer_batteries_alkaline_AA24:0, energizer_maxAA_batteries_8pack:0, fiber_optic_cable_LC_Duplex:0, fiber_optic_cable_singlemodeDuplex:0, globe_electric_with_slim_plug:0, JVC_inear_headphones:0, samsung_27_curved_FHD_VA_monitor:0, samsung_black_toner_cartridge:0, Xtrike_Me_HP_310_gaming_headset:0, slim_cat6_ethernet_cable:0};
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
  function logoutFunction() {
    Axios.post("http://localhost:3001/api/logout"
    ).then((res) => {
      setEmail(res.data);
      if(email.length === 0) {
        setContinuing(false);
      }else {
        setContinuing(true);
      }
    })

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
          <button className="button-29" onClick= {()=>{window.location.href = "http://localhost:3000/Cart"}}>CART</button> 
          <button className = "button-29" onClick={logoutFunction}>Logout</button>
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
        EQUIPMENT
      </div>



      <div className='bigProducts__container'>
        <div className='item__container'>
          <span className = 'company_name'>Asus</span>
          <img src = { asus_prime_H410M_E_LGA_1200_Intel_H410_SATA } alt = 'prime_H410M_E_LGA_1200_Intel_H410_SATA' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Prime H410M E-LGA 1200-Intel H410 SATA</span>
            <span className = 'price'>$199.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, asus_prime_H410M_E_LGA_1200_Intel_H410_SATA: true});}}>
            {
              cartText.asus_prime_H410M_E_LGA_1200_Intel_H410_SATA ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.asus_prime_H410M_E_LGA_1200_Intel_H410_SATA > 0)
                                                                                      setItemIncrementer({...itemIncrementer, asus_prime_H410M_E_LGA_1200_Intel_H410_SATA: itemIncrementer.asus_prime_H410M_E_LGA_1200_Intel_H410_SATA-1});                                                                          
                                                                                      addToCartListener("Prime H410M E-LGA 1200-Intel H410 SATA", itemIncrementer.asus_prime_H410M_E_LGA_1200_Intel_H410_SATA, 199.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.asus_prime_H410M_E_LGA_1200_Intel_H410_SATA} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, asus_prime_H410M_E_LGA_1200_Intel_H410_SATA: itemIncrementer.asus_prime_H410M_E_LGA_1200_Intel_H410_SATA+1}) 
                                                                                  addToCartListener("Prime H410M E-LGA 1200-Intel H410 SATA", itemIncrementer.asus_prime_H410M_E_LGA_1200_Intel_H410_SATA, 199.99);}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>



        <div className='item__container'>
          <span className = 'company_name'>Canon</span>
          <img src = { canon_imageClass_D1650_monochrome_lazer } alt = 'canon_imageClass_D1650_monochrome_lazer' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Image Class D1650 Monochrome Lazer Printer</span>
            <span className = 'price'>$399.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, canon_imageClass_D1650_monochrome_lazer: true});}}>
            {
              cartText.canon_imageClass_D1650_monochrome_lazer ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.canon_imageClass_D1650_monochrome_lazer > 0)
                                                                                      setItemIncrementer({...itemIncrementer, canon_imageClass_D1650_monochrome_lazer: itemIncrementer.canon_imageClass_D1650_monochrome_lazer-1});                                                                          
                                                                                      addToCartListener("Image Class D1650 Monochrome Lazer Printer", itemIncrementer.canon_imageClass_D1650_monochrome_lazer, 399.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.canon_imageClass_D1650_monochrome_lazer} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, canon_imageClass_D1650_monochrome_lazer: itemIncrementer.canon_imageClass_D1650_monochrome_lazer+1}) 
                                                                                  addToCartListener("Image Class D1650 Monochrome Lazer Printer", itemIncrementer.canon_imageClass_D1650_monochrome_lazer, 399.99);}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { cat5e_ethernet_cable } alt = 'cat5e_ethernet_cable' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>cat5e Ethernet Cable</span>
            <span className = 'price'>$10.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, cat5e_ethernet_cable: true});}}>
            {
              cartText.cat5e_ethernet_cable ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.cat5e_ethernet_cable > 0)
                                                                                      setItemIncrementer({...itemIncrementer, cat5e_ethernet_cable: itemIncrementer.cat5e_ethernet_cable-1});     
                                                                                      addToCartListener("cat5e Ethernet Cable", itemIncrementer.cat5e_ethernet_cable, 10.99);                                                                     
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.cat5e_ethernet_cable} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, cat5e_ethernet_cable: itemIncrementer.cat5e_ethernet_cable+1}) 
                                                                                  addToCartListener("cat5e Ethernet Cable", itemIncrementer.cat5e_ethernet_cable, 10.99); }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
         
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { cat6_green_ethernet_cable_10foot } alt = 'cat6_green_ethernet_cable_10foot' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>cat6 Green Ethernet Cable (10 Foot)</span>
            <span className = 'price'>$9.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, cat6_green_ethernet_cable_10foot: true});}}>
            {
              cartText.cat6_green_ethernet_cable_10foot ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.cat6_green_ethernet_cable_10foot > 0)
                                                                                      setItemIncrementer({...itemIncrementer, cat6_green_ethernet_cable_10foot: itemIncrementer.cat6_green_ethernet_cable_10foot-1}); 
                                                                                      addToCartListener("cat6 Green Ethernet Cable (10 Foot)", itemIncrementer.cat6_green_ethernet_cable_10foot, 9.99);                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.cat6_green_ethernet_cable_10foot} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, cat6_green_ethernet_cable_10foot: itemIncrementer.cat6_green_ethernet_cable_10foot+1}) 
                                                                                  addToCartListener("cat6 Green Ethernet Cable (10 Foot)", itemIncrementer.cat6_green_ethernet_cable_10foot, 9.99);  }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>

        <div className='item__container'>
          <span className = 'company_name'>Decora</span>
          <img src = { decora_wall_plate_white_dual } alt = 'decora_wall_plate_white_dual' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Wall Plate White Dual</span>
            <span className = 'price'>$15.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, decora_wall_plate_white_dual: true});}}>
            {
              cartText.decora_wall_plate_white_dual ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.decora_wall_plate_white_dual > 0)
                                                                                      setItemIncrementer({...itemIncrementer, decora_wall_plate_white_dual: itemIncrementer.decora_wall_plate_white_dual-1});     
                                                                                      addToCartListener("Wall Plate White Dual", itemIncrementer.decora_wall_plate_white_dual, 15.99);                                                                       
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.decora_wall_plate_white_dual} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, decora_wall_plate_white_dual: itemIncrementer.decora_wall_plate_white_dual+1}) 
                                                                                  addToCartListener("Wall Plate White Dual", itemIncrementer.decora_wall_plate_white_dual, 15.99);  }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Energizer</span>
          <img src = { energizer_batteries_alkaline_AA24 } alt = 'energizer_batteries_alkaline_AA24' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Batteries Alkaline AA (24-pack)</span>
            <span className = 'price'>$21.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, energizer_batteries_alkaline_AA24: true});}}>
            {
              cartText.energizer_batteries_alkaline_AA24 ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.energizer_batteries_alkaline_AA24 > 0)
                                                                                      setItemIncrementer({...itemIncrementer, energizer_batteries_alkaline_AA24: itemIncrementer.energizer_batteries_alkaline_AA24-1});  
                                                                                      addToCartListener("Batteries Alkaline AA (24-pack)", itemIncrementer.energizer_batteries_alkaline_AA24, 21.99);                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.energizer_batteries_alkaline_AA24} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, energizer_batteries_alkaline_AA24: itemIncrementer.energizer_batteries_alkaline_AA24+1}) 
                                                                                  addToCartListener("Batteries Alkaline AA (24-pack)", itemIncrementer.energizer_batteries_alkaline_AA24, 21.99);     }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Energizer</span>
          <img src = { energizer_maxAA_batteries_8pack } alt = 'energizer_maxAA_batteries_8pack' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Batteries Alkaline AA (8-pack)</span>
            <span className = 'price'>$8.99</span>  
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, energizer_maxAA_batteries_8pack: true});}}>
            {
              cartText.energizer_maxAA_batteries_8pack ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.energizer_maxAA_batteries_8pack > 0)
                                                                                      setItemIncrementer({...itemIncrementer, energizer_maxAA_batteries_8pack: itemIncrementer.energizer_maxAA_batteries_8pack-1});  
                                                                                      addToCartListener("Batteries Alkaline AA (8-pack)", itemIncrementer.energizer_maxAA_batteries_8pack, 8.99);                                                                             
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.energizer_maxAA_batteries_8pack} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, energizer_maxAA_batteries_8pack: itemIncrementer.energizer_maxAA_batteries_8pack+1}) 
                                                                                  addToCartListener("Batteries Alkaline AA (8-pack)", itemIncrementer.energizer_maxAA_batteries_8pack, 8.99); }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { fiber_optic_cable_LC_Duplex } alt = 'fiber_optic_cable_LC_Duplex' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Fiber Optic Cable LC-Duplex</span>
            <span className = 'price'>$6.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, fiber_optic_cable_LC_Duplex: true});}}>
            {
              cartText.fiber_optic_cable_LC_Duplex ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.fiber_optic_cable_LC_Duplex > 0)
                                                                                      setItemIncrementer({...itemIncrementer, fiber_optic_cable_LC_Duplex: itemIncrementer.fiber_optic_cable_LC_Duplex-1});    
                                                                                      addToCartListener("Fiber Optic Cable LC-Duplex", itemIncrementer.fiber_optic_cable_LC_Duplex, 6.99);                                                                       
                                                                                    } }> -</button>
                                      <span className = 'number'> {itemIncrementer.fiber_optic_cable_LC_Duplex} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, fiber_optic_cable_LC_Duplex: itemIncrementer.fiber_optic_cable_LC_Duplex+1}) 
                                                                                  addToCartListener("Fiber Optic Cable LC-Duplex", itemIncrementer.fiber_optic_cable_LC_Duplex, 6.99);}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { fiber_optic_cable_singlemodeDuplex } alt = 'Fiber Optic Cable LC-Duplex' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Fiber Optic Cable Single Mode Duplex</span>
            <span className = 'price'>$4.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, fiber_optic_cable_singlemodeDuplex: true});}}>
            {
              cartText.fiber_optic_cable_singlemodeDuplex ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.fiber_optic_cable_singlemodeDuplex > 0)
                                                                                      setItemIncrementer({...itemIncrementer, fiber_optic_cable_singlemodeDuplex: itemIncrementer.fiber_optic_cable_singlemodeDuplex-1});
                                                                                      addToCartListener("Fiber Optic Cable Single Mode Duplex", itemIncrementer.fiber_optic_cable_singlemodeDuplex, 4.99);                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.fiber_optic_cable_singlemodeDuplex} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, fiber_optic_cable_singlemodeDuplex: itemIncrementer.fiber_optic_cable_singlemodeDuplex+1}) 
                                                                                  addToCartListener("Fiber Optic Cable Single Mode Duplex", itemIncrementer.fiber_optic_cable_singlemodeDuplex, 4.99); }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Globe</span>
          <img src = { globe_electric_with_slim_plug } alt = 'globe_electric_with_slim_plug' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Globe Electric With Slim Plug</span>
            <span className = 'price'>$10.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, globe_electric_with_slim_plug: true});}}>
            {
              cartText.globe_electric_with_slim_plug ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.globe_electric_with_slim_plug > 0)
                                                                                      setItemIncrementer({...itemIncrementer, globe_electric_with_slim_plug: itemIncrementer.globe_electric_with_slim_plug-1});
                                                                                      addToCartListener("Globe Electric With Slim Plug", itemIncrementer.globe_electric_with_slim_plug, 10.99);                                                                           
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.globe_electric_with_slim_plug} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, globe_electric_with_slim_plug: itemIncrementer.globe_electric_with_slim_plug+1}) 
                                                                                  addToCartListener("Globe Electric With Slim Plug", itemIncrementer.globe_electric_with_slim_plug, 10.99);   }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>JVC</span>
          <img src = { JVC_inear_headphones } alt = 'JVC_inear_headphones' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>In-Ear Headphones</span>
            <span className = 'price'>$23.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, JVC_inear_headphones: true});}}>
            {
              cartText.JVC_inear_headphones ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.JVC_inear_headphones > 0)
                                                                                      setItemIncrementer({...itemIncrementer, JVC_inear_headphones: itemIncrementer.JVC_inear_headphones-1});  
                                                                                      addToCartListener("In-Ear Headphones", itemIncrementer.JVC_inear_headphones, 23.99);                                                                           
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.JVC_inear_headphones} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, JVC_inear_headphones: itemIncrementer.JVC_inear_headphones+1}) 
                                                                                  addToCartListener("In-Ear Headphones", itemIncrementer.JVC_inear_headphones, 23.99);  }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Samsung</span>
          <img src = { samsung_27_curved_FHD_VA_monitor } alt = 'samsung_27_curved_FHD_VA_monitor' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>27" Curved FHD-VA monitor</span>
            <span className = 'price'>$259.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, samsung_27_curved_FHD_VA_monitor: true});}}>
            {
              cartText.samsung_27_curved_FHD_VA_monitor ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.samsung_27_curved_FHD_VA_monitor > 0)
                                                                                      setItemIncrementer({...itemIncrementer, samsung_27_curved_FHD_VA_monitor: itemIncrementer.samsung_27_curved_FHD_VA_monitor-1});   
                                                                                      addToCartListener('27" Curved FHD-VA monitor', itemIncrementer.samsung_27_curved_FHD_VA_monitor, 259.99);                                                                         
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.samsung_27_curved_FHD_VA_monitor} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, samsung_27_curved_FHD_VA_monitor: itemIncrementer.samsung_27_curved_FHD_VA_monitor+1}) 
                                                                                  addToCartListener('27" Curved FHD-VA monitor', itemIncrementer.samsung_27_curved_FHD_VA_monitor, 259.99);}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Samsung</span>
          <img src = { samsung_black_toner_cartridge } alt = 'samsung_black_toner_cartridge' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Black Toner Cartridge</span>
            <span className = 'price'>$14.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, samsung_black_toner_cartridge: true});}}>
            {
              cartText.samsung_black_toner_cartridge ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.samsung_black_toner_cartridge > 0)
                                                                                      setItemIncrementer({...itemIncrementer, samsung_black_toner_cartridge: itemIncrementer.samsung_black_toner_cartridge-1});  
                                                                                      addToCartListener('Black Toner Cartridge', itemIncrementer.samsung_black_toner_cartridge, 14.99);                                                                        
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.samsung_black_toner_cartridge} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, samsung_black_toner_cartridge: itemIncrementer.samsung_black_toner_cartridge+1}) 
                                                                                  addToCartListener('Black Toner Cartridge', itemIncrementer.samsung_black_toner_cartridge, 14.99);  }}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Xtrike</span>
          <img src = { Xtrike_Me_HP_310_gaming_headset } alt = 'Xtrike_Me_HP_310_gaming_headset' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>HP 310 Gaming Headset</span>
            <span className = 'price'>$23.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, Xtrike_Me_HP_310_gaming_headset: true});}}>
            {
              cartText.Xtrike_Me_HP_310_gaming_headset ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.Xtrike_Me_HP_310_gaming_headset > 0)
                                                                                      setItemIncrementer({...itemIncrementer, Xtrike_Me_HP_310_gaming_headset: itemIncrementer.Xtrike_Me_HP_310_gaming_headset-1});                                                                          
                                                                                      addToCartListener('HP 310 Gaming Headset', itemIncrementer.Xtrike_Me_HP_310_gaming_headset, 23.99);
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.Xtrike_Me_HP_310_gaming_headset} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, Xtrike_Me_HP_310_gaming_headset: itemIncrementer.Xtrike_Me_HP_310_gaming_headset+1}) 
                                                                                  addToCartListener('HP 310 Gaming Headset', itemIncrementer.Xtrike_Me_HP_310_gaming_headset, 23.99);}}> + </button>                                    
                                     </div> 
                                     : <span className = 'add_to_cart__name'> Add to Cart </span>
            }
          </button>
        </div>
        
        <div className='item__container'>
          <span className = 'company_name'>Superstore</span>
          <img src = { slim_cat6_ethernet_cable } alt = 'Bread Picture' className = 'product_image' />
          <div className = 'price_product__container'>
            <span className = 'product_name'>Slim cat6 Ethernet Cable</span>
            <span className = 'price'>$10.99</span> 
          </div>
          <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, slim_cat6_ethernet_cable: true});}}>
            {
              cartText.slim_cat6_ethernet_cable ? <div className = 'increment__container'> 
                                      <button className = 'minus' onClick = {() => {
                                                                                    if(itemIncrementer.slim_cat6_ethernet_cable > 0)
                                                                                      setItemIncrementer({...itemIncrementer, slim_cat6_ethernet_cable: itemIncrementer.slim_cat6_ethernet_cable-1});
                                                                                      addToCartListener('Slim cat6 Ethernet Cable', itemIncrementer.slim_cat6_ethernet_cable, 10.99);                                                                          
                                                                                    } }> - </button>
                                      <span className = 'number'> {itemIncrementer.slim_cat6_ethernet_cable} </span>
                                      <button className = 'plus' onClick = {() => {setItemIncrementer({...itemIncrementer, slim_cat6_ethernet_cable: itemIncrementer.slim_cat6_ethernet_cable+1}) 
                                                                                   addToCartListener('Slim cat6 Ethernet Cable', itemIncrementer.slim_cat6_ethernet_cable, 10.99);}}> + </button>                                    
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