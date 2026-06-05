import { useForm } from "react-hook-form";
import { submitForm } from "../../ApiServices/backendService.js";
import { toast } from "react-toastify";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  const toastId = toast.loading("Submitting your query...");

  try {
    const response = await submitForm(data);

    if (response.status === 201) {
      toast.update(toastId, {
        render: response.data.message,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      reset();
    } else {
      toast.update(toastId, {
        render: "Something went wrong",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  } catch (error) {

    toast.update(toastId, {
      render: error?.response?.data?.message || "Server Error",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
  }
};

  return (
    <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-(--primaryText)">
        Send Us A Query
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col gap-5"
      >
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            {...register("name", {
              required: "Full Name is required",
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            {...register("phone", {
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            {...register("service", {
              required: "Please select a service",
            })}
          >
            <option value="">Select Service</option>
            <option value="Study Visa">Study Visa</option>
            <option value="Work Visa">Work Visa</option>
            <option value="Visitor Visa">Visitor Visa</option>
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="University Admission">University Admission</option>
            <option value="Student Counseling">Student Counseling</option>
            <option value="Air Tickets">Air Tickets</option>
          </select>

          {errors.service && (
            <p className="text-red-500 text-sm mt-1">
              {errors.service.message}
            </p>
          )}
        </div>

        <div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none"
            {...register("message", {
              required: "Message is required",
            })}
          />

          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

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
