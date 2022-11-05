const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const auth = require("../middleware/auth")

//1. creat user
router.post("/user", userController.creatUser)

//2. login user
router.post("/login", userController.loginuser)

//3. get user data
router.get("/users/:userId", auth.validatetoken, userController.getuserdetails)

//4. update user
router.put("/users/:userId", auth.validatetoken, userController.updateUser) 

//5. delete user
router.delete("/users/:userId", auth.validatetoken, userController.deleteUser)

module.exports = router;
