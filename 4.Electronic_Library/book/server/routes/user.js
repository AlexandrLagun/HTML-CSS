const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.get("/account", (req, res) => {
  res.send("UserInfo");
});

router.post("/account/signup", (req, res) => {
  res.send(req.body);
})
module.exports = router;