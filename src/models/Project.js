import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  adderName: { type: String },
  adderEmail: { type: String },
  projectName: { type: String },
  coverImage: { type: String },
  projectDescription: { type: String },
  gitHubUrl: { type: String },
  isBlocked: { type: Boolean },
  isOwner: { type: Boolean },
  isPublished: { type: Boolean },
}, { timestamps: true });


mongoose.models = {}

export default mongoose.model("Projects", userSchema);