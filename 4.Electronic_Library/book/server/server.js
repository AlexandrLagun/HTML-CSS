const cors = require('cors'); //
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const passport = require("passport");
const JWTregisterStrategy = require('./services/passport').passportJWT;
const JWTStrategyBan = require('./services/passport').passportJWTBan;
const JWTStrategyAdmin = require('./services/passport').passportJWTAdmin;
const { getSingleBookData } = require("./services/books");
const connectToMongoDB = require("./services/database").connectToMongoDB;

passport.use('jwt', JWTregisterStrategy);
passport.use('jwtBan', JWTStrategyBan);
passport.use('jwtAdmin', JWTStrategyAdmin);


const app = express();
const server = require('http').Server(app);
connectToMongoDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

const io = require('socket.io')(server);
io.on('connection', function(socket) {
    socket.on('requestBook', (book) => {   /////////////////////////////error possible/////
      console.log("Start socket requestBook");
      getSingleBookData(book.bookId)
        .then((book) => {
          return {
            comments: book.comments,
            count: book.count,
            bookedBy: book.bookedBy,
            takenBy: book.takenBy,
            availableCount: book.availableCount
          }
        })
        .then((data) => socket.emit('responseBook', data))
    })
  });

app.use(cors());

app.use(require('./routes/user.js'));
app.use(require('./routes/admin.js'));


server.listen(5000, () => {console.log(`Server was run on the port ${5000}`); });

module.exports = {
  io
}

