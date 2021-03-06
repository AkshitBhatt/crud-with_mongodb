const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    userName: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }

},{timestamps:true});

const user=mongoose.model('user',userSchema)
module.exports=user