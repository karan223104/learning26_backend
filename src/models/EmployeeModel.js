const mongoose = require("mongoose")
const employeeSchema = new mongoose.Schema({
    name :{
        type:String
    },
    age:{
        type:Number
    },
    salary:{
        type:Number
    },
    status:{
        type:Boolean
    }
})

module.exports = mongoose.model("employees",employeeSchema)