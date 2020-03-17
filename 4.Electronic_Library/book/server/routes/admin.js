const express = require("express");
const router = express.Router();
const passport = require("passport");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const {
    addBook,
    
  } = require("../services/admin");


router.post('/addbook', passport.authenticate("jwt", { session: false }),
    upload.single("bookCover"), (req, res) => {
      console.log("from admin route: " + req.file);
    addBook(req, res)
});


module.exports = router