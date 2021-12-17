const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/budget-tracker',(err)=>{
    if(err) console.log("Database not connected!");
    else console.log("Database connected successfully!");
})
module.exports = mongoose;