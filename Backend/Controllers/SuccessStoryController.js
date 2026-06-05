import uploadImage from "../Utils/UploadImage.js";
import SuccessStory from "../Models/SuccessStoryModel.js";

const newSuccessStory = async (req, res) => {
  try {
    const { name, country, serviceType, message } = req.body;
    const image = req.files.imageUrl;

    const imagepath = await uploadImage(image.tempFilePath);
    console.log(imagepath);
    const successStory = new SuccessStory({
      name,
      country,
      serviceType,
      message,
      imageUrl:path,
    });
    await successStory.save();
    res.status(201).json({ message: "Success story created successfully" });
  } catch (error) {
    console.error("Error creating success story:", error);
    res.status(500).json({ message: "Failed to create success story" });
  }
};

const getAllSuccessStories = async (req, res) => {
  try {
    const successStories = await SuccessStory.find();
    res.status(200).json(successStories);
  } catch (error) {
    console.error("Error fetching success stories:", error);
    res.status(500).json({ message: "Failed to fetch success stories" });
  }
};

export { newSuccessStory, getAllSuccessStories };
