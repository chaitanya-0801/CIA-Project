import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";

import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/AboutPage";
import ServicesPage from "../Pages/ServicesPage";
import SuccessStoryPage from "../Pages/SuccessStoryPage";
import ErrorPage from "../Pages/ErrorPage";
import Offer from "../Component/Offers";


import StudyVisa from '../Component/AllServicesDetail/StudyVisa'
import WorkVisa from '../Component/AllServicesDetail/WorkVisa'
import VisitorVisa from '../Component/AllServicesDetail/VisitorVisa'
import TouristVisa from '../Component/AllServicesDetail/TouristVisa'
import AirTickets from '../Component/AllServicesDetail/AirTicket'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "all-offers",
        element: <Offer />,
      },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
      {
        path: "about-us",
        element: <AboutPage />,
      },
      {
        path: "our-services",
        element: <ServicesPage />,
      },
      {
        path: "success-stories",
        element: <SuccessStoryPage />,
      },
      {
        path: "study-visa",
        element: <StudyVisa />,
      },
      {
        path: "work-visa",
        element: <WorkVisa />,
      },
      {
        path: "visitor-visa",
        element: <VisitorVisa />,
      },
      {
        path: "tourist-visa",
        element: <TouristVisa />,
      },
      {
        path: "air-tickets",
        element: <AirTickets />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      }
    ],
  },
]);

export default router;