const citySchema = require("../models/CityModel")

const getAllCity = async(req,res)=>{
    const cities = await citySchema.find()
    res.json({
        message:"all cities fetched successfully",
        data:cities
    })
}

const getCityById = async(req,res)=>{
    const foundCity = await citySchema.findById(req.params.id)
    if(foundCity){
        res.json({
            message:"city found",
            data:foundCity
        })
    }else{
        res.json({
            message:"city not found"
        })
    }
}

const addCity = async(req,res)=>{
    const savedCity = await citySchema.create(req.body)
    res.status(201).json({
        message:"book added successfully",
        data:savedCity
    })
}

const deleteCity = async(req,res)=>{
    const deleteData = await citySchema.findByIdAndDelete(req.params.id)
    if(deleteData){
         res.status(200).json({
            message:"product deleted",
            data:deleteData
         })
     }else{
        res.status(200).json({
            message:"product not found"
         })
     }
}
module.exports = {
    getAllCity,getCityById,addCity,deleteCity
}