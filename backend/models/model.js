const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Data = new Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})

const RegistrationData = mongoose.model("Data",Data);



module.exports = RegistrationData ;

