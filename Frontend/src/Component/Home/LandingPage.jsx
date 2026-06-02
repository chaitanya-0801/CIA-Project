import React from "react";
import Landing from "../../assets/Landing.png";

const LandingPage = () => {
  return (
    <div className="flex w-full justify-around items-center px-10 py-10">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-(--primaryText)">
          Your Gateway to Study Abroad
        </h1>
        <p className="mt-4 text-(--secondaryText)">
          Explore top universities, connect with experts, and make your dream
          of studying abroad a reality.
        </p>
      </div>

      <img
        src={Landing}
        alt="landing page"
        className="w-1/2 rounded-lg border-2 border-transparent hover:border-(--borderColorDark) hover:scale-105 transition-all duration-300"
      />
    </div>
  );
};

export default LandingPage;