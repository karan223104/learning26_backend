const productSchema = require("../models/ProductModel")

const getAllProduct = async(req,res)=>{
    const product = await productSchema.find()
    res.json({
        message:"all users fetched",
        data:product
    })
}

const getProductById = async(req,res) =>{
    const foundProduct = await productSchema.findById(req.params.id)
    if(foundProduct){
        res.json({
            message:"product found",
            data:foundProduct
        })
    }else{
        res.json({
            message:"product not found"
        })
    }
}

const addProduct = async(req,res) =>{
    // console.log("body...",req.body)
    const savedProduct = await productSchema.create(req.body)
    res.status(201).json({
        message:"product saved",
        data:savedProduct 
    })
}

const deleteProduct = async(req,res)=>{
     const deleteData = await productSchema.findByIdAndDelete(req.params.id)
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
    getAllProduct,getProductById,addProduct,deleteProduct
}