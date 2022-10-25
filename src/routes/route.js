const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")
const UserController = require("../controllers/userController")

router.post("/createNewBook", UserController.createNewBook)

router.get("/getListOfBook", UserController.getListOfBook)


module.exports = router;