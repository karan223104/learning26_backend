const router = require("express").Router()

const categoryController = require("../controllers/CategoryController")

router.get("/categories",categoryController.getAllCategory)
router.get("/categories/:id",categoryController.getCategoryById)
router.post("/categories",categoryController.addCategory)
router.delete("/categories/:id",categoryController.deleteCategory)

module.exports = router 