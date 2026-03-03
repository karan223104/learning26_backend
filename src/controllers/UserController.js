const userSchema = require("../models/UserModel")

const getAllUsers = async(req,res)=>{
    const users = await userSchema.find()
    res.json({
        message:"all users fetched",
        data:users
    })
}

module.exports = {
    getAllUsers
}

