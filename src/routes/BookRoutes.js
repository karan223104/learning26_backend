const router = require("express").Router()

const bookController = require("../controllers/BookController")

router.get("/books",bookController.getAllBook)
router.get("/books/:id",bookController.getBookById)
router.post("/books",bookController.addBook)
router.delete("/books/:id",bookController.deleteBook)

module.exports = router