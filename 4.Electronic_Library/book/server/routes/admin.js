const express = require("express");
const router = express.Router();
const passport = require("passport");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const {
    addBook,
    deleteComment,
    getBookData,
    handOutBook,
    cancelBookReservation,
    returnToBookStatus

    
  } = require("../services/admin");


  const {
    incrementAvailableBooksCount,
    
  } = require("../services/books")


router.post('/addbook', passport.authenticate("jwt", { session: false }),
    upload.single("bookCover"), (req, res) => {
      console.log("from admin route: " + req.file);
    addBook(req, res)
});

router.post("/deletecomment", passport.authenticate("jwtAdmin", {
  session: false
}), (req, res) => {
  console.log("hi from deletecomment route");
  deleteComment(req.body.bookId, req.body.commentId)
    .then(() => res.sendStatus(200))
    .then(() => console.log(`admin has deleted the comment from book ${req.body.bookId} comment ${req.body.commentId}`))
    .catch((err) => console.err(err.message))
});

router.get("/getbookdata/:bookId", passport.authenticate("jwtAdmin", {
  session: false
}), (req, res) => {
  getBookData(req, res)
})

router.post("/handout", passport.authenticate("jwtAdmin", {
  session: false
}), (req, res) => {
  handOutBook(req.body.userId, req.body.bookId, res)
    .then(() => res.sendStatus(200))
    .then(() => console.log(`admin has handed out book: ${req.body.bookId} to user: ${req.body.userId}`))
    .catch((err) => console.err(err.message))
})

router.post("/cancelreservationadmin", passport.authenticate("jwtAdmin", {
  session: false
}), (req, res) => {
  cancelBookReservation(req.body.userId, req.body.bookId, res)
    .then(() => incrementAvailableBooksCount(req.body.bookId))
    .then(() => res.sendStatus(200))
    .then(() => console.log(`admin has canceled reservation of book:  ${req.body.bookId} for user: ${req.body.userId}`))
    .catch((err) => console.err(err.message))
})

router.post("/returnbook", passport.authenticate("jwtAdmin", {
  session: false
}), (req, res) => {
  returnToBookStatus(req.body.userId, req.body.bookId, res)
    .then(() => incrementAvailableBooksCount(req.body.bookId))
    .then(() => res.sendStatus(200))
    .then(() => console.log(`moderator return book status of book ${req.body.bookId} to user ${req.body.userId}`))
})

module.exports = router