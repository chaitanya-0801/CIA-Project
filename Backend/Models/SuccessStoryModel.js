import mongoose from "mongoose";

const successStorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SuccessStory = mongoose.model("SuccessStory", successStorySchema);
export default SuccessStory;
