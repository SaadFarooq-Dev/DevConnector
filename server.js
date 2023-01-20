require('dotenv').config()

const express = require('express');
const app = express();

app.get('/', (req, res) => {
 res.send('Api Running');
});

const PORT = process.env.PORT || 4900;

app.listen(PORT, (req, res) => {
 console.log(`Listen on ${PORT}`);
});
