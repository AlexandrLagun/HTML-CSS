const cors = require('cors');
const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');
const { DB, PORT } = require('./config/index');
const { success, error} = require('consola');
const dburl ="mongodb+srv://AlexLagun:alex0806329@cluster0-no4oc.mongodb.net/test?retryWrites=true&w=majority";
const app = express();

app.use(bp.json());
app.use(cors());

app.use(require('./routes/user.js'));

const startApp = async () => {

    try{
        await app.listen(5002, () => success ({ message: `Server was started on port ${PORT}`, badge: true}));
        await mongoose.connect(dburl, {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true});
        success ({ message: `Successfully connected to Database \n${DB}`, badge: true});
      
    } catch(err) {
        error ({ message: `Unable to connect with Database \n${err}`, badge: true})
    }

}
console.log(DB, dburl);
startApp();

