import sendMail from "../Utils/SendMail.js";
import ContactForm from "../Models/ContactFormModel.js";
import enquiryReceivedTemplate from "../MailTemplete/enquiryReceivedTemplate.js";
import adminEnquiryTemplate from "../MailTemplete/adminEnquiryTemplate.js";

const newContactForm = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    const newContactForm = new ContactForm({
      name,
      email,
      phone,
      service,
      message,
    });
    await newContactForm.save();
    const html1 = enquiryReceivedTemplate({
      name,
      email,
      phone,
      service,
    });
    // Send confirmation email
    await sendMail(email, "Contact Form Submission", html1);
    const html2 = adminEnquiryTemplate({
      name,
      email,
      phone,
      service,
      message,
    });
    await sendMail(
      "cialadwa@gmail.com",
      `New Query from ${name} for ${service}`,
      html2,
    );
    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ message: "Failed to submit contact form" });
  }
};

const getAllContactForms = async (req, res) => {
  try {
    const { search = "", status, limit, page } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    let query = {};

    if (search) {
      query.$or = [{ name: { $regex: search, $options: "i" } }];
    }

    if (status) {
      query.status = status;
    }
    const total = await ContactForm.countDocuments();

    const contactForms = await ContactForm.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.status(200).json({
      success: true,
      contactForms,
      total
    });
  } catch (error) {
    console.error("Error fetching contact forms:", error);
    res.status(500).json({ message: "Failed to fetch contact forms" });
  }
};

const updateContactFormStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Pending", "In Progress", "Resolved"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    const updatedQuery = await ContactForm.findByIdAndUpdate(
      id,
      { status },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedQuery) {
      return res.status(404).json({
        success: false,
        message: "Query not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status updated successfully",
      query: updatedQuery,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export { newContactForm, getAllContactForms, updateContactFormStatus };
