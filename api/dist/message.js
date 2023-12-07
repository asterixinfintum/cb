"use strict";

var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    "default": false
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: String,
    required: true,
    "default": false
  },
  message: {
    type: String,
    required: true,
    "default": false
  }
});
var Message = mongoose.model('Message', messageSchema);
module.exports = Message;