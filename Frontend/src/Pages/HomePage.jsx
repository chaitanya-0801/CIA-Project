import LandingPage from "../Component/Home/LandingPage";
import WhyChooseUs from "../Component/Home/WhyChooseUs";
import OurTeam from "../Component/Home/OurTeam";
import Contact from "../Component/Home/Contact";
import OurServices from "../Component/Home/OurServices";
import TestimonialSection from "../Component/SuccessStory/TestimonialSection";

const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <WhyChooseUs />
      <OurServices />
      <OurTeam />
      <div className="bg-(--backgroundLight) mt-[-5]">
      
      <TestimonialSection />
      </div>
      <Contact />
    </div>
  );
};

export default HomePage;
