import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const VisitOffice = () => {
  return (
    <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-(--primaryText)">
        Visit Our Office
      </h2>

      <div className="mt-8 flex flex-col gap-8">
        <div className="flex gap-4">
          <FaMapMarkerAlt className="text-2xl text-(--primaryColor)" />

          <div>
            <h4 className="font-semibold">Office Address</h4>

            <p className="font-bold">Chaudhary Immigration Academy</p>
            <p>Opp. BDPO Office, Ladwa, Kurukshetra, Haryana</p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="text-(--primaryColor) font-semibold"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <FaPhone className="text-2xl text-(--primaryColor)" />

          <div>
            <h4 className="font-semibold">Phone Number</h4>

            <a href="tel:+918295280143">+91 82952 80143</a>
          </div>
        </div>

        <div className="flex gap-4">
          <FaEnvelope className="text-2xl text-(--primaryColor)" />

          <div>
            <h4 className="font-semibold">Email Address</h4>

            <a href="mailto:cialadwa@gmail.com">cialadwa@gmail.com</a>
          </div>
        </div>

        <div className="flex gap-4">
          <FaWhatsapp className="text-2xl text-green-500" />

          <div>
            <h4 className="font-semibold">WhatsApp Support</h4>

            <a
              href="https://wa.me/918295280143"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            title="CIA Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.1234567890123!2d76.12345678901234!3d29.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d123456789012%3A0x1234567890123456!2sChaudhary%20Immigration%20Academy!5e0!3m2!1sen!2sin!4v1234567890123"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default VisitOffice;
