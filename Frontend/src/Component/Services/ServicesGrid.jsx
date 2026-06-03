import { NavLink } from "react-router-dom";
import CTAButton from "../Common/CTAButton";
import ServicesData from "../../Data/ServicesData";

const ServicesGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="flex flex-wrap justify-center gap-8">

        {ServicesData.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="
                w-full
                md:w-[47%]
                lg:w-[31%]
                bg-white
                p-8
                rounded-2xl
                shadow-lg
                hover:-translate-y-2
                transition-all
              "
            >
              <div
                className="
                  w-16
                  h-16
                  rounded-full
                  bg-(--primaryColor)
                  flex
                  items-center
                  justify-center
                  text-white
                  text-3xl
                "
              >
                <Icon />
              </div>

              <h2 className="text-2xl font-bold mt-6">
                {service.title}
              </h2>

              <p className="mt-4 text-(--secondaryText)">
                {service.description}
              </p>

              <div className="flex gap-3 mt-6">

                <CTAButton
                  text="Enquire"
                  className="
                    bg-(--primaryColor)
                    text-(--whiteText)
                    flex-1
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
                  "
                >
                  Details
                </NavLink>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default ServicesGrid;