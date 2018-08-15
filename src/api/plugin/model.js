import mongoose from 'mongoose';

const { Schema } = mongoose;

const pluginSchema = new Schema(
  {
    name: String,
    desc: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    admin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', userSchema);

export default User;
