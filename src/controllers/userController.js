const bookModel = require("../models/bookModel")

// 1
const createBook = async function (req, res) {
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({ msg: savedData })
}

// 2
const booklist = async function (req,res) {
    let data = await bookModel.find().select({bookName : 1, authorName : 1, _id : 0})
    res.send({ msg : data})
}

// 3
const getBooksInYear = async function(req,res) {
    let data = req.body.year
    let savedData = await bookModel.find({year : data})
    res.send({msg : savedData})
}

// 4
const getParticularBooks = async function (req, res) {
    let data = req.body
    let savedData = await bookModel.find({ $or : [ {bookName : data.bookName}, {authorName : data.authorName}, {year : data.year}, { totalPages : data.totalPages}, { stockAvailable : data.stockAvailable},]})
    res.send({msg : savedData})
}

// 5
const getXINRBooks = async function (req,res) {
    let data = await bookModel.find({ "price.IndianPrice" : { $in : ["100INR", "200INR", "500INR"]}})
    res.send({msg : data})
}

// 6
const getRandomBooks = async function(req,res) {
    let data = await bookModel.find({$or : [{stockAvailable : true}, { totalPages : {$gt : 500}}]})
    res.send({msg : data})
}



module.exports.createBook = createBook
module.exports.booklist = booklist
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks
