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
    console.log("It's Ok");
    const {firstname, lastname, username, email, password} = req.body;
    const userData = {firstname, lastname, username, email, password};
    //const userData = req.body;
    console.log("signupInfo: " +  firstname + " " + lastname + " " + username +  " " + email + " " + password);
    signUp(userData, res);
    
});

router.post("/signin", (req, res) => {
  
    signIn(req, res)

});


module.exports = router;