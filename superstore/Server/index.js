// This is the server which will run our application, the most crucial file, the brains of the project.
// Run this server using NODEMON. to install it
// npm install nodemon
// to run the server so that if you save it, you dont have to restart the program and it does it automatically, 
// use the command "npm run devStart"
//creating an express server
const express = require('express')
const app = express()
const mysql = require('mysql')      // to get the mysql dependency

const db = mysql.createConnection({
    host: 'localhost',                      // host name
    user: 'root',                           // username
    password: 'password',                   // the password stored in vault
    database: 'superstore_database'             // this is the name of the table
})

// res is to send, THE RESPONSE, to send it to the front end.
// req is require, REQUIRE, get information from the front end.
app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO customer(Email, minAge, maxAge, customer_name) VALUES ('suvrat.kumra@ucalgary.ca', 10, 20, 'Suvrat');";
    
    db.query(sqlInsert, (err, result) => {
        res.send("The new information added.")
    })
    res.send('hello world');
})

// to listen
app.listen(3001, () => {
    console.log("Running on port 3001");
})