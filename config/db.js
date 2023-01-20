const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

mongoose.set('strictQuery', false);
const connectDB = async () => {
 try {
  await mongoose.connect(db);
  console.log('Monogdb Connected....');
 } catch (error) {
  console.log(error.message);

  //Exit process if connection failed
  process.exit(1);
 }
};

module.exports = connectDB;
