import { NavLink, useNavigate } from "react-router-dom";
// import Director from '../../assets/Director.jpeg'

import {
  FaTachometerAlt,
  FaEnvelope,
  FaStar,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import Logo from "../../assets/Logo.png";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const admin = JSON.parse(
    localStorage.getItem("admin")
  );

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    navigate("/");
  };

  const links = [
    {
      name: "Dashboard",
      icon: FaTachometerAlt,
      path: "/dashboard",
    },
    {
      name: "Queries",
      icon: FaEnvelope,
      path: "/queries",
    },
    {
      name: "Offers",
      icon: FaEnvelope,
      path: "/offers",
    },
    // {
    //   name: "Reviews",
    //   icon: FaStar,
    //   path: "/reviews",
    // },
    {
      name: "Admins",
      icon: FaUsers,
      path: "/admins",
    },
    // {
    //   name: "Settings",
    //   icon: FaCog,
    //   path: "/settings",
    // },
  ];

  return (
    <div
      className="
        w-72
        min-h-screen
        bg-linear-to-b
        from-[#142D7A]
        via-[#1F3FAF]
        to-[#2948B8]
        text-white
        flex
        flex-col
        justify-between
        shadow-xl
      "
    >
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex flex-col items-center py-8 border-b border-white/20">

          <img
            src={Logo}
            alt="CIA Logo"
            className="
            bg-white
              w-20
              h-20
              rounded-full
              border-4
              border-white
            "
          />

          <h2 className="mt-4 text-xl font-bold">
            CIA Admin
          </h2>

          <p className="text-sm text-gray-200">
            {admin?.name}
          </p>

          <p className="text-xs text-gray-300">
            {admin?.role}
          </p>
        </div>

        {/* Links */}
        <div className="mt-6 px-4">

          {links.map((item, index) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3
                  rounded-lg
                  mb-2
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-white text-(--primaryColor) font-semibold"
                      : "hover:bg-white/10"
                  }
                `
                }
              >
                <Icon className="text-xl" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}

        </div>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-white/20">

        <button
          onClick={logoutHandler}
          className="
            w-full
            flex
            items-center
            gap-4
            px-4
            py-3
            rounded-lg
            bg-red-500
            hover:bg-red-600
            transition-all
          "
        >
          <FaSignOutAlt />

          Logout
        </button>

      </div>
    </div>
  );
};

export default AdminSidebar;