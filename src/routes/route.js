const express = require('express');
const router = express.Router();
const BookModel = require("../models/bookModel.js")
const UserController = require("../controllers/userController")

router.post("/createBook", UserController.createBook)

router.get("/booklist", UserController.booklist)

router.post("/getBooksInYear", UserController.getBooksInYear)

router.post("/getParticularBooks", UserController.getParticularBooks)

router.get("/getXINRBooks", UserController.getXINRBooks)

router.get("/getRandomBooks", UserController.getRandomBooks)


module.exports = router;