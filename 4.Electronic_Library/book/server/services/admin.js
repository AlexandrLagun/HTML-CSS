const {  Book } = require("./database");
const { io } = require('../server');

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

const deleteComment = (bookId, commentId) => {
  console.log("hi from admin services deletecomment");
  return new Promise((res, rej) => {
    Book.findById(bookId)
      .then(book => {
        let index = -1;
        book.comments.forEach((comment, i) => {
          if (commentId === (comment.commentAuthorId + comment.date)) {index = i;  console.log("There is a overlap")}
        });
        let newComment = {
          ...book.comments[index],
          commentText: "This comment was deleted by admin"
        }
        if (index > (-1)) book.comments.splice(index, 1, newComment);
        book.save()
          .then(() => io.sockets.emit(`dataUpdate${bookId}`))
        res();
      })
      .catch((err) => rej(err))
  })
}


  module.exports = {
   
    addBook,
    deleteComment,
  
  }