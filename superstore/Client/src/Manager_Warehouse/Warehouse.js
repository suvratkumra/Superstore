import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import './Warehouse.js.css'
import Axios from 'axios'
import {Navigate} from 'react-router-dom';
import { faDisplay } from "@fortawesome/free-solid-svg-icons";


function Warehouse() {

    // allocating the departments name with number
    const initialValues = {cosmetics: "1", bakery: "2", produce: "3", meat_seafood: "4", dairy_eggs: "5", equipment: "6", medical: "7", toys: "8", frozen: "9", kids_clothes: "10", men_clothes: "11", household: "12", snacks_candy: "13", women_clothes: "14"}
    const [resultFromQuery, setRes] = useState("");
    const [disable, setDisable] = useState({bakery: false, cosmetics: false, produce: false, meat_seafood: false, dairy_eggs: false, equipment: false, medical: false, toys: false, frozen: false, kids_clothes: false, men_clothes: false, household: false, snacks_candy: false, women_clothes: false});
    const [bakeryItems, setBakeryItems] = useState([])          // all the values will be appended to this
    const [produceItems, setProduceItems] = useState([])          // all the values will be appended to this
    const [CosmeticItems, setCosmeticItems] = useState([])          // all the values will be appended to this
    const [equipmentItems, setEquipmentItems] = useState([])          // all the values will be appended to this
    const [frozenItems, setFrozenItems] = useState([])          // all the values will be appended to this
    const [dairyItems, setDairyItems] = useState([])          // all the values will be appended to this
    const [householdItems, setHouseholdItems] = useState([])          // all the values will be appended to this
    const [kidItems, setKidItems] = useState([])          // all the values will be appended to this
    const [meatItems, setMeatItems] = useState([])          // all the values will be appended to this
    const [medicalItems, setMedicalItems] = useState([])          // all the values will be appended to this
    const [snackItems, setSnackItems] = useState([])          // all the values will be appended to this
    const [toyItems, setToyItems] = useState([])          // all the values will be appended to this
    const [menItems, setMenItems] = useState([])          // all the values will be appended to this
    const [womenItems, setWomenItems] = useState([])          // all the values will be appended to this


    /* FOR ALL THE DEPARTMENTS */
    const initializeNumberBakery = {"14 Grain Whole Wheat Bread":0, "Banana Chocolate Muffin":0, "Banana Loaf Cake":0, "Butter Croissant":0, "Chocolate Mini Muffin":0, "Chocolate Chip Muffin":0, "Cinnamon Raisin Bread":0, "Double Chocolate Muffin":0, "French Bread":0, "Naan Original":0, "Large Original Tortillas":0, "Tortillas Original":0, "Rolls 6 Pack":0, "Sourdough Loaf Sliced":0, "Stone Milled With Roasted Wheat":0};
    const [itemIncrementerBakery, setItemIncrementerBakery] = useState(initializeNumberBakery);

    const initializeNumberWomen = {"Women's 1X Shapewear Boyshorts": 0, "10 Comfort Cotton Socks":0, "Women's No Show Liner Socks":0, "Women_1X_Shapewear_Boyshorts":0, "Large Size Women's Cotton Bikini Briefs":0, "Women's 1X Full Shapewear Slip":0, "Women's Seamless Cross Back Sports Bra":0};
    const [itemIncrementerWomen, setItemIncrementerWomen] = useState(initializeNumberWomen);

    const initializeNumberToys = {"Music Keyboard":0, "Drill'n Fill Dentist Toy":0, "5 Car Pack Assortment":0, "Utility Trucks Toy":0, "Vehicles":0, " Shark Bite Game":0, "Soccerball":0, "Paw Patrol":0, "Wooden Puzzle Set":0, "Barbie Pop Star Doll":0, "Munchkin Duck Dunk Bath Toy":0, "Kerplunk":0, "Things": 0, "Play Day Play Balls":0, "School Bus Playset":0};
    const [itemIncrementerToys, setItemIncrementerToys] = useState(initializeNumberToys);
  
    const initializeNumberSnacks = {"Organic Berry Fruit Snacks":0, "Fruit By The Foot":0, "Chips Ahoy Mini":0, "Oreo Mini Snack Pack":0, "Original Snacks":0, "Cookies'N'Creme Snack Size Candy":0, "MultiGrain Cereal Bars Apple":0, "KitKat Hide Me Eggs":0, "Pretzel Sticks":0, "Snack Size Candy (120g)":0, "Peanut Butter Filled Pretzels":0, "Original Minis (191g)":0, "Yogurt Raisins Vanilla":0, "Pretzel Crisps Original":0};
    const [itemIncrementerSnacks, setItemIncrementerSnacks] = useState(initializeNumberSnacks);

    const initializeNumberProduce = {"Raspberries Original":0, "Coconut":0, "Cranberries":0, "Dill":0, "Fresh Mint":0, "Garlic":0, "Fruit Salad With Cherries":0, "Kale Sweet Salad":0, "Lemon":0, "Lettuce Butter":0, "Mango Red":0, "Organic Brown Bell Pepper":0, "Organic Cauliflower 6 Pack":0, "Parsnip":0, "Potatoes Yellow":0, "Raspberries":0};
    const [itemIncrementerProduce, setItemIncrementerProduce] = useState(initializeNumberProduce);

    const initializeNumberMen = {"Crew Sock":0, "Men's Poplin Pajama Pant":0, "4 Pack Men's Comfort Soft Knit Boxer":0, "Men's Large Stretch V-Neck Tee":0, "Men's Medium Fleece Crew Neck":0, "Men_Medium_Sleep_Pants":0};
    const [itemIncrementerMen, setItemIncrementerMen] = useState(initializeNumberMen);

    const initializeNumberMedical = {"Band Aid Large Gauze Pads":0, "Band Aid Wet Flex Bandages":0, "Medicated Berry Lip Balm":0, "Flexible Band Aid":0, "Foam Ring Cushion":0, "Cot Style Finger Splin":0, "Oral Medication Dispenser":0, "Self Adhering Bandage":0, "Small Rolled Gauze":0, "Medicated Anti Itch Cream":0, "Medicated Body Powder":0, "Sensitive Skin Removable Tape":0, "Medicated Cream":0, "Tylenol 500Mg Eztabs (24 Tablets)":0, "Vaporub Ointment":0};
    const [itemIncrementerMedical, setItemIncrementerMedical] = useState(initializeNumberMedical);

    const initializeNumberMeat = {"Chicken Breast ClubPack":0, "Chicken Leg ClubPack":0, "Chicken Thigh ClubPack":0, "Extra Lean Ground Beef":0, "Juicy Jumbo All Beef Wieners":0, "Lean Ground Beef 456g":0, "Minced Turkey":0, "Mild Sugar Cured Bacon":0, "Natural Top Dogs":0, "Hot Dogs":0, "Boneless Chicken Breast":0, "Mild Italian Pork (6-Pack)":0, "Pork Tendalion (2-Pack)":0, "Classic Cut Bacon":0, "Bacon Original":0};
    const [itemIncrementerMeat, setItemIncrementerMeat] = useState(initializeNumberMeat);

    const initializeNumberKid = {"1320 Sports Doll Clothes":0, "1322 Kids Doll Clothes 2 Princess Dresses":0, "Mtb1301 Doll Clothes (Set of 3)":0, "Kid Boys Double Cloth Shirt":0, "Flocked Kids Hangers":0, "Solid Wood Kids Wooden Hangers (Set of 20)":0};
    const [itemIncrementerKid, setItemIncrementerKid] = useState(initializeNumberKid);

    const initializeNumberHouse = {"Air Wick Relax Scented Oil":0, "100 Foil Wrap":0, "Bl5 Maxi Lighter":0, "Toilet Cleaner Gel":0, "150 W Ultra Liquid April Fresh":0, "Air Line and Sky":0, "Aluminum Foil":0, "Drain_Opener":0, "Fruit Fly Trap":0, "Napkins":0, "Lemon Scent Dish Liquid":0, "Bathroom Tissue":0, "Liquid Og":0, "Wet Cloth Febreze":0, "Liquid Pods Original": 0};
    const [itemIncrementerHouse, setItemIncrementerHouse] = useState(initializeNumberHouse);

    const initializeNumberFrozen = {"Fried Potatoes Crispy with Skin-On": 0, "French Fried Potatoes":0, "Macarroni and Cheese":0, "Chopped Spinach (300g)":0, "Crinkle Cut Fried Potatoes":0, "Green Peas (750g)":0, "Mixed Vegetables (750g)":0, "Mixed Vegetables (2kg)":0, "Peas And Carrots (750g)":0, "Potato Patties (20EA)":0, "Whole Kernel Crons (750g)":0, "Brocolli Florets (500g)" :0, "Mango Chunks (600g)":0, "Pacific White Shrimp Raw Peeled":0, "Sliced Strawberries (600g)":0};
    const [itemIncrementerFrozen, setItemIncrementerFrozen] = useState(initializeNumberFrozen);

    const initializeNumberEquipment = {"Prime H410M E-LGA 1200-Intel H410 SATA":0, "Image Class D1650 Monochrome Lazer Printer":0, "cat5e Ethernet Cable":0, "cat6 Green Ethernet Cable (10 Foot)":0, "Wall Plate White Dual":0, "Batteries Alkaline AA (24-pack)":0, "Batteries Alkaline AA (8-pack)":0, "Fiber Optic Cable LC-Duplex":0, "Fiber Optic Cable Single Mode Duplex":0, "Globe Electric With Slim Plug":0, "In-Ear Headphones":0, '27" Curved FHD-VA monitor':0, "Black Toner Cartridge":0, "HP 310 Gaming Headset":0, "Slim cat6 Ethernet Cable":0};
    const [itemIncrementerEquipment, setItemIncrementerEquipment] = useState(initializeNumberEquipment);

    const initializeNumberDairy = {"Balkan Style Yogurt (750g)":0, "1% milk (4L/1G)":0, "2% milk (4L/1G)":0, "3% milk (4L/1G)":0, "Margarine Original (907g)":0, "Half and Half - 10%":0, "Whipping Cream - 35%":0, "Large Eggs (12-Pack)":0, "Pasteurized Cream Cheese":0, "Salted Butter":0, "Sour Cream 14% (500ml)":0, "Unsalted Butter":0, "Free Run Brown Egg Large (12-pack)":0, "Mozzarellissima (500g)":0, "X-Large Eggs (12-pack)":0};
    const [itemIncrementerDairy, setItemIncrementerDairy] = useState(initializeNumberDairy);

    const initializeNumberCosmetic = {"Perfect Bronze Pressed Powder":0, "Perfect Glow Topaz (8.2g)":0, "Dark Spot Corrector Cream":0, "Unicorn Cosmetic Set":0, "Serum Foundation Warm Beige":0, "Cosmetic Compact":0, "Rejuvenating Foot Spa Bath":0, "Loreal Paris":0, "Trolley Cosmetic Case":0, "Trolley Cosmetic Case Blue":0, "Cheek Lip Multistick Sunrise":0, "Cool Powder Bronzer":0, "Cosmetic Wedges":0, "Soft Cosmetic Brush":0, "Friends Cosmetic Case Set (Pack of 3)":0};
    const [itemIncrementerCosmetic, setItemIncrementerCosmetic] = useState(initializeNumberCosmetic);


    function getProducts(value) {
        
        Axios.post("http://localhost:3001/api/warehouse/get_products", {
            departmentNo: value
        }).then((res) => {
            if(value === 2) {
                res.data.forEach(element => {
                    for(let key in element) {
                        setBakeryItems(bakeryItems => [...bakeryItems, element[key]]);
                    }
                })
            }
            else if(value === 1) {
                res.data.forEach(element => {
                    for(let key in element) {
                        setWomenItems(womenItems => [...womenItems, element[key]]);
                    }
                })
            }
            else if(value === 3) {
                res.data.forEach(element => {
                    for(let key in element) {
                        setProduceItems(produceItems => [...produceItems, element[key]]);
                    }
                })
            }
            else if(value === 4) {
                res.data.forEach(element => {
                    for(let key in element) {
                        setMeatItems(meatItems => [...meatItems, element[key]]);
                    }
                })
            }
            else if(value === 5) {
                res.data.forEach(element => {
                    for(let key in element) {
                        setDairyItems(dairyItems => [...dairyItems, element[key]]);
                    }
                })
            }
            else if(value === 6) {
                res.data.forEach(element => {
                    for(let key in element) {
                        setCosmeticItems(CosmeticItems => [...CosmeticItems, element[key]]);
                    }
                })
            }
            else if(value === 7) {
                res.data.forEach(element => {
                    for(let key in element) {
                        setEquipmentItems(equipmentItems => [...equipmentItems, element[key]]);
                    }
                })
            }
            else if(value === 8) {
                res.data.forEach(element => {
                    for(let key in element) {
                        setFrozenItems(frozenItems => [...frozenItems, element[key]]);
                    }
                })
            }
            else if(value === 9) {
                res.data.forEach(element => {
                    for(let key in element) {
                        setHouseholdItems(householdItems => [...householdItems, element[key]]);
                    }
                })
            }
            else if(value === 10) {
                res.data.forEach(element => {
                    for(let key in element) {
                        setKidItems(kidItems => [...kidItems, element[key]]);
                    }
                })
            }
            else if(value === 11) {
                res.data.forEach(element => {
                    for(let key in element) {
                        setMedicalItems(medicalItems => [...medicalItems, element[key]]);
                    }
                })
            }
            else if(value === 12) {
                res.data.forEach(element => {
                    for(let key in element) {
                        setMenItems(menItems => [...menItems, element[key]]);
                    }
                })
            }
            else if(value === 13) {
                res.data.forEach(element => {
                    for(let key in element) {
                        setSnackItems(snackItems => [...snackItems, element[key]]);
                    }
                })
            }
            else if(value === 14) {
                res.data.forEach(element => {
                    for(let key in element) {
                        setToyItems(toyItems => [...toyItems, element[key]]);
                    }
                })
            }            
        })
    }

    const handleSubmission = (departmentName, itemIncrementerValue) => {
        Axios.post("http://localhost:3001/api/warehouse/update_products", {
            departmentName: departmentName,
            arraySending: itemIncrementerValue
        })
    }


    return(
        <>
        <div id = "warehouseName__container">
            <span id = "warehouse__name">WAREHOUSE</span>
        </div>
            
          <div id = "overallWarehouse__container">
                <div id = "departmentCol1__container">
                    <div class = "department__container" id = "Bakery__division">
                        <button class = "button-40" onClick={() => {
                            setBakeryItems([]); getProducts(2); !disable.bakery ? setDisable({...disable, bakery: true}) : setDisable({...disable, bakery: false});
                        }}>Bakery</button>
                        <div id = "item__container">
                        {disable.bakery && bakeryItems.map((item, value)=>{
                            return <div id = "item_details__conatiner">
                                        <span id = "itemName">{item}</span>
                                        <div id = "addToCart__container">
                                            <button class="button-39" onClick = {() => {
                                                                                            if(itemIncrementerBakery[item] > 0)
                                                                                                setItemIncrementerBakery({...itemIncrementerBakery, [item]: itemIncrementerBakery[item]-1})
                                                                                        }}>-</button>
                                            <span className = "incrementer__number">{itemIncrementerBakery[item]}</span>
                                            <button class="button-39" onClick = {() => setItemIncrementerBakery({...itemIncrementerBakery, [item]: itemIncrementerBakery[item] + 1})}>+</button>
                                        </div>
                                    </div>    
                        })}
                        {disable.bakery && 
                        <button className = "button-84" type="submit" onClick = {() => {handleSubmission("bakery", {itemIncrementerBakery})}} >Submit Order For Bakery</button>
                        }   
                        </div>
                        
                    </div>
                    <br/><br/>

                    <div class = "department__container" id = "Bakery__division">
                        <button class = "button-40" onClick={() => { setMeatItems([]);
                            setMeatItems([]); getProducts(4); !disable.meat_seafood ? setDisable({...disable, meat_seafood: true}) : setDisable({...disable, meat_seafood: false});
                        }}>Meat And Seafood</button>
                        <div id = "item__container">
                        {disable.meat_seafood && meatItems.map((item, value)=>{
                            return <div id = "item_details__conatiner">
                                        <span id = "itemName">{item}</span>
                                        <div id = "addToCart__container">
                                            <button class="button-39" onClick = {() => {
                                                                                            if(itemIncrementerMeat[item] > 0)
                                                                                                setItemIncrementerMeat({...itemIncrementerMeat, [item]: itemIncrementerMeat[item]-1})
                                                                                        }}>-</button>
                                            <span className = "incrementer__number">{itemIncrementerMeat[item]}</span>
                                            <button class="button-39" onClick = {() => setItemIncrementerBakery({...itemIncrementerMeat, [item]: itemIncrementerMeat[item] + 1})}>+</button>
                                        </div>
                                    </div>    
                        })}
                        {disable.meat_seafood && 
                        <button className = "button-84" type="submit" onClick = {() => {handleSubmission("Meat/Seafood", {itemIncrementerMeat})}} >Submit Order For Meat/Seafood</button>
                        }   
                        </div>
                    </div>
                    <br/><br/>
                    <div class = "department__container" id = "Bakery__division">
                        <button class = "button-40" onClick={() => {
                            setDairyItems([]); getProducts(5); !disable.dairyItems ? setDisable({...disable, dairy_eggs: true}) : setDisable({...disable, dairy_eggs: false})
                        }}>Dairy/Eggs</button>
                        <div id = "item__container">
                        {disable.dairy_eggs && dairyItems.map((item, value)=>{
                            return <div id = "item_details__conatiner">
                                        <span id = "itemName">{item}</span>
                                        <div id = "addToCart__container">
                                            <button class="button-39" onClick = {() => {
                                                                                            if(itemIncrementerDairy[item] > 0)
                                                                                                setItemIncrementerDairy({...itemIncrementerDairy, [item]: itemIncrementerDairy[item]-1})
                                                                                        }}>-</button>
                                            <span className = "incrementer__number">{itemIncrementerDairy[item]}</span>
                                            <button class="button-39" onClick = {() => setItemIncrementerDairy({...itemIncrementerDairy, [item]: itemIncrementerDairy[item] + 1})}>+</button>
                                        </div>
                                    </div>    
                        })}
                        {disable.dairy_eggs && 
                        <button className = "button-84" type="submit" onClick = {() => {handleSubmission("Dairy/Eggs", {itemIncrementerDairy})}} >Submit Order For Dairy/Eggs</button>
                        }   
                        </div>
                        
                    </div>
                    <br/><br/>
                    <div class = "department__container" id = "Bakery__division">
                        <button class = "button-40" onClick={() => {
                            setCosmeticItems([]); getProducts(6); !disable.cosmetics ? setDisable({...disable, cosmetics: true}) : setDisable({...disable, cosmetics: false})
                        }}>Cosmetics</button>
                        <div id = "item__container">
                        {disable.cosmetics && CosmeticItems.map((item, value)=>{
                            return <div id = "item_details__conatiner">
                                        <span id = "itemName">{item}</span>
                                        <div id = "addToCart__container">
                                            <button class="button-39" onClick = {() => {
                                                                                            if(itemIncrementerCosmetic[item] > 0)
                                                                                                setItemIncrementerCosmetic({...itemIncrementerCosmetic, [item]: itemIncrementerCosmetic[item]-1})
                                                                                        }}>-</button>
                                            <span className = "incrementer__number">{itemIncrementerCosmetic[item]}</span>
                                            <button class="button-39" onClick = {() => setItemIncrementerCosmetic({...itemIncrementerCosmetic, [item]: itemIncrementerCosmetic[item] + 1})}>+</button>
                                        </div>
                                    </div>    
                        })}
                        {disable.cosmetics && 
                        <button className = "button-84" type="submit" onClick = {() => {handleSubmission("Cosmetics", {itemIncrementerCosmetic})}} >Submit Order For Cosmetics</button>
                        }   
                        </div>
                        
                    </div>
                    <br/><br/>
                    <div class = "department__container" id = "Bakery__division">
                        <button class = "button-40" onClick={() => {
                            setEquipmentItems([]); getProducts(7); !disable.equipment ? setDisable({...disable, equipment: true}) : setDisable({...disable, equipment: false})
                        }}>Equipment</button>
                        <div id = "item__container">
                        {disable.equipment && equipmentItems.map((item, value)=>{
                            return <div id = "item_details__conatiner">
                                        <span id = "itemName">{item}</span>
                                        <div id = "addToCart__container">
                                            <button class="button-39" onClick = {() => {
                                                                                            if(itemIncrementerEquipment[item] > 0)
                                                                                                setItemIncrementerEquipment({...itemIncrementerEquipment, [item]: itemIncrementerEquipment[item]-1})
                                                                                        }}>-</button>
                                            <span className = "incrementer__number">{itemIncrementerEquipment[item]}</span>
                                            <button class="button-39" onClick = {() => setItemIncrementerEquipment({...itemIncrementerEquipment, [item]: itemIncrementerEquipment[item] + 1})}>+</button>
                                        </div>
                                    </div>    
                        })}
                        {disable.equipment && 
                        <button className = "button-84" type="submit" onClick = {() => {handleSubmission("Equipment", {itemIncrementerEquipment})}} >Submit Order For Equipment</button>
                        }   
                        </div>
                        
                    </div>
              </div>

              <div id = "departmentCol2__container">
              <div class = "department__container" id = "Bakery__division">
                <button class = "button-40" onClick={() => {
                    setProduceItems([]); getProducts(3); !disable.produce ? setDisable({...disable, produce: true}) : setDisable({...disable, produce: false})
                }}>Produce</button>
                <div id = "item__container">
                {disable.produce && produceItems.map((item, value)=>{
                    return <div id = "item_details__conatiner">
                                <span id = "itemName">{item}</span>
                                <div id = "addToCart__container">
                                    <button class="button-39" onClick = {() => {
                                                                                    if(itemIncrementerProduce[item] > 0)
                                                                                        setItemIncrementerProduce({...itemIncrementerProduce, [item]: itemIncrementerProduce[item]-1})
                                                                                }}>-</button>
                                    <span className = "incrementer__number">{itemIncrementerProduce[item]}</span>
                                    <button class="button-39" onClick = {() => setItemIncrementerProduce({...itemIncrementerProduce, [item]: itemIncrementerProduce[item] + 1})}>+</button>
                                </div>
                            </div>    
                })}
                {disable.produce && 
                <button className = "button-84" type="submit" onClick = {() => {handleSubmission("Produce", {itemIncrementerProduce})}} >Submit Order For Produce</button>
                }   
                </div>
            </div>
                <br/><br/>
                <div class = "department__container" id = "Bakery__division">
                        <button class = "button-40" onClick={() => {
                            setFrozenItems([]); getProducts(8); !disable.frozen ? setDisable({...disable, frozen: true}) : setDisable({...disable, frozen: false})
                        }}>Frozen</button>
                        <div id = "item__container">
                        {disable.frozen && frozenItems.map((item, value)=>{
                            return <div id = "item_details__conatiner">
                                        <span id = "itemName">{item}</span>
                                        <div id = "addToCart__container">
                                            <button class="button-39" onClick = {() => {
                                                                                            if(itemIncrementerFrozen[item] > 0)
                                                                                                setItemIncrementerFrozen({...itemIncrementerFrozen, [item]: itemIncrementerFrozen[item]-1})
                                                                                        }}>-</button>
                                            <span className = "incrementer__number">{itemIncrementerFrozen[item]}</span>
                                            <button class="button-39" onClick = {() => setItemIncrementerFrozen({...itemIncrementerFrozen, [item]: itemIncrementerFrozen[item] + 1})}>+</button>
                                        </div>
                                    </div>    
                        })}
                        {disable.frozen && 
                        <button className = "button-84" type="submit" onClick = {() => {handleSubmission("Frozen", {itemIncrementerFrozen})}} >Submit Order For Frozen</button>
                        }   
                        </div>
                    </div>
                    <br/><br/>
                    <div class = "department__container" id = "Bakery__division">
                        <button class = "button-40" onClick={() => {
                            setHouseholdItems([]); getProducts(9); !disable.household ? setDisable({...disable, household: true}) : setDisable({...disable, household: false})
                        }}>Household</button>
                        <div id = "item__container">
                        {disable.household && householdItems.map((item, value)=>{
                            return <div id = "item_details__conatiner">
                                        <span id = "itemName">{item}</span>
                                        <div id = "addToCart__container">
                                            <button class="button-39" onClick = {() => {
                                                                                            if(itemIncrementerHouse[item] > 0)
                                                                                                setItemIncrementerHouse({...itemIncrementerHouse, [item]: itemIncrementerHouse[item]-1})
                                                                                        }}>-</button>
                                            <span className = "incrementer__number">{itemIncrementerHouse[item]}</span>
                                            <button class="button-39" onClick = {() => setItemIncrementerHouse({...itemIncrementerHouse, [item]: itemIncrementerHouse[item] + 1})}>+</button>
                                        </div>
                                    </div>    
                        })}
                        {disable.household && 
                        <button className = "button-84" type="submit" onClick = {() => {handleSubmission("Household", {itemIncrementerHouse})}} >Submit Order For Household</button>
                        }   
                        </div>
                    </div>
                    <br/><br/>
                    <div class = "department__container" id = "Bakery__division">
                        <button class = "button-40" onClick={() => {
                            setKidItems([]); getProducts(10); !disable.kids_clothes ? setDisable({...disable, kids_clothes: true}) : setDisable({...disable, kids_clothes: false})
                        }}>Kids Clothes</button>
                        <div id = "item__container">
                        {disable.kids_clothes && kidItems.map((item, value)=>{
                            return <div id = "item_details__conatiner">
                                        <span id = "itemName">{item}</span>
                                        <div id = "addToCart__container">
                                            <button class="button-39" onClick = {() => {
                                                                                            if(itemIncrementerKid[item] > 0)
                                                                                                setItemIncrementerKid({...itemIncrementerKid, [item]: itemIncrementerKid[item]-1})
                                                                                        }}>-</button>
                                            <span className = "incrementer__number">{itemIncrementerKid[item]}</span>
                                            <button class="button-39" onClick = {() => setItemIncrementerKid({...itemIncrementerKid, [item]: itemIncrementerKid[item] + 1})}>+</button>
                                        </div>
                                    </div>    
                        })}
                        {disable.kids_clothes && 
                        <button className = "button-84" type="submit" onClick = {() => {handleSubmission("Kids Clothes", {itemIncrementerKid})}} >Submit Order For Clothes (Kids)</button>
                        }   
                        </div>
                    </div>
                    <br/><br/>
                    <div class = "department__container" id = "Bakery__division">
                        <button class = "button-40" onClick={() => {
                            setMedicalItems([]); getProducts(11); !disable.medical ? setDisable({...disable, medical: true}) : setDisable({...disable, medical: false})
                        }}>Medical</button>
                        <div id = "item__container">
                        {disable.medical && medicalItems.map((item, value)=>{
                            return <div id = "item_details__conatiner">
                                        <span id = "itemName">{item}</span>
                                        <div id = "addToCart__container">
                                            <button class="button-39" onClick = {() => {
                                                                                            if(itemIncrementerMedical[item] > 0)
                                                                                                setItemIncrementerMedical({...itemIncrementerMedical, [item]: itemIncrementerMedical[item]-1})
                                                                                        }}>-</button>
                                            <span className = "incrementer__number">{itemIncrementerMedical[item]}</span>
                                            <button class="button-39" onClick = {() => setItemIncrementerMedical({...itemIncrementerMedical, [item]: itemIncrementerMedical[item] + 1})}>+</button>
                                        </div>
                                    </div>    
                        })}
                        {disable.medical && 
                        <button className = "button-84" type="submit" onClick = {() => {handleSubmission("Medical", {itemIncrementerMedical})}} >Submit Order For Medical</button>
                        }   
                        </div>
                    </div>
                    <br/><br/>
                    
              </div>

              <div id = "departmentCol3__container">
                <div class = "department__container" id = "Bakery__division">
                        <button class = "button-40" onClick={() => {
                            setWomenItems([]); getProducts(1); !disable.women_clothes ? setDisable({...disable, women_clothes: true}) : setDisable({...disable, women_clothes: false})
                        }}>Women Clothes</button>
                        <div id = "item__container">
                        {disable.women_clothes && womenItems.map((item, value)=>{
                            return <div id = "item_details__conatiner">
                                        <span id = "itemName">{item}</span>
                                        <div id = "addToCart__container">
                                            <button class="button-39" onClick = {() => {
                                                                                            if(itemIncrementerWomen[item] > 0)
                                                                                                setItemIncrementerFrozen({...itemIncrementerWomen, [item]: itemIncrementerWomen[item]-1})
                                                                                        }}>-</button>
                                            <span className = "incrementer__number">{itemIncrementerWomen[item]}</span>
                                            <button class="button-39" onClick = {() => setItemIncrementerWomen({...itemIncrementerWomen, [item]: itemIncrementerWomen[item] + 1})}>+</button>
                                        </div>
                                    </div>    
                        })}
                        {disable.women_clothes && 
                        <button className = "button-84" type="submit" onClick = {() => {handleSubmission("WomenClothes", {itemIncrementerWomen})}} >Submit Order For Clothes (Women)</button>
                        }   
                        </div>
                    </div>

                        <br/><br/>
                <div class = "department__container" id = "Bakery__division">
                <button class = "button-40" onClick={() => {
                    setMenItems([]); getProducts(12); !disable.men_clothes ? setDisable({...disable, men_clothes: true}) : setDisable({...disable, men_clothes: false})
                }}>Men Clothes</button>
                <div id = "item__container">
                {disable.men_clothes && menItems.map((item, value)=>{
                    return <div id = "item_details__conatiner">
                                <span id = "itemName">{item}</span>
                                <div id = "addToCart__container">
                                    <button class="button-39" onClick = {() => {
                                                                                    if(itemIncrementerMen[item] > 0)
                                                                                        setItemIncrementerFrozen({...itemIncrementerMen, [item]: itemIncrementerMen[item]-1})
                                                                                }}>-</button>
                                    <span className = "incrementer__number">{itemIncrementerMen[item]}</span>
                                    <button class="button-39" onClick = {() => setItemIncrementerMen({...itemIncrementerMen, [item]: itemIncrementerMen[item] + 1})}>+</button>
                                </div>
                            </div>    
                })}
                {disable.men_clothes && 
                <button className = "button-84" type="submit" onClick = {() => {handleSubmission("MenClothes", {itemIncrementerMen})}} >Submit Order For Clothes (Men)</button>
                }   
                </div>
            </div>

            <br/><br/>

            <div class = "department__container" id = "Bakery__division">
                <button class = "button-40" onClick={() => {
                    setSnackItems([]); getProducts(13); !disable.snacks_candy ? setDisable({...disable, snacks_candy: true}) : setDisable({...disable, snacks_candy: false})
                }}>Snacks/Candy</button>
                <div id = "item__container">
                {disable.snacks_candy && snackItems.map((item, value)=>{
                    return <div id = "item_details__conatiner">
                                <span id = "itemName">{item}</span>
                                <div id = "addToCart__container">
                                    <button class="button-39" onClick = {() => {
                                                                                    if(itemIncrementerSnacks[item] > 0)
                                                                                        setItemIncrementerSnacks({...itemIncrementerSnacks, [item]: itemIncrementerSnacks[item]-1})
                                                                                }}>-</button>
                                    <span className = "incrementer__number">{itemIncrementerSnacks[item]}</span>
                                    <button class="button-39" onClick = {() => setItemIncrementerSnacks({...itemIncrementerSnacks, [item]: itemIncrementerSnacks[item] + 1})}>+</button>
                                </div>
                            </div>    
                })}
                {disable.snacks_candy && 
                <button className = "button-84" type="submit" onClick = {() => {handleSubmission("Snacks", {itemIncrementerSnacks})}} >Submit Order For Snacks</button>
                }   
                </div>
            </div>

                <br/><br/>

            <div class = "department__container" id = "Bakery__division">
                <button class = "button-40" onClick={() => {
                    setToyItems([]); getProducts(14); !disable.toys ? setDisable({...disable, toys: true}) : setDisable({...disable, toys: false})
                }}>Toys</button>
                <div id = "item__container">
                {disable.toys && toyItems.map((item, value)=>{
                    return <div id = "item_details__conatiner">
                                <span id = "itemName">{item}</span>
                                <div id = "addToCart__container">
                                    <button class="button-39" onClick = {() => {
                                                                                    if(itemIncrementerToys[item] > 0)
                                                                                        setItemIncrementerToys({...itemIncrementerToys, [item]: itemIncrementerToys[item]-1})
                                                                                }}>-</button>
                                    <span className = "incrementer__number">{itemIncrementerToys[item]}</span>
                                    <button class="button-39" onClick = {() => setItemIncrementerToys({...itemIncrementerToys, [item]: itemIncrementerToys[item] + 1})}>+</button>
                                </div>
                            </div>    
                })}
                {disable.toys && 
                <button className = "button-84" type="submit" onClick = {() => {handleSubmission("Toys", {itemIncrementerToys})}} >Submit Order For Toys</button>
                }   
                </div>
            </div>

        </div>
        </div>


          



        </>
    )
    
}

export default Warehouse;