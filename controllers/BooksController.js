const Book = require("../models/Books");

// @desc    Get all books
// @route   GET /books
const getBooks = (req, res) => {
  Book.find()
    .then((book) => res.status(200).json(book))
    .catch((err) => res.status(401).json({ error: err }));
};


// @desc    Get a book
// @route   GET /books/:id
const getBook = (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.status(200).json(book))
    .catch((err) => res.status(401).json({ error: err }));
};


// @desc    Create new book
// @route   POST /books
const createBook = (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    rating: req.body.rating,
    year: req.body.year,
    pages: req.body.pages,
    ISBN: req.body.ISBN,
  });

  newBook
    .save()
    .then(() => res.json("Book added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};


// @desc    Update a book
// @route   PUT /books/:id
const updateBook = (req, res) => {
  Book.findByIdAndUpdate(req.params.id).then((book) => {
    (book.title = req.body.title),
      (book.author = req.body.author),
      (book.rating = req.body.rating),
      (book.year = req.body.year),
      (book.pages = req.body.pages),
      (book.ISBN = req.body.ISBN);

    book
      .save()
      .then(() => res.json("Book Updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
};


// @desc    Delete a book
// @route   DELETE /books/:id
const deleteBook = (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json("Book deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
