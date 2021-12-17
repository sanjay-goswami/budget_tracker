const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    res.send("Hello World");
})
route.get('/register',(req,res)=>{
    if(req.cookie.token)
    res.render('register');
})
route.post('/register',require("../controller/register").register);
module.exports = route;