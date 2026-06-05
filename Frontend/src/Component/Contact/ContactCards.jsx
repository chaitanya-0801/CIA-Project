import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <a
          href="tel:+918295280143"
          className="
            flex-1
            bg-white
            p-8
            rounded-2xl
            shadow-lg
            text-center
            hover:-translate-y-2
            hover:shadow-xl
            transition-all
          "
        >
          <FaPhone className="text-5xl text-(--primaryColor) mx-auto" />

          <h3 className="text-2xl font-semibold mt-4">Call Us</h3>

          <p className="mt-2 text-gray-600">+91 82952 80143</p>
        </a>

        <a
          href="mailto:cialadwa@gmail.com"
          className="
            flex-1
            bg-white
            p-8
            rounded-2xl
            shadow-lg
            text-center
            hover:-translate-y-2
            hover:shadow-xl
            transition-all
          "
        >
          <FaEnvelope className="text-5xl text-(--primaryColor) mx-auto" />

          <h3 className="text-2xl font-semibold mt-4">Email Us</h3>

          <p className="mt-2 text-gray-600">cialadwa@gmail.com</p>
        </a>

        <a
          href="https://wa.me/918295280143"
          target="_blank"
          rel="noreferrer"
          className="
            flex-1
            bg-white
            p-8
            rounded-2xl
            shadow-lg
            text-center
            hover:-translate-y-2
            hover:shadow-xl
            transition-all
          "
        >
          <FaWhatsapp className="text-5xl text-green-500 mx-auto" />

          <h3 className="text-2xl font-semibold mt-4">WhatsApp</h3>

          <p className="mt-2 text-gray-600">+91 82952 80143</p>
        </a>
      </div>
    </div>
  );
};

export default ContactCards;
