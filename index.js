const express = require('express');
const path = require('path');
const port = 9000;
const app = express();

//  Connection
const db = require('./config/mongoose')

// form data
app.use(express.urlencoded())

//View Templetes for for Front End
app.set('view engine','ejs');
app.set('views','./views')

// Serving Static Files
app.use(express.static('assets'))


// Use Express Router Middleware
app.use('/',require('./routes'))

app.listen(port,function(err){
    if(err){
        console.log("Error in running server".err);
        return
    }
    console.log(`Server is running on ${port} .....`);
})