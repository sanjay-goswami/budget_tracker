const { response } = require("express");
const user = require("../models/users");

module.exports.register =async (req,res)=>{
    let user_data = new user(req.body);
    // console.log(user_data);
    // res.send(user_data);
        // user_data.generate_token();
        user_data.save((err)=>{
        if(err)
            res.send(err);
        else {
            res.cookie('token',"dgfhjk");
            res.render("dashboard");
        }   
    })
}