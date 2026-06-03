import {
  FaComments,
  FaFileAlt,
  FaCheckCircle,
  FaPlaneDeparture,
} from "react-icons/fa";

const ServiceProcess = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">

      <h2 className="text-4xl font-bold text-center">
        How It Works
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 mt-12">

        <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg text-center">
          <FaComments className="text-5xl text-(--primaryColor) mx-auto" />

          <h3 className="text-xl font-semibold mt-4">
            Consultation
          </h3>

          <p className="mt-3 text-(--secondaryText)">
            Discuss your goals with our experts.
          </p>
        </div>

        <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg text-center">
          <FaFileAlt className="text-5xl text-(--primaryColor) mx-auto" />

          <h3 className="text-xl font-semibold mt-4">
            Documentation
          </h3>

          <p className="mt-3 text-(--secondaryText)">
            Prepare and verify all required documents.
          </p>
        </div>

        <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg text-center">
          <FaCheckCircle className="text-5xl text-(--primaryColor) mx-auto" />

          <h3 className="text-xl font-semibold mt-4">
            Application
          </h3>

          <p className="mt-3 text-(--secondaryText)">
            Submit your application accurately and on time.
          </p>
        </div>

        <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg text-center">
          <FaPlaneDeparture className="text-5xl text-(--primaryColor) mx-auto" />

          <h3 className="text-xl font-semibold mt-4">
            Success
          </h3>

          <p className="mt-3 text-(--secondaryText)">
            Begin your international journey confidently.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ServiceProcess;