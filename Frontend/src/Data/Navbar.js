import {
  VscHome,
  VscMail,
  VscInfo,
  VscSettings,
  VscSmiley
} from "react-icons/vsc";

import { BiSolidOffer } from "react-icons/bi";

const NavBarLinks = [
  {
    name: "Home",
    link: "/",
    icon: VscHome,
  },
  {
    name: "Offers",
    link: "/all-offers",
    icon: BiSolidOffer,
  },
  {
    name: "About Us",
    link: "/about-us",
    icon: VscInfo,
  },
  {
    name: "Our Services",
    link: "/our-services",
    icon: VscSettings,
  },
  {
    name: "Success Stories",
    link: "/success-stories",
    icon: VscSmiley,
  },
  {
    name: "Contact Us",
    link: "/contact-us",
    icon: VscMail,
  },
];

export default NavBarLinks;