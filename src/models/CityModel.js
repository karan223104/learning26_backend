const mongoose = require("mongoose")

const citySchema = new mongoose.Schema({
    cityName:{
        type:String
    },
    cityArea:{
        type:Number
    },
    cityAqi:{
        type:Boolean
    }
})

module.exports = mongoose.model("cities",citySchema)