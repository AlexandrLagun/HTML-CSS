const {  Book, User} = require("./database");
const { io } = require('../server');
const { cancelReservation, bookingBook, decrementAvailableBooksCount, incrementAvailableBooksCount, removeUserFromBook } = require('./books');
const  maxHandOverTime  = 1000 * 60 * 60 * 24 * 30;


const addBook = (req, res) => {
  //console.log("req.file is: " + req.file);
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
  //console.log("hi from admin services deletecomment");
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

const getBookData = (req, res) => {
  Book.findById(req.params.bookId)
    .then(book => {
      res.json({
        updatedBook: {
          bookedBy: book.bookedBy,
          takenBy: book.takenBy
        }
      })
    })
}

const handOutBook = (userId, bookId) => {
  return cancelReservation(bookId, userId)
    .then((book) => Promise.all([setUserToTakenBooks(bookId, userId), setTakenBooksToUser(bookId, userId, book)]))
}

const setUserToTakenBooks = (bookId, userId) => {
  return new Promise((res, rej) => {
    let data = {
      userId: userId,
      dateOfHandingOut: Date.now(),
      ReturnDate: Date.now() + maxHandOverTime,
    }
    Book.findByIdAndUpdate(bookId, {
        $push: {
          takenBy: data
        }
      }, {
        safe: true,
        upsert: true
      })
      .then(() => res())
      .catch(err => rej(err))
  })
}

const setTakenBooksToUser = (bookId, userId, book) => {
  return new Promise((res, rej) => {
    let data = {
      title: book.title,
      bookId: bookId,
      dateOfHandingOut: Date.now(),
      ReturnDate: Date.now() + maxHandOverTime
    }
    User.findByIdAndUpdate(userId, {
        $push: {
          takenBooks: data
        }
      }, {
        safe: true,
        upsert: true
      })
      .then(() => res())
      .catch((err) => rej(err))
  })
}

const cancelBookReservation = (userId, bookId) => {
  return cancelReservation(bookId, userId);
}

const returnToBookStatus = (userId, bookId) => {
  return returnBookFromHands(userId, bookId)
    .then(() => {
      io.sockets.emit(`dataUpdate${bookId}`)//return bookingBook(bookId, userId)
    })
    .catch((err)=>console.err(err.message))
}

const returnBookFromHands = (userId, bookId) => {
  return Promise.all([removeUserFromTakenBooks(userId, bookId), removeBookFromTakenBooks(userId, bookId)])
}

const removeUserFromTakenBooks = (userId, bookId) => {
  return new Promise((res, rej) => {
    Book.findById(bookId)
      .then((book) => {
        let index = -1;
        book.takenBy.forEach((user, i) => {
          if (user.userId === userId) index = i
        })
        if (index > (-1)) book.takenBy.splice(index, 1);
        book.save()
          .then(()=>res())
      })
      .catch((err) => rej(err))
  })
}

const removeBookFromTakenBooks = (userId, bookId) => {
  return new Promise((res, rej) => {
    User.findById(userId)
      .then((user) => {
        let index = -1;
        user.takenBooks.forEach((book, i) => {
          if (bookId === book.bookId) index = i
        })
        if (index > (-1)) user.takenBooks.splice(index, 1);
        user.save()
          .then(()=>res())
      })
      .catch((err) => rej(err))
  })
}


  module.exports = {
   
    addBook,
    deleteComment,
    getBookData,
    handOutBook,
    cancelBookReservation,
    returnToBookStatus
  
  }