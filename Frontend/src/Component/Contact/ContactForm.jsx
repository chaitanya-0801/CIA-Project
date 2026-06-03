const ContactForm = () => {
  return (
    <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">

      <h2 className="text-3xl font-bold text-(--primaryText)">
        Send Us A Query
      </h2>

      <form className="mt-8 flex flex-col gap-5">

        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="border border-gray-300 rounded-lg px-4 py-3"
        />

        <select className="border border-gray-300 rounded-lg px-4 py-3">
          <option>Select Service</option>
          <option>Study Visa</option>
          <option>Work Visa</option>
          <option>Visitor Visa</option>
          <option>Tourist Visa</option>
          <option>University Admission</option>
          <option>Student Counseling</option>
          <option>Air Tickets</option>
        </select>

        <textarea
          rows="5"
          placeholder="Your Message"
          className="border border-gray-300 rounded-lg px-4 py-3 resize-none"
        />

        <button
          type="submit"
          className="
            bg-(--primaryColor)
            text-white
            py-3
            rounded-lg
            font-semibold
          "
        >
          Submit Query
        </button>

      </form>

    </div>
  );
};

export default ContactForm;