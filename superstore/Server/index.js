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
const mysql = require('mysql')      // to get the mysql dependency

const db = mysql.createConnection({
    host: 'localhost',                      // host name
    user: 'root',                           // username
    password: 'password',                   // the password stored in vault
    database: 'superstore_database'             // this is the name of the table
})

// this is the middle ware, you need this, without this, alot of errors.
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())     // allows to get the request from frontend.

// res is to send, THE RESPONSE, to send it to the front end.
// req is require, REQUIRE, get information from the front end.
app.get('/', (req, res) => {
   
})

app.post('/signup/insert', (req, res) => {

    // requesting information from front end
    const Username = req.body.Username
    const Email_Id = req.body.Email_Id
    const Password = req.body.Password

    const sqlInsert = "INSERT INTO login_details(Username, Email_Id, Password) VALUES (?,?,?)";
    
    db.query(sqlInsert, [Username, Email_Id, Password], (err, result) => {

    });
})

// to listen
app.listen(3001, () => {
    console.log("Running on port 3001");
})