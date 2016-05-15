/*jslint node:true*/
var mongoose = require('mongoose');
var  autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/chatapp");

autoIncrement.initialize(connection);
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  created_at:  {
    type : Date,
    default : Date.now()
  }
});
userSchema.plugin(autoIncrement.plugin, 'User');
var User = connection.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;

