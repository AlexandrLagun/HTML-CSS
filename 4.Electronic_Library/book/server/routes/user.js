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
    const userData = req.body;
    console.log("signupRouter " + req.body )
    signUp(userData, res);
    
});

router.post("/signin", (req, res) => {
  
    signIn(req, res)

});


module.exports = router;