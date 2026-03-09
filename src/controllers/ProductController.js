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

const updateProduct = async(req,res) =>{
    const updateData = await productSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({
    message: "data updated..",
    data: updateData,
  })
}

const searchProduct = async(req,res) =>{
    const searchData = await productSchema.find({productName:req.query.name})
    res.status(200).json({
    message: "data found",
    data: searchData,
  })
}

const addColor = async(req,res) =>{
    try{
    const updateColor = await productSchema.findByIdAndUpdate(req.params.id,{ $push: { productColors: req.body.productColors } },{ new: true })
        res.status(201).json({
            message:"color update successfully",
            data:updateColor
        })
    }catch(error){
        res.status(500).json({
            message:"error in adding color",
            error:error.message
        })
    }
    
}

const removeColor = async (req, res) => {
  try {
    const removeColors = await productSchema.findByIdAndUpdate(req.params.id,{ $pull: { productColors: req.body.productColors } },{ new: true })

    res.status(200).json({
      message: "Color removed successfully",
      data: removeColors
    })

  } catch (error) {
    res.status(500).json({
      message: "Error in removing color",
      error: error.message
    })
  }
}

module.exports = {
    getAllProduct,getProductById,addProduct,deleteProduct,updateProduct,searchProduct,addColor,removeColor
}