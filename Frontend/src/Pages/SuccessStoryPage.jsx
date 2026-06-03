import SuccessHero from "../Component/SuccessStory/SuccessHero";
import SuccessStats from "../Component/SuccessStory/SuccessStats";
import StudentStories from "../Component/SuccessStory/StudentStories";
import TestimonialSection from "../Component/SuccessStory/TestimonialSection";
import SuccessCTA from "../Component/SuccessStory/SuccessCTA";

const SuccessStoryPage = () => {
  return (
    <div className="bg-(--backgroundLight)">
      <SuccessHero />
      <SuccessStats />
      <StudentStories />
      <TestimonialSection />
      <SuccessCTA />
    </div>
  );
};

export default SuccessStoryPage;