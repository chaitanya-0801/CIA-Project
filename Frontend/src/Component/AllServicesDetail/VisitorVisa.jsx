import ServiceLayout from "../../Component/Services/ServiceLayout";
import ServiceDetailsData from "../../Data/ServiceDetailsData";

const VisitorVisa = () => {
  return (
    <ServiceLayout
      service={ServiceDetailsData["visitor-visa"]}
    />
  );
};

export default VisitorVisa;