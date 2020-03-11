const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');

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

router.post("/signup", [
  // firstname must be at least 2 chars long
  check('firstname').isLength({ min: 3 }),
  // lastname must be at least 2 chars long
  check('lastname').isLength({ min: 3 }),
  // username must be at least 3 chars long
  check('username').isLength({ min: 4 }),
  // email must be as email
  check('email').isEmail(),
  // password must be at least 4 chars long
  check('password').isLength({ min: 5 })
  ], (req, res) => {


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    // return res.status(422).json({ errors: errors.array() });
    console.log("---Errors from signup: " + JSON.stringify(errors));
    }


    console.log("It's Ok");
    const {firstname, lastname, username, email, password} = req.body;
    const userData = {firstname, lastname, username, email, password};
    //const userData = req.body;
    console.log("signupInfo: " +  firstname + " " + lastname + " " + username +  " " + email + " " + password);
    signUp(userData, res);
    
});

router.post("/signin", [
  // username must be at least 3 chars long
  check('username').isLength({ min: 7 }),
  // password must be at least 4 chars long
  check('password').isLength({ min: 7 })
  ], (req, res) => {


    const errorsSignIn = validationResult(req);
    if (!errorsSignIn.isEmpty()) {
     // return res.status(422).json({ errors: errors.array() });
     console.log("---Errors from signin: " + JSON.stringify(errorsSignIn));
    }

    
  console.log("It's Ok from /signin");
  const {username, password} = req.body;
  const userData = {username, password};
  console.log("signinInfo: " + username +  " " + password);
   // signIn(userData, res)

});


module.exports = router;