const SkeletonReview = () => {
  return (
    <div
      className="
      w-[25%]
        bg-white
        p-8
        rounded-2xl
        shadow-lg
        h-full
        animate-pulse
      "
    >
      {/* User Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-gray-300"></div>

        <div className="flex-1">
          {/* Name */}
          <div className="h-5 w-32 bg-gray-300 rounded mb-3"></div>

          {/* Stars */}
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <div key={star} className="w-4 h-4 bg-gray-300 rounded" />
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <div className="mt-6 space-y-3">
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonReview;
