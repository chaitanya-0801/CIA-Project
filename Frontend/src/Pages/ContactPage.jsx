import ContactCards from "../Component/Contact/ContactCards";
import ContactForm from "../Component/Contact/ContactForm";
import VisitOffice from "../Component/Contact/VisitOffice";

const ContactPage = () => {
  return (
    <div className="bg-(--backgroundLight)">

      {/* Hero */}
      <div
        className="
          bg-linear-to-br
          from-[#142D7A]
          via-[#1F3FAF]
          to-[#2948B8]
          text-white
          py-20
          px-6
          text-center
        "
      >
        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-(--lightText)">
          Have questions about study visas, work permits, university
          admissions, or immigration services? Our team is here to help.
        </p>
      </div>

      <ContactCards />

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <div className="flex flex-col lg:flex-row gap-10">
          <ContactForm />
          <VisitOffice />
        </div>

      </div>

    </div>
  );
};

export default ContactPage;