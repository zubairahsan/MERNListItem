
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const app = express();
app.use(bodyParser.json());
//DB Config
const db = require('./config/keys').mongoURI;

//Connect to mongo 
mongoose
    .connect(db)
    .then(() => console.log("mongoDB is connected..."))
    .catch(err => console.log(err));

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server startes at port ${port}`));   