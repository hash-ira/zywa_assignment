const express = require('express')
const app = express();

app.get('/get_card_status', (req, res) => {
    res.send("hello there")
});

app.post('/get_card_status', (req, res) => {
    console.log(req);
});



const server = app.listen( 3000 , () => {
    console.log(`Listening on port 3000`);
})