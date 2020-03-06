const { User } = require("./database");
const crypto = require('crypto');
const JWToken = require("./jwt");


const signUp = (req, res) => {

    let usernameSearch = new Promise((res, rej) => {
      User.findOne({ username: req.body.username })
        .then(username => res(username))
    });
    let emailSearch = new Promise((res, rej) => {
      User.findOne({ email: req.body.email })
        .then(email => res(email))
    });
    Promise.all([usernameSearch, emailSearch])
      .then(values => {
        if (values[0] === null && values[1] === null) {
          let newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            password: crypto.createHash("sha256").update(req.body.password).digest("hex")
          });

          newUser.save();

          res.sendStatus(200);
        } else {
          res.sendStatus(401);
        }
      })
      .catch(err => {
        console.log(err.message)
        res.sendStatus(500);
      });
}


const signIn = (req, res) => {
  User.findOne({ username: req.body.username },
    (err, user) => {
      if (user) {
        if (
          user.password === crypto.createHash("sha256").update(req.body.password).digest("hex")
        ) {
          // add cookies to store jwt
          res.cookie("jwt", JWToken.setToken(user._id), {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // jwt expires in 1 week
            httpOnly: true
          });
          res.sendStatus(200);
        } else {
          
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(404);
      }
    }
  );
}




module.exports = {
  signUp,
  signIn

};
