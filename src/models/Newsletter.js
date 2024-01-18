import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  
  email: { type: String },
  
}, { timestamps: true });


mongoose.models = {}

export default mongoose.model("Newsletter", userSchema);