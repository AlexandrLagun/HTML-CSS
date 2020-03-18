const {  Book } = require("./database");

const addBook = (req, res) => {


  console.log("req.file is: " + req.file);
    let newBook = new Book({
      title: req.body.title,
      bookAuthor: req.body.bookAuthor,
      year: req.body.year,
      bookDescription: req.body.bookDescription,
      genre: req.body.genre, 
      bookCover: req.file.buffer
    })
    newBook.save()
      .then(() => res.sendStatus(200))
      .catch((err) => console.err(err.message))
  }


  module.exports = {
   
    addBook,
  
  }