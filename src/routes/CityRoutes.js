const router = require("express").Router()

const cityController = require("../controllers/CityController")

router.get("/cities", cityController.getAllCity)
router.get("/cities/:id", cityController.getCityById)
router.post("/cities",cityController.addCity)
router.delete("/cities/:id", cityController.deleteCity)

module.exports = router