const stateSchema = require("../models/StateModel")

const getAllState = async(req,res) =>{
    const states = await stateSchema.find()
    res.json({
        message:"all states fetched successfully",
        data:states
    })
}

const getStateById = async(req,res) =>{
    const foundState = await stateSchema.findById(req.params.id)
    if(foundState){
        res.json({
            message:"state found",
            data:foundState
        })
    }else{
        res.json({
            message:"state not found",
        })
    }
}

const addState = async(req,res) =>{
    const savedState = await stateSchema.create(req.body)
        res.status(201).json({
            message:"state add successfully",
            data:savedState
        })
    
}

const deleteState = async(req,res) =>{
    const deleteData = await stateSchema.findByIdAndDelete(req.params.id)
    if(deleteData){
        res.status(200).json({
            message:"state deleted successfully",
            data:deleteData
        })
    }else{
        res.status(200).json({
            message:"state not found",
        })
    }
}

module.exports = {
    getAllState,getStateById,addState,deleteState
}