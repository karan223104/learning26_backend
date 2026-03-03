const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productName:{
        type:String
    },
    productPrice:{
        type:Number
    }
})

module.exports = mongoose.model("products",productSchema)