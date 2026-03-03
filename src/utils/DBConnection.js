const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/learning26_database")
        console.log("DB connected successfully")
    } catch (err) {
        console.log("DB not connected", err)
    }
}

module.exports = dbConnection