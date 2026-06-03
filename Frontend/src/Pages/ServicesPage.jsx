import ServicesHero from "../Component/Services/ServicesHero";
import ServicesGrid from "../Component/Services/ServicesGrid";
import ServiceProcess from "../Component/Services/ServiceProcess";
import ServicesCTA from "../Component/Services/ServicesCTA";

const ServicesPage = () => {
  return (
    <div className="bg-(--backgroundLight)">
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      <ServicesCTA />
    </div>
  );
};

export default ServicesPage;