const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    authorName: String,
    tags: [String],
    year: {
        type: String,
        default: 2021
    },
    totalPages: Number,
    stockAvailable: Boolean,
    price: {
        IndianPrice: String,
        EuropianPrice: String
    }

}, { timestamps: true });

module.exports = mongoose.model('BookList', bookSchema)



