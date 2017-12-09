// grab the things we need
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

// create a schema
var movieSchema = new Schema({
  filename: { type: String, required: true },
  path: { type: String, required: true, unique: true },
  cover: { type: String },
  meta: {
    title: { type: String },
    genres: { type: Array },
    duration: { type: String },
    date: { type: Date },
    director: { type: String },
    producer: { type: Array },
    actors: { type: Array },
    plot: { type: String },
    agerating: { type: Boolean },
  },
  added: { type: Date },
  changed: { type: Date }
},
{
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Movie = mongoose.model('Movie', movieSchema);

// make this available to our users in our Node applications
module.exports = Movie;


/*

  - Use something like:
    mongoose.model('movies', movieSchema, 'medialibs');
    mongoose.model('books', bookSchema, 'medialibs');
    mongoose.model('music', musicSchema, 'medialibs');

*/