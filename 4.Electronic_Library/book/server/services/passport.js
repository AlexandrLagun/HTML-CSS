//const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
//const ExtractJwt = require("passport-jwt").ExtractJwt;
const User  = require("./database").User;
const secretKey = require("../config/index").secretKey;

const cookieExtractor = function(req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  return token;
};

const opts = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: secretKey
};

/* passport.use("jwt",
  new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({
        _id: jwt_payload.userId
      },
      function(err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      }
    );
  })
); */

  const passportJWT = new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({
        _id: jwt_payload.userId
      },
      function(err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      }
    );
  });

  const passportJWTBan = new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({
        _id: jwt_payload.userId
      },
      function(err, user) {
        if (err) {
          return done(err, false);
        }
        if (user && (user.isBan !== true)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      }
    );
  });

  const passportJWTAdmin = new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({
        _id: jwt_payload.userId
      },
      function(err, user) {
        if (err) {
          return done(err, false);
        }
        if (user && user.isAdmin) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      }
    );
  });


module.exports = {
  passportJWT,
  passportJWTBan,
  passportJWTAdmin
};