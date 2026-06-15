import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema({
  posterUrl: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  lastDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const OfferModel = mongoose.model("Offer", OfferSchema);
export default OfferModel;
