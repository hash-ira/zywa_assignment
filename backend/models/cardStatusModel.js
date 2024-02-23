const mongoose = require('mongoose')

const cardStatusSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true
    },
    cardId: {
        type: String,
        required: true
    },
    userContact: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    lastUpdate: {
        type: Date,
        required : true
    },
    comment: String
});

const CardStatus = mongoose.model('CardStatus', cardStatusSchema);
module.exports = CardStatus;