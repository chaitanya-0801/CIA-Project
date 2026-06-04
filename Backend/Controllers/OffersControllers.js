import OfferModel from "../Models/OffersModel.js";
import uploadImage from "../Utils/UploadImage.js";

const addOffer = async (req, res) => {
  try {
    const { name, description, startDate, requirements, lastDate } = req.body;
    const image = req.files.posterUrl;
    const posterUrl = await uploadImage(image.tempFilePath);

    await OfferModel.create({
      name,
      description,
      requirements,
      startDate,
      lastDate,
      posterUrl: posterUrl,
    });
    res.status(200).json({
      success: true,
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
    const offers = await OfferModel.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      offers,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

 const updateOffer = async (req, res) => {
  try {
    const { id } = req.params;

    const offer = await OfferModel.findById(id);

    if (!offer) {
      return res.status(404).json({
        success: false,
        message: "Offer not found",
      });
    }

    let posterUrl = offer.posterUrl;

    if (req.files?.posterUrl) {
      posterUrl = await uploadImage(req.files.posterUrl.tempFilePath);
    }

    const updatedOffer = await OfferModel.findByIdAndUpdate(
      id,
      {
        posterUrl,
        name: req.body.name,
        description: req.body.description,
        requirements: req.body.requirements,
        startDate: req.body.startDate,
        lastDate: req.body.lastDate,
      },
      {
        new: true,
      },
    );

    return res.status(200).json({
      success: true,
      message: "Offer Updated",
      offer: updatedOffer,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteOffer = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOffer = await OfferModel.findByIdAndDelete(id);

    if (!deletedOffer) {
      return res.status(404).json({
        success: false,
        message: "Offer not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Offer deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export { addOffer, getAllOffers, updateOffer, deleteOffer };
