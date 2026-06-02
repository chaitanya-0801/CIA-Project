import Landing from "../../assets/Landing.png";
import CTAButton from "../Common/CTAButton";

import services from "../../Data/Services";

import { MdWork } from "react-icons/md";

const LandingPage = () => {
  return (
    <div
      className="w-full min-h-[90vh] bg-linear-to-br 
from-[#142D7A]
via-[#1F3FAF]
to-[#2948B8] flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-10 gap-10"
    >
      {/* Left Content */}
      <div className="max-w-xl">
        <p className="text-sm uppercase tracking-widest text-(--lightText) mb-3">
          Trusted Immigration & Education Consultants
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--whiteText) leading-tight">
          Start Your Global Journey
          <span className="block">With Confidence</span>
        </h1>

        <p className="mt-6 text-lg text-(--lightText) leading-relaxed">
        <span className="font-bold text-(--whiteText)">  Chaudhary Immigration Academy </span> helps students and professionals achieve
          their international dreams through expert visa guidance, university
          admissions, career counseling, and travel support.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
  {services.map((service, index) => {
    const Icon = service.icon;

    return (
      <span
        key={index}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20"
      >
        <Icon />
        {service.text}
      </span>
    );
  })}
</div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-10 w-full mx-auto justify-around">
          <CTAButton
            text="Get In Tounch"
            className="bg-(--secondaryCtaBg) border-2 border-(--secondaryCtaBorder) text-(--secondaryCtaText) text-lg font-semibold hover:scale-105 transition"
            onClick={() => {
              console.log("Hello");
            }}
          />
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl shadow-2xl">
    <img
      src={Landing}
      alt="landing page"
      className="w-full max-w-xl rounded-xl hover:scale-105 transition-all duration-300"
    />
  </div>
</div>
    </div>
  );
};

export default LandingPage;
