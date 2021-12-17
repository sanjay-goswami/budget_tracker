const mongoose = require('mongoose');
require('../config/db');

const groupSchema = new mongoose.schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:string
    },
    groupPhotot:{
        type:String,
        default:""
    },
    date:date,
    createdBy:{
        type:String,
        ref:'Users',
        require:true
    },
    member:{
        type:String,
        ref:'Users',
        require:true
    },
    groupid:{
        type:String,
        ref:'Group',
        require:true
    },
    verified:
        {
            type:String,
            ref:'user'
        }
    
});
const Group = mongoose.model('group',groupSchema);
module.exports  = Group;