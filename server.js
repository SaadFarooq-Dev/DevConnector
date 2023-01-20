require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connect to database
connectDB();

//init Middlewares
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
 res.send('Api Running');
});
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/posts', require('./routes/posts'));

const PORT = process.env.PORT || 4900;

app.listen(PORT, (req, res) => {
 console.log(`Listen on ${PORT}`);
});
