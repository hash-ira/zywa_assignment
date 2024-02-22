const express = require('express');
const bodyParser = require('body-parser');
const CardStatus = require('./models/cardStatusModel');
const connectDB = require('./config/mongoDB.js');
const dotenv = require('dotenv');

dotenv.config({path:__dirname+'/../.env'});
connectDB();

const app = express();
app.use(bodyParser.json());


app.get('/get_card_status', (req, res) => {
    res.send("hello there")
});

app.post('/get_card_status', (req, res) => {
    console.log(req);
});



const server = app.listen( 3000 , () => {
    console.log(`Listening on port 3000`);
})