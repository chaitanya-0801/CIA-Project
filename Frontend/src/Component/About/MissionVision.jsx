import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">

      <div className="flex flex-col lg:flex-row gap-8">

        <div className="flex-1 bg-white p-10 rounded-2xl shadow-lg">

          <FaBullseye className="text-5xl text-(--primaryColor)" />

          <h2 className="text-3xl font-bold mt-4">
            Our Mission
          </h2>

          <p className="mt-4 text-(--secondaryText) leading-8">
            To empower students and professionals by providing reliable
            guidance and opportunities for international education and
            career growth.
          </p>

        </div>

        <div className="flex-1 bg-white p-10 rounded-2xl shadow-lg">

          <FaEye className="text-5xl text-(--primaryColor)" />

          <h2 className="text-3xl font-bold mt-4">
            Our Vision
          </h2>

          <p className="mt-4 text-(--secondaryText) leading-8">
            To become a trusted leader in immigration and education
            consultancy by helping individuals achieve their global
            ambitions.
          </p>

        </div>

      </div>

    </div>
  );
};

export default MissionVision;