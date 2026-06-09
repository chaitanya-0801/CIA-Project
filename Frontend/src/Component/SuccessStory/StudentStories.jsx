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
  {successStoryData.length === 0 ? (
    <div
      className="
        w-full
        flex
        justify-center
        items-center
        py-20
      "
    >
      <div
        className="
          bg-white
          px-10
          py-8
          rounded-2xl
          shadow-lg
          text-center
        "
      >
        <h3 className="text-2xl font-bold text-(--primaryText)">
          No Students Available Currently
        </h3>

        <p className="text-(--secondaryText) mt-3">
          Success stories will appear here once students share their experiences.
        </p>
      </div>
    </div>
  ) : (
    successStoryData.map((student) => (
      <div
        key={student._id}
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
        {/* Your Existing Card */}
      </div>
    ))
  )}
</div>
          
        
      )}
    </div>
  );
};

export default StudentStories;
