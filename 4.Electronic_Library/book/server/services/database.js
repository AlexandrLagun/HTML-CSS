const mongoose = require("mongoose");
const dburl ="mongodb+srv://AlexLagun:alex0806329@cluster0-no4oc.mongodb.net/test?retryWrites=true&w=majority";
const { success, error} = require('consola');

export const connectToMongoDB = async () => {
  try{
    await mongoose.connect(dburl, {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true});
    success ({ message: `Successfully connected to Database `, badge: true});
  
  } catch(err) {
      error ({ message: `Unable to connect with Database \n${err}`, badge: true})
  }
}

 const userSchema = mongoose.Schema({
  
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  password: String,
  takenBooks: Array,
  bookedBooks: Array,
  isAdmin: Boolean,
  isBan: Boolean,
});

export const User = mongoose.model("User", userSchema);