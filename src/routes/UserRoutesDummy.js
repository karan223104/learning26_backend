const router = require("express").Router()     

const userControllerDummy = require("../controllers/UserControllerDummy")    // require controller 

router.get("/dummy", userControllerDummy.getUser)  //call controller function
router.get("/user", userControllerDummy.getUserData)
router.get("/users", userControllerDummy.allUsers)
router.get("/user/:id", userControllerDummy.getUserById)

module.exports = router