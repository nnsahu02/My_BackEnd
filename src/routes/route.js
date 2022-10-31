const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/authorController")
const BookController = require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")


router.post("/createAuthor", AuthorController.createAuthor)

router.get("/getAuthorsData", AuthorController.getAuthorsData)

router.post("/CreatePublisher", publisherController.CreatePublisher)

router.get("/GetPublisherData", publisherController.GetPublisherData)

router.post("/createBook", BookController.createBook)

router.get("/getBooksData", BookController.getBooksData)

router.post("/CheckingAuthodID", BookController.CheckingAuthodID)

router.get("/BooksWithAuthorDetail", BookController.BooksWithAuthorDetail)

router.put("/SchemaUpdate", BookController.SchemaUpdate)

router.put("/updatPrice", BookController.updatPrice)



module.exports = router;