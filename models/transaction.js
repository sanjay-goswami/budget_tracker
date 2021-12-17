const mongoose = require('mongoose');
require('../config/db');

const transactionSchema = new mongoose.schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:string
    },
    receiptPhotot:{
        type:String,
        default:""
    },
    date:date,
    userid:{
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
const Transaction = mongoose.model('transaction',transactionSchema);
module.exports  = Transaction;