import mongoose from 'mongoose';

const { Schema } = mongoose;


const medialibSchema = new Schema(
  {
    name: { type: String, required: true },
    module: { type: String, required: true },
    content: { type: Schema.Types.Mixed, unique: true },
    locations: { type: Array, required: true },
    agent: { type: String },
    scanner: { type: String },
  },
  {
    timestamps: true,
  },
);

const Medialib = mongoose.model('Medialib', medialibSchema);


export default Medialib;
