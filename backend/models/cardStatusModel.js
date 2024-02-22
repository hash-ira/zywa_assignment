const mongoose = require('mongoose')

const cardStatusSchema = new mongoose.Schema({
    phoneNumber: { type: String, required: true },
    cardId: { type: String, required: true },
    status: { type: String, required: true },
    lastUpdate: { type: Date, default: Date.now },
    additionalInfo: String
});

const CardStatus = mongoose.model('CardStatus', cardStatusSchema);
module.exports = CardStatus;