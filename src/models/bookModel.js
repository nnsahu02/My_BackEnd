const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {

    name : String,
    author_id : {
        type : ObjectId,
        required : true,
        ref : "Author"
    },
    price : Number,
    ratings : Number

}, { timestamps: true });


module.exports = mongoose.model('MYBOOK', bookSchema) //users
