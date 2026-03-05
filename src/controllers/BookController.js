const bookSchema = require("../models/BookModel")

const getAllBook = async(req,res)=>{
    const book = await bookSchema.find()
    res.json({
        message:"all books fetched",
        data:book
    })
}

const getBookById = async(req,res)=>{
    const foundBook = await bookSchema.findById(req.params.id)
    if(foundBook){
        res.json({
            message:"book found",
            data:foundBook
        })
    }else{
        res.json({
            message:"book not found"
        })
    }
}

const addBook = async(req,res)=>{
    const savedBook = await bookSchema.create(req.body)
    res.status(201).json({
        message:"book added successfully",
        data:savedBook
    })
}

const deleteBook = async(req,res)=>{
    const deleteData = await bookSchema.findByIdAndDelete(req.params.id)
    if(deleteData){
        res.json({
            message:"data deleted successfully",
            data:deleteData
        })
    }else{
        res.json({
            message:"data not found"
        })
    }
}

module.exports = {
    getAllBook,getBookById,addBook,deleteBook
}