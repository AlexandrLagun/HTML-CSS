const express = require("express");
const router = express.Router();

const {
  signUp,
  signIn
} = require("../services/user");


router.get("/", (req, res) => {
  res.send("Hello world");
});

router.get("/profile", (req, res) => {
  res.send("UserInfo");
});

router.post("/signup", (req, res) => {


    signUp(req, res);
    
  
});

router.post("/signin", (req, res) => {
  if (req.body.username && req.body.password) {
    signIn(req, res)
  }
});


module.exports = router;