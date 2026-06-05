import { useEffect, useState } from "react";
// import SuccessStoriesData from "../../Data/SuccessStoriesData";
import { FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import { getStory } from "../../ApiServices/backendService";

const StudentStories = () => {
  const [successStoryData, setSuccessStoryData] = useState(null);

  const fetchData = async () => {
    const res = await getStory();
    // console.log(res.data);
    setSuccessStoryData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-(--primaryText)">
        Success Stories
      </h2>

      <p className="text-center text-(--secondaryText) mt-4 max-w-3xl mx-auto">
        Real students and professionals who achieved their international dreams
        with the support of Chaudhary Immigration Academy.
      </p>
      {successStoryData == null ? (
        <div className="">Fetching</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {successStoryData.map((student, index) => (
            <div
              key={index}
              className="
              w-full
              md:w-[47%]
              lg:w-[31%]
              bg-white
              rounded-2xl
              shadow-lg
              overflow-hidden
              hover:-translate-y-2
              transition-all
            "
            >
              <img
                src={student.imageUrl}
                alt={student.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <FaCheckCircle />
                  Visa Approved
                </div>

                <h3 className="text-2xl font-bold mt-3">{student.name}</h3>

                <p className="text-(--primaryColor) font-medium">
                  {student.serviceType}
                </p>

                <p className="text-sm text-gray-500">{student.country}</p>

                <div className="mt-4">
                  <FaQuoteLeft className="text-(--primaryColor) text-2xl" />
                </div>

                <p className="mt-3 text-(--secondaryText) leading-7">
                  {student.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentStories;
