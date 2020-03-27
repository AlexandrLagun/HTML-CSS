const express = require("express");
const router = express.Router();
const passport = require("passport");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const {
    addBook,
    deleteComment,
    
  } = require("../services/admin");


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
})


module.exports = router