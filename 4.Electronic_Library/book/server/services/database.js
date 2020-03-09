const mongoose = require("mongoose");
const dburl ="mongodb+srv://AlexLagun:alex0806329@cluster0-no4oc.mongodb.net/test?retryWrites=true&w=majority";

const { success, error} = require('consola');



const connectToMongoDB =  () => {
  try{
   mongoose.connect(dburl, {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true});
    success ({ message: `Successfully connected to Database `, badge: true});
  
  } catch(err) {
      error ({ message: `Unable to connect with Database \n${err}`, badge: true})
  }
}

 const userSchema = mongoose.Schema({
  
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  takenBooks: Array,
  bookedBooks: Array,
  isAdmin: {type: Boolean, default: false},
  isBan: {type: Boolean, default: false} 
});

const User = mongoose.model("User", userSchema);

module.exports = User;
module.exports = connectToMongoDB;