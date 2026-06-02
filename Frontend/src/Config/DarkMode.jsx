import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");

    if (darkMode === "true") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDark;

    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", newTheme);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="
        flex items-center justify-center
        w-12 h-12
        rounded-full
        bg-(--primaryColor)
        text-(--whiteText)
        hover:scale-110
        transition-all duration-300
      "
    >
      {isDark ? (
        <FaSun className="text-xl" />
      ) : (
        <FaMoon className="text-xl" />
      )}
    </button>
  );
};

export default DarkMode;