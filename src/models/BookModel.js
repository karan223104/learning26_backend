const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    bookName:{
        type:String
    },
    bookCategory:{
        type:String
    },
    bookPrice:{
        type:Number
    }
})

module.exports = mongoose.model("books",bookSchema)

