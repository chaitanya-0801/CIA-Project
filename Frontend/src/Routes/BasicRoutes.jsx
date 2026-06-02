import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";

import HomePage from "../Pages/HomePage";
import AddReviewPage from "../Pages/AddReviewPage";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/AboutPage";
import ServicesPage from "../Pages/ServicesPage";
import SuccessStoryPage from "../Pages/SuccessStoryPage";

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
        path: "add-review",
        element: <AddReviewPage />,
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
    ],
  },
]);

export default router;