import mongoose from 'mongoose';

const { Schema } = mongoose;


const librarySchema = new Schema(
  {
    name: { type: String, required: true },
    module: { type: String, required: true },
    content: [{
      item: { type: Schema.Types.ObjectId, refPath: 'module' },
    }],
    locations: { type: Array, required: true },
    agent: { type: String },
    scanner: { type: String },
  },
  {
    timestamps: true,
  },
);

const Library = mongoose.model('Medialib', librarySchema);


export default Library;
