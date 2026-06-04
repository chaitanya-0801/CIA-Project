import express from 'express';

import { getAllSuccessStories } from '../Controllers/SuccessStoryController.js';
import { getAllReview,addReview } from '../Controllers/TestimonialsController.js';
import { newContactForm } from '../Controllers/ContactFormController.js';
import { getAllOffers } from '../Controllers/OffersControllers.js';

const basicRoutes = express.Router();

basicRoutes.get('/demo', (req, res) => {
    res.send('This is a demo route!');
});

basicRoutes.get('/success-stories', getAllSuccessStories);
basicRoutes.get('/all-review', getAllReview);
basicRoutes.post('/add-review', addReview);
basicRoutes.post('/contact', newContactForm);
basicRoutes.get('/getoffer', getAllOffers);



export default basicRoutes;