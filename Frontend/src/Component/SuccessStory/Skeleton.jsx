import React from "react";

const Skeleton = () => {
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
        {/* Visa Approved */}
        <div className="h-5 w-32 bg-gray-300 rounded"></div>

        {/* Name */}
        <div className="h-8 w-3/4 bg-gray-300 rounded mt-4"></div>

        {/* Service Type */}
        <div className="h-5 w-1/2 bg-gray-300 rounded mt-3"></div>

        {/* Country */}
        <div className="h-4 w-1/3 bg-gray-300 rounded mt-2"></div>

        {/* Quote Icon */}
        <div className="h-8 w-8 bg-gray-300 rounded-full mt-4"></div>

        {/* Message */}
        <div className="mt-4 space-y-2">
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-4/5 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;