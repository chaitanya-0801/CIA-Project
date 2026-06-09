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
      imageUrl:imagepath,
    });
    await successStory.save();
    res.status(201).json({
      success:true,
      message: "Success story created successfully"
    });
  } catch (error) {
    console.error("Error creating success story:", error);
    res.status(500).json({
      success:false,
      message: "Failed to create success story"
    });
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

 const updateSuccessStory = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const story =
      await SuccessStory.findById(id);

    if (!story) {
      return res.status(404).json({
        success: false,
        message: "Success Story not found",
      });
    }

    let imageUrl = story.imageUrl;

    if (req.files?.imageUrl) {
      imageUrl = await uploadImage(
        req.files.imageUrl.tempFilePath
      );
    }

    const updatedStory =
      await SuccessStory.findByIdAndUpdate(
        id,
        {
          name: req.body.name,
          country: req.body.country,
          serviceType:
            req.body.serviceType,
          message: req.body.message,
          imageUrl,
        },
        {
          new: true,
          runValidators: true,
        }
      );

    return res.status(200).json({
      success: true,
      message:
        "Success Story Updated Successfully",
      story: updatedStory,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


 const deleteSuccessStory = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    console.log("id",id)
    const deletedStory =
      await SuccessStory.findByIdAndDelete(
        id
      );

    if (!deletedStory) {
      return res.status(404).json({
        success: false,
        message: "Success Story not found",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Success Story Deleted Successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export { newSuccessStory, getAllSuccessStories,deleteSuccessStory,updateSuccessStory };
