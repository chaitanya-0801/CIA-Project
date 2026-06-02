import React from "react";
import Logo from "../../assets/Logo.png";
import NavBarLinks from "../../Data/Navbar";
import { NavLink } from "react-router-dom";
import CTAButton from "./CTAButton";

const Navbar = () => {
  return (
    <div className="w-full h-20  flex items-center justify-between px-4 bg-(--backgroundDark)">
      <img src={Logo} alt="Logo" className="w-18 h-18 rounded-full bg-white" />
      <div className="flex items-center gap-4">
        {NavBarLinks.map((item, idx) => {
          const Icon = item.icon;
          return (
            <NavLink
              to={item.link}
              key={idx}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-sm transition-all ${
                  isActive
                    ? "text-(--primaryColor) font-bold border-t-3 border-(--borderColors)"
                    : "text-(--whiteText)"
                }`
              }
            >
              <Icon className="text-xl" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </div>
      <CTAButton
        text={"Add Review"}
        className="bg-(--primaryColor) text-(--whiteText)"
        onClick={() => {
          console.log("Hello");
        }}
      />
    </div>
  );
};

export default Navbar;
