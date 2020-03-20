const {  Book } = require("./database");



const getBooks = (req, res) => {
    Book.find()
      .then(books => books.map(book => {
        return  {
          _id: book._id,
          title: book.title,
          bookAuthor: book.bookAuthor,
          year: book.year,
          genre: book.genre
        }
      }))
      .then(books => {
        res.json(books)
      })
      .catch((err) => console.err(err.message))
  }

  const getBookCover = (req, res) => {
    Book.findById(req.params.bookId)
      .then(book => {
        res.set('Content-Type', 'image/jpeg');
        res.send(book.bookCover)
      })
      .catch((err) => console.err(err.message))
  }

  module.exports = {
    getBooks,
    getBookCover,
  
  }