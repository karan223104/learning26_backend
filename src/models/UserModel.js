const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    firstname :{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    },
    status:{
        type:Boolean
    }
})

module.exports = mongoose.model("users",userSchema)