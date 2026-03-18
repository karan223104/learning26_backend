const router = require("express").Router()

const productController = require("../controllers/ProductController")

const upload = require("../middleware/UploadMiddleware")

const validateToken = require("../middleware/AuthMiddleware")

router.get("/products",validateToken,productController.getAllProduct)
router.get("/product/:id",productController.getProductById)
router.post("/product",upload.single("image"), productController.addProduct)
router.delete("/product/:id", productController.deleteProduct)
router.put("/product/:id", productController.updateProduct)
router.get("/product", productController.searchProduct)
router.put("/addcolor/:id", productController.addColor)
router.put("/removecolor/:id", productController.removeColor)

module.exports = router