require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

// console.log(process.env.DB_NAME);

// list of routes 
const canteen = require('./routes/canteen');
const seller  = require('./routes/seller');

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use(canteen);
app.use(seller);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});