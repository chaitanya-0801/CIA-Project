// src/Data/FooterData.js

import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const QuickLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Services",
    link: "/our-services",
  },
  {
    name: "Success Stories",
    link: "/success-stories",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  }
];

export const ServicesLinks = [
  {
    name: "Study Visa",
    link: "/study-visa",
  },
  {
    name: "Work Visa",
    link: "/work-visa",
  },
  {
    name: "Tourist Visa",
    link: "/tourist-visa",
  },
  {
    name: "Visitor Visa",
    link: "/visitor-visa",
  },
  {
    name: "Air Tickets",
    link: "/air-tickets",
  },
];

export const ContactInfo = [
  {
    icon: FaMapMarkerAlt,
    value: "Opp. BDPO Office, Ladwa, Kurukshetra, Haryana",
  },
  {
    icon: FaPhone,
    value: "+91 8295280143",
  },
  {
    icon: FaEnvelope,
    value: "cialadwa@gmail.com",
  },
];

export const SocialLinks = [
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/education.ladwa/",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/chaudhary_immgration_academy",
  },

];
