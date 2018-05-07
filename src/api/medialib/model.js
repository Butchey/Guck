import mongoose from 'mongoose';
var Schema = mongoose.Schema;


var medialibSchema = new Schema({
  name: { type: String, required: true },
  module: { type: String, required: true },
  content: { type: Schema.Types.Mixed, unique: true },
  locations: { type: Array, required: true },
  agent: { type: String },
  scanner: { type: String }
},
{
    timestamps: true
});

var Medialib = mongoose.model('Medialib', medialibSchema);


export default Medialib;