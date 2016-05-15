/*jslint node:true*/
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  created_at:  {
    type : Date,
    default : Date.now()
  }
});

var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;

