const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    categoryName:{
        type:String
    },
    categoryField:{
        type:Number
    },
    categorySearch:{
        type:Boolean
    }
})

module.exports = mongoose.model("categories",categorySchema)