import React from 'react'
import { useNavigate } from "react-router-dom";
import "./main.css";
import Search from '../images/search.png';
import { useState } from 'react';
import search from '../images/search.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Importing all the departments.


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
       
      <div className="dropdown">
        <button className="button">Filter by Age</button>
        <div className="dropdown-content">
          <a href="#">1 to 10 years</a>
          <a href="#">11 to 25 years</a>
          <a href="#">26 to 50 years</a>
          <a href="#">50+ years</a>
        </div>
      </div>
    </div>

      <div className='departments__container'>
        <span className='department__name'>DEPARTMENTS</span>
        <div className='row1__container'>
          <div className='Bakery'>
            <button className="favorite buttonStyle"
                type="button" onClick={() => {
                  window.location.href = "http://localhost:3000/Departments/Bakery";
                }}>
                BAKERY
            </button>
          </div>

          <div className='produce_container'>
            <button className="favorite buttonStyle"
                  type="button"onClick={() => {
                    window.location.href = "http://localhost:3000/Departments/Produce";
                  }}>
                  PRODUCE
              </button>
          </div> 

          <div className='dairy_container'>
            <button className="favorite buttonStyle"
                  type="button"onClick={() => {
                    window.location.href = "http://localhost:3000/Departments/Dairy";
                  }}>
                  DAIRY/EGGS
              </button>
          </div> 
        </div>

        <div className='row2__container'>
          <div className='equipment_container'>
            <button className="favorite buttonStyle"
                  type="button" onClick={() => {
                    window.location.href = "http://localhost:3000/Departments/Equipment";
                  }}>
                  EQUIPMENT
              </button>
          </div> 


          <div className='meat_container'>
            <button className="favorite buttonStyle"
                  type="button" onClick={() => {
                    window.location.href = "http://localhost:3000/Departments/Meat";
                  }}>
                  MEAT/SEAFOOD
              </button>
          </div> 

          <div className='frozen_container'>
            <button className="favorite buttonStyle"
                  type="button" onClick={() => {
                    window.location.href = "http://localhost:3000/Departments/Frozen";
                  }}>
                  FROZEN
              </button>
          </div>
        </div>

        <div className='row3__container'>
          <div className='toys__container'>
            <button className="buttonStyle"
                  type="button" onClick={() => {
                    window.location.href = "http://localhost:3000/Departments/Toys";
                  }}>
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
                  type="button" onClick={() => {
                    window.location.href = "http://localhost:3000/Departments/Medical";
                  }}>
                  MEDICAL
            </button>
          </div>
        </div>
      </div>        

      <footer>
        <div className='footer__container'>
          <div className='headings'>
            <div className='about__container'>
              <span>ABOUT</span>
            </div>
            <div className='contact__container'>
              CONTACT US
            </div>
            <div className='news__container'>
              LATEST NEWS
            </div>
          </div>
          <hr/>
          <div className='informations'>
            <div className='about__information'>
              A superstore website where <br/>
              families can forget about their problems <br/>
              and have a smooth shopping experience with <br/>
              wide variety of products to choose from!<br/>
            </div>

            <div className='contactUs__information'>
              <span className='name'>Suvrat Kumra<a href = 'https://www.linkedin.com/in/suvrat-kumra-420017193/'> (LinkedIn)</a></span><br/>
              <span className='name'>Shreya Patel<a href = 'https://www.linkedin.com/in/shreya-patel-9902b61b7'> (LinkedIn)</a></span>
            </div>

            <div className='latestNews__container'>
              MORE DEALS AND PROMOS <br/>COMING SOON!...<br/>
            </div>
          </div>
          
        </div>
      </footer>


  

    </>
  )
}
export default MainPage;