import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, unique: true },
  email: { type: String },
  password: { type: String },
  githubProfile: { type: String },
  isPremium: {type: Boolean, default: false},
  isBlocked: { type: Boolean },
  isAdmin: { type: Boolean }
}, { timestamps: true });


// @ts-ignore
mongoose.models = {}

export default mongoose.model("User", userSchema);