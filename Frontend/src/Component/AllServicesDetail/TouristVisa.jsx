import ServiceLayout from "../../Component/Services/ServiceLayout";
import ServiceDetailsData from "../../Data/ServiceDetailsData";

const TouristVisa = () => {
  return (
    <ServiceLayout
      service={ServiceDetailsData["tourist-visa"]}
    />
  );
};

export default TouristVisa;