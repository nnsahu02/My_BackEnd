const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/authorController")
const BookController = require("../controllers/bookController")


router.post("/createAuthor", AuthorController.createAuthor)

router.get("/getAuthorsData", AuthorController.getAuthorsData)

router.post("/createBook", BookController.createBook)

router.get("/getBooksData", BookController.getBooksData)

router.get("/bookListByCB", AuthorController.bookListByCB)

router.get("/AuthorName", AuthorController.AuthorName)

router.get("/AuthorNAMes", AuthorController.AuthorNAMes)

module.exports = router;