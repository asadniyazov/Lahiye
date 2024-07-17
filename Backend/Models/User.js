import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true  },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'user' },
}, { timestamps: true });

export const UsersModel = mongoose.model('projectusers', usersSchema);