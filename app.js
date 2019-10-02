const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

//routes
const dataRoute = require('./routes');
app.use(dataRoute);

//app listening on port 8080
//database connected to localhost
mongoose
    .connect('mongodb://localhost:27017/data', { useNewUrlParser: true })
    .then( result => {
        app.listen(8080);
        console.log('connected');
    })
    .catch( err => {
        console.log(err);
    });


//

