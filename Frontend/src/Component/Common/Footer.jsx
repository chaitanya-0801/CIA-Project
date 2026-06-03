import LogoLandscape from "../../assets/LogoLandscape.png";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import {
  QuickLinks,
  ServicesLinks,
  ContactInfo,
  SocialLinks,
} from "../../Data/FooterData";

const Footer = () => {
  return (
    <footer className="bg-(--backgroundDark) text-(--whiteText)">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <img
              src={LogoLandscape}
              alt="CIA LogoLandscape"
              className="w-55 h-40 rounded-md bg-white p-1"
            />

            <h2 className="text-xl font-bold mt-4">
              Chaudhary Immigration Academy
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Helping students and professionals achieve their dreams of
              studying, working, and traveling abroad through trusted guidance
              and professional immigration services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {QuickLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link}
                    className="text-gray-300 hover:text-(--primaryColor) transition"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3">
              {ServicesLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link}
                    className="text-gray-300 hover:text-(--primaryColor) transition"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">
              {ContactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <Icon className="text-(--primaryColor)" />
                    <span>{item.value}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Social Links */}
          <div className="flex gap-4">
            {SocialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    p-3
                    rounded-full
                    bg-white/10
                    hover:bg-(--primaryColor)
                    transition-all
                    duration-300
                  "
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Chaudhary Immigration Academy.
            All Rights Reserved.
          </p>

              </div>

<div className="mx-auto mt-4 text-center text-gray-400 border-t border-white/10 pt-4">
  <p className="flex items-center justify-center gap-2 flex-wrap">
    Developed and Designed with
    <FaHeart className="text-red-500" />
    by
    <a
      href="https://iamchaitanya.vercel.app/"
      target="_blank"
      rel="noreferrer"
      className="text-(--primaryColor) hover:underline font-semibold"
    >
      Chaitanya
    </a>
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;