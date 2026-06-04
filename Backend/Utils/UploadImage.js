import cloudinaryConfig from "../Config/Cloudinary.js";
import { v2 as cloudinary } from 'cloudinary';

const uploadImage = async (filePath,folderName) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: folderName,
            use_filename: true,
            unique_filename: false,
        });
        return result.secure_url;
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        throw error;
    }
};
export default uploadImage;
