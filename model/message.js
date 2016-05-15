/*jslint node:true*/
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var messageSchema = new Schema({
  username:{ type: String, required: true },
  text: { type: String, required: true },
  created_at:  {
    type : Date,
    default : Date.now()
  }
});

var Massage = mongoose.model('Message', messageSchema);

// make this available to our users in our Node applications
module.exports = Massage;

