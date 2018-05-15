import mongoose from 'mongoose';

const { Schema } = mongoose;


const movieSchema = new Schema(
  {
    filename: { type: String, required: true },
    path: { type: String, required: true, unique: true },
    library: { type: Schema.Types.ObjectId, ref: 'Library' },
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
    changed: { type: Date },
  },
  {
    timestamps: true,
  },
);

const Movie = mongoose.model('Movie', movieSchema);


export default Movie;


/*

  - Use something like:
    mongoose.model('movies', movieSchema, 'medialibs');
    mongoose.model('books', bookSchema, 'medialibs');
    mongoose.model('music', musicSchema, 'medialibs');

*/
