import {
  FaUserGraduate,
  FaPassport,
  FaUniversity,
  FaGlobe,
} from "react-icons/fa";

const SuccessStats = () => {
  const stats = [
    {
      icon: FaUserGraduate,
      value: "500+",
      title: "Students Guided",
    },
    {
      icon: FaPassport,
      value: "300+",
      title: "Visas Approved",
    },
    {
      icon: FaUniversity,
      value: "100+",
      title: "University Admissions",
    },
    {
      icon: FaGlobe,
      value: "10+",
      title: "Countries Served",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="flex flex-wrap justify-center gap-8">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                w-full
                md:w-[45%]
                lg:w-[22%]
                bg-white
                p-8
                rounded-2xl
                shadow-lg
                text-center
              "
            >
              <Icon className="text-5xl text-(--primaryColor) mx-auto" />

              <h2 className="text-4xl font-bold mt-4">
                {item.value}
              </h2>

              <p className="mt-2 text-(--secondaryText)">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default SuccessStats;