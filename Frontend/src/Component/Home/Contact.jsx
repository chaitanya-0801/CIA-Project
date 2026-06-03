import CTAButton from "../Common/CTAButton";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row
        justify-between
        items-center
        gap-10
        bg-linear-to-br
        from-[#142D7A]
        via-[#1F3FAF]
        to-[#2948B8]
        text-white
        py-20
        px-6
        lg:px-20
      "
    >
      {/* Left Side */}
      <div className="max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Have Any Query?
        </h1>

        <p className="text-(--lightText) mt-6 leading-relaxed">
          If you have any questions or need assistance, please don't hesitate
          to contact us. Our team is here to help you achieve your international
          education and career goals. We look forward to hearing from you.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-wrap justify-center gap-4">

        <CTAButton
          text={
            <span className="flex items-center gap-2">
              <FaPhoneAlt />
              Contact Us
            </span>
          }
          className="
            bg-white
            text-(--primaryColor)
            font-semibold
            hover:scale-105
            transition
          "
          onClick={() => {navigate("/contact-us")}}
        />

        <CTAButton
          text={
            <span className="flex items-center gap-2">
              <FaWhatsapp />
              WhatsApp Us
            </span>
          }
          className="
            bg-[#25D366]
            text-white
            font-semibold
            hover:scale-105
            transition
          "
           onClick={() => {
  const message =
    "Hello Chaudhary Immigration Academy, I am interested in your immigration and visa services. Please provide more information.";

  window.open(
    `https://wa.me/918295280143?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}}
        />

        <CTAButton
          text={
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt />
              Locate Us
            </span>
          }
          className="
            border-2
            border-white
            text-white
            font-semibold
            hover:bg-white
            hover:text-(--primaryColor)
            transition
          "
           onClick={() => {
  window.open("https://www.google.com/maps", "_blank");
}}
        />

      </div>
    </div>
  );
};

export default Contact;