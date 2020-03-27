const mongoose = require("mongoose");
const  DBurl  = require("../config/index").dburl;

const { success, error} = require('consola');



const connectToMongoDB =  () => {
  try{
   mongoose.connect(DBurl, {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true});
    success ({ message: `Successfully connected to Database `, badge: true});
  
  } catch(err) {
      error ({ message: `Unable to connect with Database \n${err}`, badge: true})
  }
}

 const userSchema = mongoose.Schema({
  
  firstName:  String,
  lastName: String, 
  username:  String,
  email:  String, 
  password: String, 
  takenBooks: Array,
  bookedBooks: Array,
  isAdmin: {type: Boolean, default: false},
  isBan: {type: Boolean, default: false} 

  /* firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  takenBooks: Array,
  bookedBooks: Array,
  isAdmin: {type: Boolean, default: false},
  isBan: {type: Boolean, default: false}  */
});

const User = mongoose.model("User", userSchema);


const bookSchema = mongoose.Schema({
  title: String,
  bookAuthor: String,
  year: String,
  bookDescription: String,
  genre: String,
  bookedBy: Array,
  takenBy: Array,
  bookCover: Buffer,
  comments: Array,
  count: {type: Number, default: 10}, 
  availableCount: {type: Number, default: 10} 
});

const Book = mongoose.model("Book", bookSchema);

module.exports = { User, Book, connectToMongoDB };