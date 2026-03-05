const categorySchema = require("../models/CategoryModel")

const getAllCategory = async(req,res) =>{
    const categories =  await categorySchema.find()
    res.json({
        message:"all category fetched successfully",
        data:categories
    })
}

const getCategoryById = async(req,res)=>{
    const foundCategory = await categorySchema.findById(req.params.id)
    if(foundCategory){
        res.json({
            message:"Category found",
            data:foundCategory
        })
    }else{
        res.json({
            message:"Category not found"
        })
    }
}

const addCategory = async(req,res) =>{
    const savedCategory = await categorySchema.create(req.body)
    res.status(201).json({
        message:"category added successfully",
        data:savedCategory
    })
}

const deleteCategory = async(req,res)=>{
    const deleteData = await categorySchema.findByIdAndDelete(req.params.id)
    if(deleteData){
        res.json({
            message:"Category deleted",
            data:deleteData
        })
    }else{
        res.json({
            message:"Category not found"
        })
    }
}
    
module.exports = {
    getAllCategory,getCategoryById,addCategory,deleteCategory
}