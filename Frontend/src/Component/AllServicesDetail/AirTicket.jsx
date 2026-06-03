import ServiceLayout from "../../Component/Services/ServiceLayout";
import ServiceDetailsData from "../../Data/ServiceDetailsData";

const AirTickets = () => {
  return (
    <ServiceLayout
      service={ServiceDetailsData["air-tickets"]}
    />
  );
};

export default AirTickets;