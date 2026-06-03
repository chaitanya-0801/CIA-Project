import AboutHero from "../Component/About/AboutHero";
import AboutCIA from "../Component/About/AboutCIA";
import DirectorMessage from "../Component/About/DirectorMessage";
import WhyChooseUs from "../Component/About/WhyChooseUs";
import MissionVision from "../Component/About/MissionVision";

const AboutPage = () => {
  return (
    <div className="bg-(--backgroundLight)">
      <AboutHero />
      <AboutCIA />
      <DirectorMessage />
      <WhyChooseUs />
      <MissionVision />
    </div>
  );
};

export default AboutPage;