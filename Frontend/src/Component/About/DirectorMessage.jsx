import Director from "../../assets/Director.jpg";

const DirectorMessage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">

      <div className="flex flex-col lg:flex-row gap-10 bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="lg:w-[35%]">
          <img
            src={Director}
            alt="Director"
            className="w-full h-full object-cover min-h-125"
          />
        </div>

        <div className="lg:w-[65%] p-10 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-(--primaryText)">
            Director's Message
          </h2>

          <p className="mt-6 text-lg text-(--secondaryText) leading-9">
            At Chaudhary Immigration Academy, we believe that every student
            and professional deserves the opportunity to achieve their
            international aspirations.
          </p>

          <p className="mt-4 text-lg text-(--secondaryText) leading-9">
            Our mission is to provide transparent guidance, personalized
            counseling, and dependable support throughout every step of the
            immigration and admission process.
          </p>

          <p className="mt-4 text-lg text-(--secondaryText) leading-9">
            We look forward to guiding you on your journey and helping you
            unlock global opportunities for a brighter future.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-(--primaryText)">
              Sandeep Chaudhary
            </h3>

            <p className="text-(--primaryColor) font-semibold text-lg">
              Director
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DirectorMessage;