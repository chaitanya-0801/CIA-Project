import {
  FaUserTie,
  FaHandshake,
  FaFileSignature,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">

      <h2 className="text-4xl font-bold text-center text-(--primaryText)">
        Why Choose Us
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 mt-12">

        <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
          <FaUserTie className="text-5xl text-(--primaryColor)" />

          <h3 className="text-2xl font-semibold mt-4">
            Expert Guidance
          </h3>

          <p className="mt-3 text-(--secondaryText)">
            Personalized counseling and expert advice to help you choose
            the right path for your future.
          </p>
        </div>

        <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
          <FaFileSignature className="text-5xl text-(--primaryColor)" />

          <h3 className="text-2xl font-semibold mt-4">
            Complete Assistance
          </h3>

          <p className="mt-3 text-(--secondaryText)">
            End-to-end support for admissions, visa applications,
            documentation, and travel arrangements.
          </p>
        </div>

        <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
          <FaHandshake className="text-5xl text-(--primaryColor)" />

          <h3 className="text-2xl font-semibold mt-4">
            Trusted Services
          </h3>

          <p className="mt-3 text-(--secondaryText)">
            Transparent processes and dedicated support for every client.
          </p>
        </div>

      </div>

    </div>
  );
};

export default WhyChooseUs;