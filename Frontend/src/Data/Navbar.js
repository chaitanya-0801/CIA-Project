import {
  VscHome,
  VscMail,
  VscInfo,
  VscSettings,
  VscSmiley
} from "react-icons/vsc";

const NavBarLinks = [
  {
    name: "Home",
    link: "/",
    icon: VscHome,
  },
  {
    name: "Contact Us",
    link: "/contact-us",
    icon: VscMail,
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
];

export default NavBarLinks;