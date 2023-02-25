require('dotenv').config()

const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()

const corsOptions = {
  origin: '*',
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200
}

// Connect to database
connectDB()

// init Middlewares
app.use(express.json({ extended: false }))
app.use(cors(corsOptions)) // Use this after the variable declaration

app.get('/', (req, res) => {
  res.send('Api Running')
})
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

const PORT = process.env.PORT || 4900

app.listen(PORT, (req, res) => {
  console.log(`Listen on ${PORT}`)
})
