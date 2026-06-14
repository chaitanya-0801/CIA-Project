import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CTAButton from "../Component/Common/CTAButton";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        bg-linear-to-br
        from-[#142D7A]
        via-[#1F3FAF]
        to-[#2948B8]
      "
    >
      <FaExclamationTriangle
        className="
          text-yellow-400
          text-8xl
          mb-6
        "
      />

      <h1
        className="
          text-8xl
          font-extrabold
          text-white
        "
      >
        404
      </h1>

      <h2
        className="
          text-3xl
          font-bold
          text-white
          mt-4
        "
      >
        Page Not Found
      </h2>

      <p
        className="
          text-(--lightText)
          max-w-xl
          mt-4
          text-lg
        "
      >
        Sorry, the page you are looking for does not exist or may
        have been moved. Let's get you back on track.
      </p>

      <div className="flex gap-4 mt-8">

        <CTAButton
          text="Go Home"
          className="
            bg-(--secondaryCtaBg)
            text-(--secondaryCtaText)
          "
          onClick={() => navigate("/")}
        />

      </div>
    </div>
  );
};

export default ErrorPage;