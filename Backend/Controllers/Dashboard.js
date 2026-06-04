import ContactForm from "../Models/contactFormModel.js";
import TestimonialsModel from "../Models/TestimonialsModel.js";
import OfferModel from "../Models/OffersModel.js";

export const dashboardStats = async (req, res) => {
  try {
    const totalQueries =
      await ContactForm.countDocuments();

    const pendingQueries =
      await ContactForm.countDocuments({
        status: "Pending",
      });

    const totalReviews =
      await TestimonialsModel.countDocuments();

    const totalOffers =
      await OfferModel.countDocuments();

    const recentQueries =
      await ContactForm.find()
        .sort({ createdAt: -1 })
        .limit(5);

    return res.status(200).json({
      success: true,
      totalQueries,
      pendingQueries,
      totalReviews,
      totalOffers,
      recentQueries,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};