/*jslint node:true*/
var mongoose = require('mongoose');
var  autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/chatapp");

autoIncrement.initialize(connection);
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

messageSchema.plugin(autoIncrement.plugin, 'Message');
var Message = connection.model('Message', messageSchema);

// make this available to our users in our Node applications
module.exports = Message;

