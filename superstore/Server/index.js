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
const mysql = require('mysql')      // to get the mysql dependency

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


app.post('/api/signup', (req, res) => {

    // req.checkBody('username', 'Username cannot be empty').notEmpty();
    // req.checkBody('email', 'Email cannot be empty').notEmpty();
    // req.checkBody('password', 'Password cannot be empty').notEmpty();

    // const errors = req.validationErrors();

    // if (errors) {
    //     console.log(`errors: ${JSON.stringify(errors)}`);
    // }

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const sqlCheck = "SELECT * FROM login_details WHERE Email_Id = ?";
    db.query(sqlCheck, [email], (err, result) => {
        if(result.length > 0) {
            return res.send("User already registered with this Email");
        }
    })

    const sqlInsert = "INSERT INTO login_details (Username, Email_Id, Password) VALUES (?,?,?);";
    //console.log(sqlInsert, [username, email, password]);
    db.query(sqlInsert, [username, email, password], (err, result) => {
      //  console.log(result);
    })
})

app.post('/api/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const sqlCheck = "SELECT * FROM login_details WHERE Email_Id = ? AND Password = ?";
    db.query(sqlCheck, [email, password], (err, result) => {
        // console.log(result.length);
        if(result.length != 0) {
            return res.send("User Found, redirecting to the store page");
        }
    })
})


// to listen
app.listen(3001, () => {
    console.log("Running on port 3001");
})