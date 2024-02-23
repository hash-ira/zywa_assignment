const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const CardStatus = require('./models/cardStatusModel');
const { importData } = require('./models/data.js');
const connectDB = require('./config/mongoDB.js');
const dotenv = require('dotenv');
var cors = require('cors');

dotenv.config({path:__dirname+'/../.env'});
connectDB();

const app = express();
app.use(bodyParser.json());

//importing Data from csv
importData( './data/Sample Card Status Info - Pickup.csv', 'picked up');
importData('./data/Sample Card Status Info - Delivery exceptions.csv', 'delivery attempted');
importData('./data/Sample Card Status Info - Delivered.csv', 'delivered');
importData('./data/Sample Card Status Info - Returned.csv', 'returned');

const corsOptions ={
    origin: ['http://localhost:3000'],
    credentials: true,
    optionSuccessStatus:200
};

app.use(cors(corsOptions));


app.get('/get_card_status', (req, res) => {
    res.send("hello there")
});

app.post('/get_card_status', async (req, res) => {
    try {
        const { phoneNumber, cardId } = req.body;

        if (!phoneNumber && !cardId) {
            return res.status(400).json({ error: 'Phone number or card ID is invalid' });
        }

        let cardStatusArr;
        if (phoneNumber) {
            cardStatusArr = await CardStatus.find({ userContact: phoneNumber }).exec();
        } else {
            cardStatusArr = await CardStatus.find({ cardId }).exec();
        } 

        if (cardStatusArr.length === 0) {
            return res.status(404).json({ error: 'Card status not found' });
        }

        cardStatusArr.sort((a, b) => a.lastUpdate - b.lastUpdate)

        res.json(cardStatusArr);
    }catch (error) {
        console.error('Error retrieving card status:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



const server = app.listen( 4000 , () => {
    console.log(`Listening on port 4000`);
})