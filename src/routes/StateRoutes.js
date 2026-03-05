const router = require("express").Router()

const stateController = require("../controllers/StateController")

router.get("/states",stateController.getAllState)
router.get("/states/:id",stateController.getStateById)
router.post("/states",stateController.addState)
router.delete("/states/:id",stateController.deleteState)

module.exports = router