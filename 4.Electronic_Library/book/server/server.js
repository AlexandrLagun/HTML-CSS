const cors = require('cors');
const express = require('express');
const bp = require('body-parser');
const connectToMongoDB = require("./services/database");
//const { PORT } = require('./config/index');

const app = express();
connectToMongoDB();

app.use(bp.json());

app.use(cors());

app.use(require('./routes/user.js'));


app.listen(5000, () => {console.log(`Server was run on the port ${5000}`); });

