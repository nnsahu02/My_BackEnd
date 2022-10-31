const { count } = require("console")
const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
const PublisherModel = require("../models/publisherModel")
const { update } = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const getBooksData = async function (req, res) {
    let allBooks = await BookModel.find()
    res.send({ msg: allBooks })
}

const CheckingAuthodID = async function (req, res) {
    let { author, publisher } = req.body

    if (!author) {
        res.send("author required")
    }

    if (!publisher) {
        res.send("Publisher required")
    }

    let AuthorData = await AuthorModel.findById({ _id: author })

    if (!AuthorData) {
        res.send("Author not Available")
    }

    let publisherData = await PublisherModel.findById({ _id: publisher })
    if (!publisherData) {
        res.send("Publisher not avalable")
    }
    //console.log(authorName)
    // let book = req.body
    // let bookCreated = await BookModel.create(book)
    // res.send({ data: bookCreated })
}


const BooksWithAuthorDetail = async function (req, res) {
    let data = await BookModel.find().populate("author").populate("publisher")

    res.send(data)
}

const SchemaUpdate = async function (req, res) {
    let key = await PublisherModel.find({ name: ["Penguin", "Got Publisher"] }).select({ _id: 1 });
    let key1 = await BookModel.find({ publisher: key }).select({ _id: 1 });
    for (let index = 0; index < key1.length; index++) {
        const element = key1[index];
        let key001 = await BookModel.findByIdAndUpdate(element, { $set: { isHardCover: true } })

        console.log(key001)
    }

    res.send({ msg: "Updated" })
}


const updatPrice = async function (req, res) {

    let key = await AuthorModel.find({ rating: { $gte: 2 } }).select({ _id: 1 });
    let books = await BookModel.find({ author: key }).select({ _id: 1 })
    for (let index = 0; index < books.length; index++) {
        const element = books[index];
        let Newupdate = await BookModel.findByIdAndUpdate(element, { $inc: { price: 10 } })
        console.log(Newupdate)
    }

    res.send({ msg: "Updated" })

}



module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.CheckingAuthodID = CheckingAuthodID
module.exports.BooksWithAuthorDetail = BooksWithAuthorDetail
module.exports.SchemaUpdate = SchemaUpdate
module.exports.updatPrice = updatPrice



