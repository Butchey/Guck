// grab the things we need
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

// create a schema
var medialibSchema = new Schema({
  name: String,
  module: { type: String, required: true, unique: true }, //    type: module
  locations: { type: Array },
  agent: { type: String }, //    type: agent
  scanner: { type: String } //    type: scanner
},
{
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('Medialib', medialibSchema);

// make this available to our users in our Node applications
module.exports = User;