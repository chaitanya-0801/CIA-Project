import ServiceLayout from "../../Component/Services/ServiceLayout";
import ServiceDetailsData from "../../Data/ServiceDetailsData";

const WorkVisa = () => {
  return (
    <ServiceLayout
      service={ServiceDetailsData["work-visa"]}
    />
  );
};

export default WorkVisa;