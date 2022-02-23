const express = require('express');
const path = require('path');
const port = 9000;
const app = express();


// Use Express Router Middleware
app.use('/',require('./routes'))


app.listen(port,function(err){
    if(err){
        console.log("Error in running server".err);
        return
    }
    console.log(`Server is running on ${port} .....`);
})