import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import { addReview } from "../ApiServices/backendService";

const ReviewModal = ({ onClose }) => {
  const [preview, setPreview] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const toastId = toast.loading("Submitting review...");

      const formData = new FormData();
      // console.log(formData);
      // console.log(data.imageUrl);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("rating", data.rating);
      formData.append("message", data.message);
      formData.append("imageUrl", data.imageUrl[0]);

      // console.log([...formData.entries()]);

      await addReview(formData);

      toast.update(toastId, {
        render: "Review submitted successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      reset();
      setPreview(null);
      onClose();
    } catch (error) {
      toast.error("Failed to submit review");
      // console.log(error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-2xl p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute right-4 top-4">
          <IoMdCloseCircleOutline size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6">Add Your Review</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3"
              {...register("name", {
                required: "Name is required",
              })}
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-3"
              {...register("email", {
                required: "Email is required",
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              className="w-full border rounded-lg px-4 py-3"
              {...register("imageUrl", {
                onChange: (e) => {
                  const file = e.target.files[0];

                  if (file) {
                    setPreview(URL.createObjectURL(file));
                  }
                },
              })}
            />

            {errors.imageUrl && (
              <p className="text-red-500 text-sm mt-1">
                {errors.imageUrl.message}
              </p>
            )}
          </div>
          {preview && (
            <div className="flex justify-center">
              <img
                src={preview}
                alt="Preview"
                className="w-28 h-28 rounded-full object-cover border-2 border-gray-300"
              />
            </div>
          )}
          {/* Rating */}
          <div>
            <select
              className="w-full border rounded-lg px-4 py-3"
              {...register("rating", {
                required: "Please select a rating",
              })}
            >
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐ (5)</option>
              <option value="4">⭐⭐⭐⭐ (4)</option>
              <option value="3">⭐⭐⭐ (3)</option>
              <option value="2">⭐⭐ (2)</option>
              <option value="1">⭐ (1)</option>
            </select>

            {errors.rating && (
              <p className="text-red-500 text-sm mt-1">
                {errors.rating.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="4"
              placeholder="Write your review..."
              className="w-full border rounded-lg px-4 py-3 resize-none"
              {...register("message", {
                required: "Review message is required",
              })}
            />

            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Image URL */}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-(--primaryColor) text-white py-3 rounded-lg font-semibold"
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
