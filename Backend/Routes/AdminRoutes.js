import express from "express";

import {
  getAllContactForms,
  updateContactFormStatus,
} from "../Controllers/ContactFormController.js";
import {
  newSuccessStory,
  deleteSuccessStory,
  updateSuccessStory,
  getAllSuccessStories,
} from "../Controllers/SuccessStoryController.js";
import {
  Login,
  createMoreAdmin,
  allAdmins,
} from "../Controllers/adminController.js";
import {
  addOffer,
  updateOffer,
  deleteOffer,
} from "../Controllers/OffersControllers.js";

import { checkAdmin, checkSuperAdmin } from "../Middlewares/Auth.js";
import { dashboardStats } from "../Controllers/Dashboard.js";
import adminModel from "../Models/adminModel.js";

const adminRoutes = express.Router();

adminRoutes.get("/demo", (req, res) => {
  res.send("This is a Admin demo route!");
});
adminRoutes.post("/login", Login);

adminRoutes.post("/add-story", checkAdmin, newSuccessStory);
adminRoutes.put("/update-story/:id", checkAdmin, updateSuccessStory);
adminRoutes.delete("/delete-story/:id", checkAdmin, deleteSuccessStory);

adminRoutes.get("/contact-forms", checkAdmin, getAllContactForms);

adminRoutes.post("/create-admin", checkSuperAdmin, createMoreAdmin);
adminRoutes.get("/all-admins", checkSuperAdmin, allAdmins);

adminRoutes.post("/add-offer", checkAdmin, addOffer);
adminRoutes.put("/update-offer/:id", checkAdmin, updateOffer);
adminRoutes.delete("/delete-offer/:id", checkAdmin, deleteOffer);

adminRoutes.put("/contact-forms/:id", updateContactFormStatus);
adminRoutes.get("/dashboard-stats", checkAdmin, dashboardStats);

export default adminRoutes;
