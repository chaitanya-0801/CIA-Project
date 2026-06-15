import React from "react";

const SkeletonOffer = () => {
  return (
    <div
      className="
        w-full
        md:w-[47%]
        lg:w-[31%]
        bg-white
        rounded-2xl
        shadow-lg
        overflow-hidden
        animate-pulse
      "
    >
      {/* Image */}
      <div className="w-full h-75 bg-gray-300"></div>

      <div className="p-6">
        <div className="h-5 w-32 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonOffer;