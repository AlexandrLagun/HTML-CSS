const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
  res.send("Hello world");
});

router.post("/signup", (req, res) => {
  res.send(req.body);
  console.log(req.body);
})
module.exports = router;