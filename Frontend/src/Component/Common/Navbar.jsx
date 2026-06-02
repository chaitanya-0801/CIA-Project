import Logo from "../../assets/Logo.png";
import NavBarLinks from "../../Data/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import CTAButton from "./CTAButton";
import DarkMode from "../../Config/DarkMode";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-20 flex items-center justify-between px-6 bg-(--whiteText) shadow-md sticky top-0 z-50">

      {/* Logo */}
      <img
        src={Logo}
        alt="Logo"
        className="w-16 h-16 rounded-full"
      />

      {/* Navigation Links */}
      <div className="flex items-center gap-6">

        {NavBarLinks.map((item, idx) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={idx}
              to={item.link}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 transition-all duration-300 ${
                  isActive
                    ? "text-(--primaryColor)  border-b-2 border-(--primaryColor) font-bold"
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

      {/* CTA */}
      <div className="flex items-center gap-4">
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
      <DarkMode />
          </div>

    </div>
  );
};

export default Navbar;