const {  Book, User } = require("./database");
const { io } = require('../server');
const  maxBookingTime  = 1000 * 60 * 60 * 48;



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

  const searchBooks = (req, res) => {
    let regExp = new RegExp(req.body.searchValue, 'ig');
    Book.find({ $or: [{ title: regExp }, { bookAuthor: regExp }, { year: regExp }, { genre: regExp }] })
      .then(books => {
        books = books.map(book => {
          return {
            _id: book._id,
            title: book.title
          }
        })
        res.json(books)
      })
  }

  //get comments, count, avCount
  const getSingleBookData = (id) => {
    return Book.findById(id)
      .catch((err) => console.err(err.message));
  }

  const getSingleBook = (req, res) => {
    
    Book.findById(req.params.bookId)
      .then(book => {
        let bookData = {
          [book._id]: {
            title: book.title,
            bookAuthor: book.bookAuthor,
            year: book.year,
            genre: book.genre,
            bookDescription: book.bookDescription
          }
        }
        console.log(bookData);
        return bookData;
      })
      .then(book => res.json(book))
      .catch((err) => console.err(err.message))
  }

  const addComment = (req, res) => {
    if (!req.body.bookId || !req.body.commentText) {
      res.sendStatus(400) //Bad request
      return
    }
    let newComment = {
      commentAuthorId: req.user._id,
      commentAuthor: req.user.username,
      commentText: req.body.commentText,
      date: Date.now(),
    }
    Book.findByIdAndUpdate(req.body.bookId, {
        $push: {
          comments: newComment
        }
      }, {
        safe: true,
        upsert: true
      })
      .then(() => {
        io.sockets.emit(`dataUpdate${req.body.bookId}`);
        res.sendStatus(200)
      })
      .catch((err) => console.err(err.message))
  }

  const bookingBook = (bookId, userId, bookingTime) => {
    if (!bookingTime) bookingTime = maxBookingTime;
    return Book.findById(bookId)
      .then((book) => {
        let index = -1;
        let stringUserId = userId.toString()
        book.bookedBy.forEach((book, i) => {
          let bookUserId = book.userId.toString()
          if (bookUserId === stringUserId) index = i
        })
        book.takenBy.forEach((book, i) => {
          let bookUserId = book.userId.toString()
          if (bookUserId === stringUserId) index = i
        })
        if (book.availableCount > 0 && index < 0) {
          Promise.all([addUserToBookingBook(bookId, userId, bookingTime), addBookingBookToUser(book, userId, bookingTime)])
            .then(() => {
              io.sockets.emit(`dataUpdate${bookId}`)
            })
        }
        else {
          throw new Error()
        }
      })
  }

  const addUserToBookingBook = (bookId, userId, bookingTime) => {
    return new Promise((res, rej) => {
      let data = {
        userId: userId,
        dateOfBook: Date.now(),
        datebookEnd: Date.now() + bookingTime,
      }
      Book.findByIdAndUpdate(bookId, {
          $push: {
            bookedBy: data
          }
        }, {
          safe: true,
          upsert: true
        })
        .then(() => res())
        .catch(err => rej(err))
    })
  }

  const addBookingBookToUser = (book, userId, bookingTime) => {
    return new Promise((res, rej) => {
      let data = {
        bookId: book._id,
        dateOfBook: Date.now(),
        datebookEnd: Date.now() + bookingTime,
      }
      User.findByIdAndUpdate(userId, {
          $push: {
            bookedBooks: data
          }
        }, {
          safe: true,
          upsert: true
        })
        .then(() => res())
        .catch((err) => rej(err))
    })
  }

  const decrementAvailableBooksCount = bookId => {
    return Book.findById(bookId)
      .then((book) => {
        book.availableCount--;
        book.save()
      })
  }


  module.exports = {
    getBooks,
    getBookCover,
    searchBooks,
    getSingleBookData,
    getSingleBook,
    addComment,
    bookingBook,
    decrementAvailableBooksCount,

  
  }