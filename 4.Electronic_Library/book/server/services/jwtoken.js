const  secretKey  = require("../config/index").secretKey;
const jwt = require("jsonwebtoken");

const token = {
  setToken: userId => {
    let expDate = Date.now() + 1000 * 60 * 60 * 24 * 7;
    let payload = {
      userId: userId,
      exp: expDate,
      iat: Date.now()
    };
    let token = jwt.sign(payload, secretKey);
    return token;
  }
}  

module.exports = token;