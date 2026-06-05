import uploadImage from "../Utils/UploadImage.js";
import Testimonial from "../Models/TestimonialsModel.js";
import sendMail from "../Utils/SendMail.js";
import reviewThankYouTemplate from '../MailTemplete/reviewThankYouTemplate.js'

const addReview = async (req, res) => {
    try {
        const { name, rating, message,email } = req.body;
       const image = req.files?.imageUrl;
        let imagepath=null;
       if (!image) {
           imagepath=`https://ui-avatars.com/api/?name=${name}`
        }
       else
       {
           
         imagepath = await uploadImage(image.tempFilePath);
           }
        const testimonial = new Testimonial({
            name,
            email,
            rating,
            message,
            imageUrl:imagepath,
        });
        await testimonial.save();

          const html= reviewThankYouTemplate({
    name,
    rating,
    message
  })

        await sendMail(email,'Thank You For your Prestigous Review-CIA,Ladwa',html)

        res.status(201).json({ message: "Testimonial created successfully" });
    } catch (error) {
        console.error("Error creating testimonial:", error);
        res.status(500).json({ message: "Failed to create testimonial" });
    }
};

const getAllReview = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.status(200).json(testimonials);
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        res.status(500).json({ message: "Failed to fetch testimonials" });
    }
};

export { addReview, getAllReview };