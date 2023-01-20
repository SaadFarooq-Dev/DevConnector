require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connect to database
connectDB();

app.get('/', (req, res) => {
 res.send('Api Running');
});

const PORT = process.env.PORT || 4900;

app.listen(PORT, (req, res) => {
 console.log(`Listen on ${PORT}`);
});
