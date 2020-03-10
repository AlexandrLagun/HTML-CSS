const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const connectToMongoDB = require("./services/database").connectToMongoDB;
//const { PORT } = require('./config/index');

const app = express();
connectToMongoDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(require('./routes/user.js'));


app.listen(5000, () => {console.log(`Server was run on the port ${5000}`); });

