const AuthorModel = require("../models/authorModel")
const BookModel = require("../models/bookModel")
const PublisherModel = require("../controllers/publisherController")

// 1
const createAuthor = async function (req, res) {
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send({ msg: savedData })
}

const getAuthorsData = async function (req, res) {
    let allAuthors = await AuthorModel.find()
    res.send({ msg: allAuthors })
}



// // 2
// const bookListByCB = async function (req, res) {
//     let CB_Id = await AuthorModel.findOne({ author_name: "Chetan Bhagat" }).select({ author_id: 1, _id: 0 })
//     //console.log(CB_Id)
//     let books = await BookModel.find({ author_id: CB_Id.author_id }).select({ name: 1, _id: 0 })
//     //console.log(books)
//     res.send({ msg: books })
// }

// // 3
// const AuthorName = async function (req, res) {
//     let Price_update = await BookModel.findOneAndUpdate(
//         { name: "Two states" },
//         { $set: { price: 100 } },
//         { new: true }
//     )
//     //console.log(Price_update)
//     const authorId = Price_update.author_id
//     let Author_of_TS = await AuthorModel.find({ author_id: authorId }).select({ author_name: 1, _id: 0 })
//     //console.log(Author_of_TS)

//     res.send({ msg: Author_of_TS })
// }

// 4
// const AuthorNAMes = async function (req, res) {
//     let newbook = await BookModel.find({ price: { $gte: 50, $lte: 100 } }).populate("author_id")
    
//     res.send({ AuthorNameWithBook: newbook })

// }

module.exports.createAuthor = createAuthor
module.exports.getAuthorsData = getAuthorsData

// module.exports.bookListByCB = bookListByCB
// module.exports.AuthorName = AuthorName
// module.exports.AuthorNAMes = AuthorNAMes