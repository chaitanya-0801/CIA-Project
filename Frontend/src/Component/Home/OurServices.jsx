import { NavLink } from "react-router-dom";
import CTAButton from "../Common/CTAButton";
import ServicesData from "../../Data/ServicesData";

const OurServices = () => {
  return (
    <div className="bg-(--backgroundLight) py-20 px-6">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-(--primaryText)">
          Our Services
        </h1>

        <p className="mt-4 text-(--secondaryText)">
          We provide comprehensive immigration and education consultancy
          services to help students and professionals achieve their
          international goals with confidence.
        </p>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {ServicesData.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="
                bg-(--backgroundCard)
                p-8
                rounded-2xl
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                flex
                flex-col
              "
            >
              {/* Icon */}
              <div
                className="
                  w-16
                  h-16
                  rounded-full
                  bg-(--primaryColor)
                  flex
                  items-center
                  justify-center
                  text-(--whiteText)
                  text-3xl
                "
              >
                <Icon />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-(--primaryText) mt-6">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-(--secondaryText) mt-4 leading-relaxed grow">
                {service.description}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">

                <CTAButton
                  text="Enquire"
                  className="
                    bg-(--primaryColor)
                    text-(--whiteText)
                    flex-1
                    hover:scale-105
                    transition-all
                  "
                  onClick={() => {
                    window.open(
                      `https://wa.me/918295280143?text=${encodeURIComponent(
                        service.whatsappMessage
                      )}`,
                      "_blank"
                    );
                  }}
                />

                <NavLink
                  to={service.link}
                  className="
                    flex-1
                    text-center
                    border-2
                    border-(--primaryColor)
                    text-(--primaryColor)
                    py-2
                    rounded-lg
                    font-semibold
                    hover:bg-(--primaryColor)
                    hover:text-(--whiteText)
                    transition-all
                  "
                >
                  More Details
                </NavLink>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default OurServices;