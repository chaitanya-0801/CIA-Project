import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },

  service: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["Pending", "In Progress", "Resolved"],
    default: "Pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.ContactForm ||
  mongoose.model(
    "ContactForm",
    contactFormSchema
  );