const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const passport = require("passport");
const JWTregisterStrategy = require('./services/passport').passportJWT;
const JWTStrategyBan = require('./services/passport').passportJWTBan;
const JWTStrategyAdmin = require('./services/passport').passportJWTAdmin;

const connectToMongoDB = require("./services/database").connectToMongoDB;

passport.use('jwt', JWTregisterStrategy);
passport.use('jwtBan', JWTStrategyBan);
passport.use('jwtAdmin', JWTStrategyAdmin);


const app = express();
connectToMongoDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

app.use(cors());

app.use(require('./routes/user.js'));


app.listen(5000, () => {console.log(`Server was run on the port ${5000}`); });

