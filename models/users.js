require("../config/db");
const mongoose = require('mongoose');
const validator = require('validator');

userSchema = mongoose.Schema({
    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:[true,"Email already exist"],
        unique:true,
        validate(value){
            if(!validator.isEmail(value))
            throw new Error("Invalid Email!");
        }
    },
    password:{
        type:String,
        min:8
    },
    phone:{
        type:String,
        require:true,
        unique:true,
        min:10,
        max:10,
        // validate(value){
        //     if(!validator.isMobileNo(value,"en-IN"))
        //     throw new Error("Invalid Email!");
        // }
    }
},{
    versionKey:false
});
const user = mongoose.model("users",userSchema);
module.exports = user;