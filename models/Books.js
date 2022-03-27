const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    rating: { type: Number, required: true},
    year: { type: Number, required: true},
    pages: { type: Number, required: true},
    ISBN: { type: Number, required: true},
})

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;