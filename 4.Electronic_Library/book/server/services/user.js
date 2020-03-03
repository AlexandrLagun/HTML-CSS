const { User } = require("./database");
var crypto = require('crypto');


export const singUp = (req, res) => {

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