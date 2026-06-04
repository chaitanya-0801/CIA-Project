import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema({
  posterUrl: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now(),
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
  lastDate: {
    type: Date,
    },
  
});

const OfferModel = mongoose.model('Offer', OfferSchema)
export default OfferModel
