import sendMail from "../Utils/SendMail.js";
import ContactForm from "../Models/ContactFormModel.js";
import enquiryReceivedTemplate from "../MailTemplete/enquiryReceivedTemplate.js";
import adminEnquiryTemplate from '../MailTemplete/adminEnquiryTemplate.js'

const newContactForm = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    const contactForm = new ContactForm({
      name,
      email,
      phone,
      service,
      message,
    });
    await contactForm.save();
    const html1 = enquiryReceivedTemplate({
      name,
      email,
      phone,
      service,
    });
    // Send confirmation email
    await sendMail(email, "Contact Form Submission", html1);
const html2=adminEnquiryTemplate({
    name,
    email,
    phone,
    service,
    message,
  })
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
    const contactForms = await ContactForm.find();
    res.status(200).json(contactForms);
  } catch (error) {
    console.error("Error fetching contact forms:", error);
    res.status(500).json({ message: "Failed to fetch contact forms" });
  }
};

export { newContactForm, getAllContactForms };
