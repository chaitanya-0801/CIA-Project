import { FaPhone, FaEnvelope } from "react-icons/fa";
import OurTeamData from "../../Data/OurTeam";

const OurTeam = () => {
  return (
    <div className="bg-(--backgroundLight) py-20 px-6">
      
      <h1 className="text-5xl font-bold text-center text-(--primaryText)">
        Meet Our Team
      </h1>

      <p className="text-center text-(--secondaryText) mt-4 max-w-2xl mx-auto">
        Our experienced professionals are dedicated to helping students and
        professionals achieve their international education and career goals.
      </p>

     <div className="flex flex-row flex-wrap justify-center gap-8 mt-16">

  {OurTeamData.map((member, index) => (
    <div
      key={index}
      className="
        bg-(--backgroundCard)
        p-6
        rounded-2xl
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        w-[450px]
      "
    >
      <img
        src={member.image}
        alt={member.name}
        className="
          w-full
          h-64
          rounded-xl
          object-cover
          border-2
          border-(--primaryColor)
        "
      />

      <h2 className="text-2xl font-bold mt-4 text-(--primaryText)">
        {member.name}
      </h2>

      <p className="text-(--primaryColor) font-semibold">
        {member.role}
      </p>

      <p className="mt-2 text-md flex gap-2 items-center">
        <FaPhone/>{member.contact}
      </p>

      <p className="text-md flex gap-2 items-center">
        <FaEnvelope/> {member.email}
      </p>

      <p className="mt-4 text-(--secondaryText)">
        {member.message}
      </p>
    </div>
  ))}

</div>

    </div>
  );
};

export default OurTeam;