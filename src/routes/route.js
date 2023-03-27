const express = require('express')
const router = express.Router()
const { createAuthor, loginAuthor } = require("../controllers/authorController")
const { validateEmail } = require("../middleware/mailValidation")
const { createBlog, getBlogs, updateBlogs, deleteBlogs, deleteBlogsUsingQuery } = require('../controllers/blogController')
const { authenticateAuthor, authoriseAuhtor, authoriseAuthorfrmQuery } = require("../middleware/auth")

//creating Author
router.post("/authors", validateEmail, createAuthor)

//creating blogs
router.post('/blogs', authenticateAuthor, createBlog)

//getting blogdata
router.get('/blogs', authenticateAuthor, getBlogs)

//updating blogdata
router.put('/blogs/:blogId', authenticateAuthor, authoriseAuhtor, updateBlogs)

//deleting blogdata
router.delete('/blogs/:blogId', authenticateAuthor, authoriseAuhtor, deleteBlogs)

//deleting blogdata using query
router.delete('/blogs', authenticateAuthor, authoriseAuthorfrmQuery, deleteBlogsUsingQuery)

//login author
router.post('/login', validateEmail, loginAuthor)

//some error path
router.all('/*', function (req, res) {
    return res.status(400).send({ status: false, msg: "Please give right path" })
})



module.exports = router


