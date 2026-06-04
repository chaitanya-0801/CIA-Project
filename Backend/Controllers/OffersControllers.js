import OfferModel from "../Models/OffersModel.js";
import uploadImage from "../Utils/UploadImage.js";

const addOffer = async (req, res) => {
  try {
    const { name, description, startDate, lastDate } = req.body;
    const image = req.files.posterUrl;
    const posterUrl = await uploadImage(image.tempFilePath);

    await OfferModel.create({
      name,
      description,
      startDate,
      lastDate,
      posterUrl: posterUrl,
    });
    res.status(200).json({
      message: "New Offer Updated",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: true,
    });
  }
};

const getAllOffers = async (req, res) => {
    try {

        const allOffers = await OfferModel.find()
        
        return res.status(200).json({
            allOffers,
            success:true,
            message:"All fetched"
        })
        
    } catch (error) {
        res.status(500).json({
      message: error.message,
      success: true,
    });
    }
}

export {addOffer,getAllOffers}