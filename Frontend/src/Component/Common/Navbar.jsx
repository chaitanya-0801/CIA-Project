import { useState } from "react";
import Logo from "../../assets/Logo.png";
import NavBarLinks from "../../Data/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import CTAButton from "./CTAButton";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-(--whiteText) shadow-md">

      <div className="h-20 flex items-center justify-between px-6">

        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="w-16 h-16 rounded-full cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">

          {NavBarLinks.map((item, idx) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={idx}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 transition-all duration-300 ${
                    isActive
                      ? "text-(--primaryColor) border-b-2 border-(--primaryColor) font-bold"
                      : "text-(--primaryText) hover:text-(--primaryColor)"
                  }`
                }
              >
                <Icon className="text-xl" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <CTAButton
            text="Add Review"
            className="
              bg-(--primaryColor)
              text-(--whiteText)
              hover:scale-105
              transition-all
              duration-300
            "
            onClick={() => navigate("/add-review")}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-(--primaryColor)"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            lg:hidden
            bg-(--whiteText)
            border-t
            border-gray-200
            px-6
            py-4
            flex
            flex-col
            gap-4
          "
        >
          {NavBarLinks.map((item, idx) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={idx}
                to={item.link}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-2 ${
                    isActive
                      ? "text-(--primaryColor) font-bold"
                      : "text-(--primaryText)"
                  }`
                }
              >
                <Icon className="text-lg" />
                {item.name}
              </NavLink>
            );
          })}

          <CTAButton
            text="Add Review"
            className="
              bg-(--primaryColor)
              text-(--whiteText)
              mt-2
            "
            onClick={() => {
              navigate("/add-review");
              setIsOpen(false);
            }}
          />
        </div>
      )}

    </div>
  );
};

export default Navbar;