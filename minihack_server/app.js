const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const apiRouter = require('./routers/apiRouter');
const GameModel = require('./models/game.model');

let app = express();

mongoose.connect('mongodb://admin:hieu123@ds113402.mlab.com:13402/scorekeeperdb', (err) => {
    if(err) console.error(err)
    else console.log("Connect DB success!");
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Score keeper Server');
});

app.use('/api', apiRouter);

app.listen(process.env.PORT||6969, (err) => {
    if(err) console.log(err)
    else console.log("App is listening!");
});