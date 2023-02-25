const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    },
    birthday: {
      type: Date,
      required: true
    },
    gender: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = UserModel = mongoose.model('user', UserSchema)
