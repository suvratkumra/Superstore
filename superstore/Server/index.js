// This is the server which will run our application, the most crucial file, the brains of the project.
// Run this server using NODEMON. to install it
// npm install nodemon
// to run the server so that if you save it, you dont have to restart the program and it does it automatically, 
// use the command "npm run devStart"
//creating an express server
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
var router = express.Router();
// for validation to the backend. we add the below package
var expressValidator = require('express-validator');
const mysql = require('mysql');      // to get the mysql dependency
const { restart } = require('nodemon');
const e = require('express');
const { application } = require('express');


var emailConstant = "";

const db = mysql.createPool({
    host: 'localhost',                      // host name
    user: 'root',                           // username
    password: 'password',                   // the password stored in vault
    database: 'superstore_database'             // this is the name of the table
})

// this is the middle ware, you need this, without this, alot of errors.
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())     // allows to get the request from frontend.
app.use(expressValidator());
// res is to send, THE RESPONSE, to send it to the front end.
// req is require, REQUIRE, get information from the front end.
app.get('/', (req, res) => {
    res.send("hello");
})

app.post('/api/reset_password', (req, res) => {
    const email = req.body.email;
    const hintAnswer = req.body.hintAnswer;

    const extractAnswer = "SELECT Hint_Answer FROM login_details WHERE Email_Id = ?;";
    db.query(extractAnswer, [email], (err, result) => {
        if(Object.values(result[0])[0] !== hintAnswer){
            res.send("Wrong Answer to your question.");
        }
        else{
            // sending the password is back
            const extractPassword = "SELECT Password FROM login_details WHERE Email_Id = ?;";
            db.query(extractPassword, [email], (err2, result2) => {
                res.send(result2);
            })
        }
    })
})

app.post('/api/forgot_password', (req, res) => {
    const email = req.body.email;

    const sqlExtract = "SELECT Hint_Question FROM login_details WHERE Email_Id = ?";
    db.query(sqlExtract, [email], (err, result) => {
        if(result.length === 0) {
            res.send("User with this Email does not exist");
        }
        else if(result.length > 0) {
            res.send(result);
        }
    })
})


app.post('/api/signup', (req, res) => {

    // req.checkBody('username', 'Username cannot be empty').notEmpty();
    // req.checkBody('email', 'Email cannot be empty').notEmpty();
    // req.checkBody('password', 'Password cannot be empty').notEmpty();

    // const errors = req.validationErrors();

    // if (errors) {
    //     console.log(`errors: ${JSON.stringify(errors)}`);

    const cyrb53 = function(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
        for (let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
        h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
        return 4294967296 * (2097151 & h2) + (h1>>>0);
    };

    const username = req.body.username;
    const email = req.body.email;
    const password = cyrb53(req.body.password);
    const hintQuestion = req.body.hintQuestion;
    const hintAnswer = cyrb53(req.body.hintAnswer);

    const sqlCheck = "SELECT * FROM login_details WHERE Email_Id = ?";
    db.query(sqlCheck, [email], (err, result) => {
        console.log(result.length);
        if(result.length > 0) {
            res.send("User already registered with this Email");
        }
        else {
            const sqlInsert = "INSERT INTO login_details (Username, Email_Id, Password, Hint_Question, Hint_Answer) VALUES (?,?,?,?,?);";
            //console.log(sqlInsert, [username, email, password]);
            db.query(sqlInsert, [username, email, password, hintQuestion, hintAnswer], (err, result) => {
                res.send("successful")
            })
        }
    })

    
})

app.post('/api/login', (req, res) => {

    const cyrb53 = function(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
        for (let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
        h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
        return 4294967296 * (2097151 & h2) + (h1>>>0);
    };


    const email = req.body.email;
    const password = cyrb53(req.body.password);

    const sqlCheck = "SELECT * FROM login_details WHERE Email_Id = ? AND Password = ?";
    db.query(sqlCheck, [email, password], (err, result) => {
        if(result.length != 0) {
            emailConstant = email;
            return res.send("User Found, redirecting to the store page");
        }
    
    })
})


app.post('/api/manager_login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const sqlSearchManager = "SELECT Email_Id, Password FROM manager_details WHERE Email_Id = ? AND Password = ?";
    db.query(sqlSearchManager, [email, password], (err, result) => {
        // now we are checking if the email and the password entered by the user and passed to the database were correct or not
        if(result.length > 0 && email === Object.values(result[0]).at(0) && password === Object.values(result[0]).at(1))
            res.send("Manager Login found. Logging in...");
        else {
            res.send("Manager Login not found");
        }
    })
})

app.post('/api/warehouse/get_products', (req, res) => {

    var sendBack = {};            // the array we will send back

    const departmentValue = req.body.departmentNo;
    //console.log(departmentValue);
    const sqlQuery = "SELECT PName FROM product_details WHERE dept_id = ?;";
    db.query(sqlQuery, [departmentValue], (err, result) => {
        res.send(result);
    })
    
}) 
app.post('/api/Menu/AccountSettings', (req, res) => {

    const cyrb53 = function(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
        for (let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
        h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
        return 4294967296 * (2097151 & h2) + (h1>>>0);
    };
   
    const email = req.body.email;
    const oldPassword = cyrb53(req.body.oldPassword);
    const password = cyrb53(req.body.password);
    

    const sqlCheck = "SELECT * FROM login_details WHERE Email_Id = ? AND Password = ?";
    db.query(sqlCheck, [email, oldPassword], (err, result) => {
        console.log(email);
        console.log(oldPassword);
        console.log(password);

            const sqlCheck = "UPDATE login_details SET Password = ? WHERE Email_Id = ?";
            db.query(sqlCheck, [password, email], (err, result) => {
            console.log(result);
            res.send(result);
            })
       
    })
    

 
})


app.post('/api/ForgetPassword/UpdatePassword', (req, res) => {
    const cyrb53 = function(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
        for (let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
        h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
        return 4294967296 * (2097151 & h2) + (h1>>>0);
    };
    
    const newPassword = cyrb53(req.body.newPassword);
    const emailId = req.body.email;

    db.query('UPDATE login_details SET Password = ? WHERE Email_Id = ?', [newPassword, emailId], (err, result) =>{
        console.log(result)
        res.send(result);
    })
})



app.post('/api/warehouse/update_products', (req, res) => {

    const departmentValue = req.body.departmentName;
    const itemIncrementer = req.body.arraySending;

    for (const property in itemIncrementer) {
        //console.log(`${property}: ${itemIncrementerBakery[property]}`);
    
        if(itemIncrementer[property] === 0)         // as then  nothing to update.
            continue;

        /*first finding the quantity right now*/
        const sqlQuery = "SELECT quantity FROM product_details WHERE PName = ?;";
        db.query(sqlQuery, [property], (err, result) => {
            var updatedQuantity = Object.values(result[0])[0] + itemIncrementer[property];      
            const updateQuery = "UPDATE product_details SET quantity = ? WHERE PName = ?";
            db.query(updateQuery, [updatedQuantity, property], (err2, result2) => {
                // console.log(result2);
            })
            db.query()
        })
    
    }
}) 

app.post("/api/search_bar", (req, res) => {
    const val = req.body.textValue;
    // console.log(val);

    const sqlQuery = "SELECT PName FROM product_details WHERE PName LIKE '%" + val + "%'" 
    db.query(sqlQuery, [val], (err, result) => {
        res.send(result);
    })
})

app.post("/api/cart", (req, res) => {
    const product_name = req.body.name;
    const emailId = req.body.email;
    const quantity = req.body.quantity + 1;
    
    var price = 0.00;
    db.query("SELECT price FROM product_details WHERE PName = ?", [product_name], (err, result)=>{
        console.log(result);
        price = Object.values(result[0])[0];
        // console.log(Object.values(price[0])[0])
    })
    
    
    console.log(product_name, quantity, price);

    const checkQuery = "SELECT email, added_products FROM cart_details WHERE email = ? AND added_products = ?";
    db.query(checkQuery, [emailId, product_name], (err, result) => {
        console.log(err);        // this will undefined if no value with these property exists
        if(result.length === 0) {
            const sqlQuery = "INSERT INTO cart_details (email, added_products, price, quantity) VALUES (?, ?, ?, ?)"; 
            db.query(sqlQuery, [emailId, product_name, price, quantity], (err2, result2) => {
                // console.log(result);
                res.send("12");
            })
        } else {
            const updateQuery = "UPDATE cart_details SET quantity = ? WHERE email = ? AND added_products = ?";
            db.query(updateQuery, [quantity, emailId, product_name], (err3, result3) => {
                // console.log("added");
                res.send("122");
            })
        }
    })
})

app.post("/api/getEmail", (req, res) => {
  //  console.log(emailConstant);
    res.send(emailConstant);
})

app.post("/api/logout", (req, res) =>{
    emailConstant = "";
    res.send(emailConstant);
})


// add to cart stuff
app.post("/api/add_to_cart", (req, res) => {
    const emailId = req.body.email;
    const product_name = req.body.product_name;
    const quantity = req.body.quantity + 1;
    const price = req.body.price;

    console.log(emailId, product_name, quantity)

    const checkQuery = "SELECT email, added_products FROM cart_details WHERE email = ? AND added_products = ?";
    db.query(checkQuery, [emailId, product_name], (err, result) => {
        console.log(result.length);        // this will undefined if no value with these property exists
        if(result.length === 0) {
            const sqlQuery = "INSERT INTO cart_details (email, added_products, price, quantity) VALUES (?, ?, ?, ?)"; 
            db.query(sqlQuery, [emailId, product_name, price, quantity], (err2, result2) => {
                console.log(result);
                res.send("12");
            })
        } else {
            const updateQuery = "UPDATE cart_details SET quantity = ? WHERE email = ? AND added_products = ?";
            db.query(updateQuery, [quantity, emailId, product_name], (err3, result3) => {
                console.log("added");
                res.send("12");
            })
        }
    })

})

app.post('/api/getCart', (req, res) => {
    const emailExtracted = req.body.email;

    const sqlQuery = "SELECT * FROM cart_details WHERE email = ?";
    db.query(sqlQuery, [emailExtracted], (err, result) => {
        console.log(result);
        res.send(result);
    })
})

app.post('/api/Cart/Delete_Queries', (req, res) => {
    const emailExtracted = req.body.email;

    db.query("DELETE FROM cart_details WHERE email = ?", [emailExtracted], (err, result) => {
        console.log(result);
        res.send(result);
    })
})

// to listen
app.listen(3001, () => {
    console.log("Running on port 3001");
})