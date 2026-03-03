const employeeSchema = require("../models/EmployeeModel")

const getAllEmployee = async(req,res)=>{
    const employee = await employeeSchema.find()
    res.json({
        message:"all users fetched",
        data:employee
    })
}

module.exports = {
    getAllEmployee
}