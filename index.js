const express = require('express')
const app = express()
const port = 9000;
const cron = require("node-cron");
const {sendmailAt5pm,sendMail,sendmailAt12pm} = require('./controllers/userController')   //export me suggestion nhi aye to ye kr skte h  
const bodyParser = require('body-parser');
const { Route } = require('express');
const router = require('./routes/userRoutes');
require('./model/config')       //connection ho gya h databbase config

app.use(express.json());          //global middleware
app.use(bodyParser.json())     //string ko correct format me lata h 


app.use('/', router)

app.listen(9000, function (req, res) {
    console.log("Server is running on port no : 9000");
})

app.get('/', function (req, res) {
    res.send("Welcome in Js world")
})

cron.schedule("*/5 * * * * *", function () {
    console.log("running a task every 10 second")
    sendMail();                 //function ko call kiya
})

cron.schedule(" * * 5 * * *", function () {
    sendmailAt5pm();
})

cron.schedule(" 10 12 * * *", function () {
    
})