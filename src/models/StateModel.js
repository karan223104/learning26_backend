const mongoose = require("mongoose")

const stateSchema = new mongoose.Schema({
    stateName:{
        type:String
    },
    statePopulation:{
        type:Number
    },
    stateTempreature:{
        type:Number
    },
    stateAqi:{
        type:Boolean
    }
})

module.exports = mongoose.model("states",stateSchema)
