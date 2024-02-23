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
        default: Date.now
    },
    comment: String
});

const CardStatus = mongoose.model('CardStatus', cardStatusSchema);
module.exports = CardStatus;