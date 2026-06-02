import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Component/Common/Navbar.jsx";
import HomePage from "../Pages/HomePage.jsx";
import AddReviewPage from "../Pages/AddReviewPage.jsx";
import ContactPage from "../Pages/ContactPage.jsx";
import AboutPage from "../Pages/AboutPage.jsx";
import ServicesPage from "../Pages/ServicesPage.jsx";
import SuccessStoryPage from "../Pages/SuccessStoryPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HomePage />
      </>
    ),
  },
  {
    path: "/add-review",
    element: (
      <>
        <Navbar />
        <AddReviewPage />
      </>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <>
        <Navbar />
        <ContactPage />
      </>
    ),
  },
  {
    path: "/about-us",
    element: (
      <>
        <Navbar />
        <AboutPage />
      </>
    ),
  },
  {
    path: "/our-services",

    element: (
      <>
        <Navbar />
        <ServicesPage />
      </>
    ),
  },
  {
    path: "/success-stories",
    element: (
      <>
        <Navbar />
        <SuccessStoryPage />
      </>
    ),
  },
]);

export default router;
