import express from 'express';

import { getAllContactForms } from '../Controllers/ContactFormController.js';
import { newSuccessStory } from '../Controllers/SuccessStoryController.js';
import { Login, createMoreAdmin } from '../Controllers/adminController.js';
import { addOffer } from '../Controllers/OffersControllers.js';

import { checkAdmin,checkSuperAdmin } from '../Middlewares/Auth.js';


const adminRoutes = express.Router();

adminRoutes.get('/demo', (req, res) => {
    res.send('This is a Admin demo route!');
});
adminRoutes.post('/login', Login);

adminRoutes.post('/success-stories',checkAdmin,newSuccessStory);
adminRoutes.get('/contact-forms',checkAdmin, getAllContactForms);

adminRoutes.post('/create-admin', checkSuperAdmin, createMoreAdmin)
adminRoutes.post('/add-offer', checkAdmin, addOffer)



export default adminRoutes;