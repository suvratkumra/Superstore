import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import "./main.css";
import Search from '../images/search.png';
import { useState } from 'react';
import search from '../images/search.png';
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';

//Importing all the departments.
var FontAwesome = require('react-fontawesome');



function MainPage(props) {
  const [username, setSearch] = useState('')
  const [counter, setCounter] = useState(-1);
  const [textValue, setTextValue] = useState({val: ""});
  const [dataRetrieved, setDataRetrieved] = useState([]);
  const [isPressed, setIsPressed] = useState(false);

  const [cartText, setCartText] = useState("");
  const [itemIncrementer, setItemIncrementer] = useState("");

  const onChangeHandler = (e) => {
  
    setTextValue({val: e.target.value});

    // this is the data which is updated every second.
    console.log(textValue.val);

    Axios.post("http://localhost:3001/api/search_bar", {
      textValue: textValue.val
    }).then((res) => {
      setDataRetrieved([]);       // resetting
      res.data.forEach(element => {
        for(let key in element) {
          setDataRetrieved(dataRetrieved => [...dataRetrieved, element[key]]);
        }
      })
      console.log(dataRetrieved);
      
    })

  }


  return (
    <>
    
    <div className='header__container_in_main'>
      <div className='superstore__container'>
          <span class = "name1"><h1 className = 'superstore'> SUPERSTORE </h1>  </span>
      </div>  

      <div className= 'cart__container'>
        <span className = "cartName">CART</span>
      </div>

      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <div className="menu__box">
          <div className="menu__item">
            <a href ="#">View History</a>
            <a href="#">Account Settings</a>
          </div>
          
        </div>
      </div>
      
    </div>

    <div className='search__container'>
      <div className='searchbar_withImage'>
        <div className='searchbar__container'>
          <input className = 'searchbar' 
            type = "text" 
            placeholder='Search....'
            value={textValue.val}
            onChange={onChangeHandler}
            
          />
          
          { Object.values(dataRetrieved).map((item, value) => {
            return <div id = "searchBarListing__container">
              {/* <a href="#">{item} */}
                  <button className="favorite buttonStyle2"
                  type="button" onClick={() => {

                    // if any of the option is clicked from the search bar, then print the same 
                    // same item on the screen with its price and option to add to cart 
                    // CAN YOU CHECK WHY THIS IS NOT GETTING DISPLAYED WHEN I SELECT ANY OPTION FROM THE SEARCH BAR
                    
                    <div className='item__container'>
                  <div className = 'price_product__container'>
                    <span className = 'product_name'>{item}</span>
                    {/* <span className = 'price'>$3.21</span>  */}
                  </div>
                  <button className = 'add_to_cart__container' onClick = {() => {setCartText({...cartText, item: true});}}>
                    {
                      cartText.grainBread ? <div className = 'increment__container'> 
                        <button className = 'minus' onClick = {() => {
                                if(itemIncrementer.item > 0)
                                  setItemIncrementer({...itemIncrementer, grainBread: itemIncrementer.item-1});                                                                          
                                } }> - </button>
                        <span className = 'number'> {itemIncrementer.item} </span>
                        <button className = 'plus' onClick = {() => setItemIncrementer({...itemIncrementer, item: itemIncrementer.item+1}) }> + </button>                                    
                        </div> 
                        : <span className = 'add_to_cart__name'> Add to Cart </span>
                        }
                    </button>
                    </div>
                    }}>
                  {item}
                  </button>
              {/* </a> */}
              
              
            </div>
          }) }
    
          

        </div>
        <div className='search__image'>
          <img src= {search} alt="Logo"/>
        </div>
      </div>

      
       
      <div className="dropdown">
        <button className="button">Filter by Age</button>
        <div className="dropdown-content">

          
          <a href="#" onClick= {() => {
            setCounter(0);
            }}>1 to 10 years</a>
         


          <a href="#" onClick= {() => {
            setCounter(1);
          }}>11 to 25 years</a>
    
          <a href="#"onClick= {() => {
            setCounter(2);
          }}>26 to 50 years</a>

         
          <a href="#"onClick= {() => {
            setCounter(3);
          }}>50+ years</a>
        </div>
      </div>
    </div>
    

      <div className='departments__container'>
        <span className='department__name'>DEPARTMENTS</span>
        <div className='row1__container'>
          <div className='Bakery'>
            { 
                <button className="favorite buttonStyle"
                type="button" onClick={() => {
                  window.location.href = "http://localhost:3000/Departments/Bakery";
                }}>
              BAKERY
              </button>
            }
          </div>

          <div className='produce_container'>
            {
              (counter === 0) ? null :
              <button className="favorite buttonStyle"
                  type="button"onClick={() => {
                    window.location.href = "http://localhost:3000/Departments/Produce";
                  }}>
                  PRODUCE
              </button>
            }
          </div> 

          <div className='dairy_container'>
            {
            (counter === 0) ? null :
            <button className="favorite buttonStyle"
                  type="button"onClick={() => {
                    window.location.href = "http://localhost:3000/Departments/Dairy";
                  }}>
                  DAIRY/EGGS
              </button> 
            }
          </div> 

          
        </div>

        <div className='row2__container'>
          <div className='meat_container'>
            {
            (counter === 0) ? null :
            <button className="favorite buttonStyle"
                  type="button" onClick={() => {
                    window.location.href = "http://localhost:3000/Departments/Meat";
                  }}>
                  MEAT/SEAFOOD
              </button>
            }
          </div> 

          <div className='frozen_container'>
            {
            (counter === 0) ? null :
            <button className="favorite buttonStyle"
                  type="button" onClick={() => {
                    window.location.href = "http://localhost:3000/Departments/Frozen";
                  }}>
                  FROZEN
              </button>
            }
          </div>

          <div className='Kids__C__container'>
            {
            (counter === 1 || counter === 2 || counter === 3) ? null :
            <button className="buttonStyle"
                  type="button" onClick={() => {
                    window.location.href = "http://localhost:3000/Departments/Snacks";
                  }}>
                  SNACKS/CANDY
            </button> 
          }
          </div>
          

          <div className='Cosmetics__container'>
            {
            (counter === 0 || counter === 3) ? null :
            <button className="buttonStyle"
                 type="button" onClick={() => {
                  window.location.href = "http://localhost:3000/Departments/Cosmetics";
                }}>
                  COSMETICS
            </button>   
          } 
          </div>
        </div>

        <div className='row3__container'>
          

          <div className='Medical__container'>
            {
              (counter === 0) ? null :
              <button className="buttonStyle"
                    type="button" onClick={() => {
                      window.location.href = "http://localhost:3000/Departments/Medical";
                    }}>
                    MEDICAL
              </button>
            }
          </div>
          <div className='Kids__C__container'>
              {
              (counter === 1 || counter === 2 || counter === 3) ? null :
              <button className="buttonStyle"
                    type="button" onClick={() => {
                      window.location.href = "http://localhost:3000/Departments/Kid_Clothes";
                    }}>
                    KIDS CLOTHES
              </button> 
            }
            </div>

            <div className='Men__C__container'>
              {
              (counter === 0) ? null :
              <button className="buttonStyle"
                    type="button" onClick={() => {
                      window.location.href = "http://localhost:3000/Departments/MenClothes";
                    }}>
                    MEN CLOTHES
              </button>
              }
            </div>

            <div className='Women__C__container'>
              {
                (counter === 0) ? null :
                <button className="buttonStyle"
                      type="button" onClick={() => {
                        window.location.href = "http://localhost:3000/Departments/WomenClothes";
                      }}>
                      WOMEN CLOTHES
                </button>
              }
            </div>
          </div>
          </div>
      
          <div className='row5__container'>

            <div className='Household__container'>
              {
                (counter === 0) ? null :
                <button className="buttonStyle"
                      type="button" onClick={() => {
                        window.location.href = "http://localhost:3000/Departments/Household";
                      }}>
                      HOUSEHOLD
                </button>
              }
              </div>
            <div className='toys__container'>
            {
              (counter === 1 || counter === 2 || counter === 3) ? null :
              <button className="buttonStyle"
                    type="button" onClick={() => {
                      window.location.href = "http://localhost:3000/Departments/Toys";
                    }}>
                    TOYS
              </button> 
            }
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