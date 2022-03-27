import React from 'react'
import { useNavigate } from "react-router-dom";
import "./main.css";
import Search from '../images/search.png';
import { useState } from 'react';
import search from '../images/search.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


var FontAwesome = require('react-fontawesome');

function MainPage() {
  const [username, setSearch] = useState('')

  return (
    <>
    
    <div className='header__container'>
      <div className='superstore__container'>
          <span class = "name1"><h1 className = 'superstore'> SUPERSTORE </h1>  </span>
      </div>  
      

      <div className= 'cart__container'>
        <span className = "cartName"> CART</span>
      </div>

      <div className= 'menu__container'>
        <span className = "menu"> MENU</span>
      </div>
    </div>

    <div className='search__container'>
      <div className='searchbar_withImage'>
        <div className='searchbar__container'>
          <input className = 'searchbar' 
            type = "text" 
            name = "search" 
            placeholder='Search'
          />
        </div>
        <div className='search__image'>
          <img src= {search} alt="Logo"/>
        </div>
      </div>
       
        <div className= 'ageName__container'>
          <span className = "ageName"> Filter by Age</span>
        </div>
    </div>

      <div className='departments__container'>
        <span className='department__name'>DEPARTMENTS</span>
        <div className='row1__container'>
          <div className='Bakery'>
            <button className="favorite buttonStyle"
                type="button">
                BAKERY
            </button>
          </div>

          <div className='produce_container'>
            <button className="favorite buttonStyle"
                  type="button">
                  PRODUCE
              </button>
          </div> 

          <div className='dairy_container'>
            <button className="favorite buttonStyle"
                  type="button">
                  DAIRY/EGGS
              </button>
          </div> 
        </div>

        <div className='row2__container'>
          <div className='equipment_container'>
            <button className="favorite buttonStyle"
                  type="button">
                  EQUIPMENT
              </button>
          </div> 


          <div className='meat_container'>
            <button className="favorite buttonStyle"
                  type="button">
                  MEAT/SEAFOOD
              </button>
          </div> 

          <div className='frozen_container'>
            <button className="favorite buttonStyle"
                  type="button">
                  FROZEN
              </button>
          </div>
        </div>

        <div className='row3__container'>
          <div className='toys__container'>
            <button className="buttonStyle"
                  type="button">
                  TOYS
            </button>
          </div>

          <div className='Cosmetics__container'>
            <button className="buttonStyle"
                  type="button">
                  CONTAINERS
            </button>
          </div>

          <div className='Medical__container'>
            <button className="buttonStyle"
                  type="button">
                  MEDICAL
            </button>
          </div>
        </div>
      </div>        

      <footer>
        <div className='footer__container'>
          <div className='about__container'>
            ABOUT
          </div>
          <div className='contact__container'>
            CONTACT US
          </div>
          <div className='news_container'>
            LATEST NEWS
          </div>
        </div>
      </footer>


  

    </>
  )
}
export default MainPage;