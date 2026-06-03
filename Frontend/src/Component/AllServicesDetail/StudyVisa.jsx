import ServiceLayout from "../../Component/Services/ServiceLayout";
import ServiceDetailsData from "../../Data/ServiceDetailsData";

const StudyVisa = () => {
  return (
    <ServiceLayout
      service={ServiceDetailsData["study-visa"]}
    />
  );
};

export default StudyVisa;