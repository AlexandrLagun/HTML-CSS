const {  Book, User } = require("./database");
//const { io } = require('../server');
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
        //console.log(bookData);
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
        //io.sockets.emit(`dataUpdate${req.body.bookId}`);
        res.sendStatus(200)
      })
      .catch((err) => console.log(err.message))
  }

  const bookingBook = (bookId, userId, bookingTime) => {
    console.log(" 4 servises bookingBook start");
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
          console.log(" 5 servises bookingBook before promise.all");
          Promise.all([addUserToBookingBook(bookId, userId, bookingTime), addBookingBookToUser(book, userId, bookingTime)])
            //.then(() => decrementAvailableBooksCount(bookId))
           /*  .then(() => {
              //io.sockets.emit(`dataUpdate${bookId}`);
              io.emit(`requestBook`);
              console.log("booking book from services end - well");
  
            })
            .catch((err) => {console.log('Error=======' + err)})  */
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
    console.log("decrement availableCount end")
    return Book.findById(bookId)
      .then((book) => {
        book.availableCount--;
        book.save()
      })
      //.then(() => console.log("decrement availableCount end"))
  }

  const incrementAvailableBooksCount = bookId => {
    console.log("increment availableCount end")
    return Book.findById(bookId)
      .then((book) => {
        book.availableCount++;
        book.save()
      })
      //.then(() => console.log("increment availableCount end"))
  }

  const cancelReservation = (bookId, userId) => {
    return Promise.all([removeUserFromBookingBook(bookId, userId), removeBookingBookFromUser(bookId, userId)])
      .then(data => data[0])
      /* .then(() => {
        //io.sockets.emit(`dataUpdate${bookId}`);
        io.emit(`requestBook`);
        console.log("cancel booking from services end - well");

      })
      .catch((err) => {console.log('Error=======' + err)}) */
  }

  const removeUserFromBookingBook = (bookId, userId) => {
    return new Promise((res, rej) => {
      userId = userId.toString()
      Book.findById(bookId)
        .then((book) => {
          book.bookedBy.forEach((user, i, arr) => {
            let bookedUserId = user.userId.toString()
            if (bookedUserId === userId) arr.splice(i, 1);
          })
          book.save();
          res(book);
        })
        .catch((err) => rej(err))
    })
  }

  const removeBookingBookFromUser = (bookId, userId) => {
    return new Promise((res, rej) => {
      bookId = bookId.toString()
      User.findById(userId)
        .then((user) => {
          user.bookedBooks.forEach((book, i, arr) => {
            let userBookId = book.bookId.toString()
            if (bookId === userBookId) arr.splice(i, 1);
          })
          user.save();
          res();
        })
        .catch((err) => rej(err))
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
    incrementAvailableBooksCount,
    cancelReservation

  
  }