import {
  FaStar,
} from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">

      <h2 className="text-4xl font-bold text-center">
        Client Testimonials
      </h2>

      <div className="flex flex-wrap justify-center gap-8 mt-12">

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="
              w-full
              lg:w-[30%]
              bg-white
              p-8
              rounded-2xl
              shadow-lg
            "
          >
            <div className="flex gap-1 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="mt-4 text-(--secondaryText)">
              CIA provided excellent support throughout the visa
              process. Highly recommended.
            </p>

            <h4 className="mt-4 font-semibold">
              Student Name
            </h4>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TestimonialSection;