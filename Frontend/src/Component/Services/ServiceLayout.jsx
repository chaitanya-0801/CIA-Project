import CTAButton from "../Common/CTAButton";
import { FaFileAlt } from "react-icons/fa";

const ServiceLayout = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="bg-(--backgroundLight)">

      {/* Hero */}
      <div
        className="
          bg-linear-to-br
          from-[#142D7A]
          via-[#1F3FAF]
          to-[#2948B8]
          text-white
          py-20
          px-6
          text-center
        "
      >
        <Icon className="text-7xl mx-auto mb-6" />

        <h1 className="text-5xl font-bold">
          {service.title}
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-(--lightText)">
          {service.heroDescription}
        </p>

        <div className="mt-8">
          <CTAButton
            text="Free Consultation"
            className="
              bg-(--secondaryCtaBg)
              text-(--secondaryCtaText)
            "
            onClick={() =>
              window.open(
                `https://wa.me/918295280143?text=${encodeURIComponent(
                  service.whatsappMessage
                )}`,
                "_blank"
              )
            }
          />
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Benefits
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mt-12">

          {service.benefits.map((item, index) => (
            <div
              key={index}
              className="
                w-full
                md:w-[45%]
                lg:w-[30%]
                bg-white
                p-8
                rounded-2xl
                shadow-lg
              "
            >
              <h3 className="text-2xl font-semibold">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>

      {/* Countries */}
      <div className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center">
          Countries We Support
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          {service.countries.map((country, index) => (
            <div
              key={index}
              className="
                bg-white
                px-6
                py-4
                rounded-xl
                shadow-md
              "
            >
              {country}
            </div>
          ))}

        </div>

      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center">
          Process
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mt-12">

          {service.process.map((step, index) => (
            <div
              key={index}
              className="
                w-full
                md:w-[45%]
                lg:w-[30%]
                bg-white
                p-8
                rounded-2xl
                shadow-lg
                text-center
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-(--primaryColor)
                  text-white
                  flex
                  items-center
                  justify-center
                  mx-auto
                  font-bold
                "
              >
                {index + 1}
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>

      {/* Documents */}
      <div className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-white rounded-2xl shadow-lg p-10">

          <h2 className="text-4xl font-bold">
            Required Documents
          </h2>

          <div className="flex flex-col gap-4 mt-8">

            {service.documents.map((doc, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaFileAlt className="text-(--primaryColor)" />
                {doc}
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default ServiceLayout;