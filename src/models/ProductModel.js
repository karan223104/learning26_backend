const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productName:{
        type:String
    },
    productPrice:{
        type:Number
    },
    productColors:[{
        default:[],
        type:String
    }],
    productSize:{
        enum:["S","M","XL","L"],
        type:String
    }

})

module.exports = mongoose.model("products",productSchema)