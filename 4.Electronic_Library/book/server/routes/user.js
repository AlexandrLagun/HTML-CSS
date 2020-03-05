const express = require("express");
const router = express.Router();

const {
  signUp
} = require("../services/user");


router.get("/", (req, res) => {
  res.send("Hello world");
});

router.get("/profile", (req, res) => {
  res.send("UserInfo");
});

router.post("/signup", (req, res) => {
  if (req.body.firstname && req.body.lastname && req.body.username && req.body.email && req.body.password) {
    signUp(req, res)
  };
});

module.exports = router;