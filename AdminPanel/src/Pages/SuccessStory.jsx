import { useEffect, useState } from "react";
import axiosInstance from "../Config/axiosInstance";
import toast from "react-hot-toast";
import { FaPlus, FaEdit, FaTrash, FaEye, FaTimes } from "react-icons/fa";

const SuccessStory = () => {
  const [stories, setstories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedstory, setSelectedstory] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    serviceType: "",
    startDate: "",
    lastDate: "",
    imageUrl: null,
  });

  // ================= FETCH stories =================

  const fetchstories = async () => {
    try {
      setLoading(true);

      const response = await axiosInstance.get("/success-stories");
      if (response.data) {
        setstories(response.data || []);
      }
    } catch (error) {
      toast.error("Failed to fetch stories");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchstories();
  }, []);

  // ================= IMAGE HANDLER =================

  const imageHandler = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      imageUrl: file,
    }));

    setPreviewImage(URL.createObjectURL(file));
  };

  // ================= INPUT CHANGE =================

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ================= OPEN ADD MODAL =================

  const openAddModal = () => {
    setSelectedstory(null);

    setFormData({
      name: "",
      country: "",
      serviceType: "",
      startDate: "",
      lastDate: "",
      imageUrl: null,
    });

    setPreviewImage("");

    setShowModal(true);
  };

  // ================= OPEN EDIT MODAL =================

  const openEditModal = (story) => {
    setSelectedstory(story);

    setFormData({
      name: story.name,
      country: story.country,
      serviceType: story.serviceType,
      startDate: story.startDate?.split("T")[0] || "",
      lastDate: story.lastDate?.split("T")[0] || "",
      imageUrl: null,
    });

    setPreviewImage(story.imageUrl);

    setShowModal(true);
  };

  // ================= SUBMIT =================

  const submitHandler = async (e) => {
    e.preventDefault();
    const toastId = toast.loading(
      selectedstory ? "Updating Story..." : "Adding Story...",
    );
    try {
      const data = new FormData();

      if (formData.imageUrl) {
        data.append("imageUrl", formData.imageUrl);
      }

      data.append("name", formData.name);

      data.append("country", formData.country);

      data.append("serviceType", formData.serviceType);

      data.append("message", formData.message);

      if (selectedstory) {
        const response = await axiosInstance.put(
          `/admin/update-story/${selectedstory._id}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );

        toast.success(response.data.message || "Story Updated Successfully", {
          id: toastId,
        });
      } else {
        const response = await axiosInstance.post("/admin/add-story", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success(response.data.message || "Story Added Successfully", {
          id: toastId,
        });
      }

      fetchstories();
      setShowModal(false);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Operation Failed", {
        id: toastId,
      });
    }
  };

  // ================= DELETE =================

  const deletestory = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this story?",
    );

    if (!confirmDelete) return;

    try {
      const response = await axiosInstance.delete(`/admin/delete-story/${id}`);

      if (response.data.success) {
        toast.success("story Deleted");
      }

      fetchstories();
    } catch (error) {
      console.log(error);
      toast.error("Failed To Delete story");
    }
  };

  return (
    <div className="p-8 bg-(--backgroundLight) min-h-screen">
      {/* HEADER */}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Manage Success Stories</h1>

          <p className="text-gray-500 mt-2">
            Create, Edit and Manage all stories.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="
            flex
            items-center
            gap-2
            bg-(--primaryColor)
            text-white
            px-5
            py-3
            rounded-lg
            hover:opacity-90
          "
        >
          <FaPlus />
          Add story
        </button>
      </div>

      {/* TABLE */}

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-(--primaryColor) text-white">
              <tr>
                <th className="p-4 text-left">Image</th>

                <th className="p-4 text-left">Student Name</th>

                <th className="p-4 text-left">Service Type</th>

                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="5"
                    className="
                      text-center
                      p-8
                    "
                  >
                    Loading...
                  </td>
                </tr>
              ) : stories.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="
                      text-center
                      p-8
                    "
                  >
                    No stories Found
                  </td>
                </tr>
              ) : (
                stories.map((story) => (
                  <tr
                    key={story._id}
                    className="
                      border-b
                      hover:bg-gray-50
                    "
                  >
                    <td className="p-4">
                      <img
                        src={story.imageUrl}
                        alt={story.name}
                        className="
                          w-20
                          h-20
                          rounded-lg
                          object-cover
                        "
                      />
                    </td>

                    <td className="p-4 font-medium">{story.name}</td>

                    <td className="p-4">{story.serviceType}</td>

                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSelectedstory(story);
                            setShowViewModal(true);
                          }}
                          className="
                            bg-green-500
                            text-white
                            p-2
                            rounded
                          "
                        >
                          <FaEye />
                        </button>

                        <button
                          onClick={() => openEditModal(story)}
                          className="
                            bg-blue-500
                            text-white
                            p-2
                            rounded
                          "
                        >
                          <FaEdit />
                        </button>

                        <button
                          onClick={() => deletestory(story._id)}
                          className="
                            bg-red-500
                            text-white
                            p-2
                            rounded
                          "
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ADD / EDIT MODAL */}

      {showModal && (
        <div
          className="
            fixed
            inset-0
            bg-black/50
            flex
            justify-center
            items-center
            z-50
          "
        >
          <div
            className="
              bg-white
              p-8
              rounded-xl
              w-[90%]
              max-w-2xl
              max-h-[90vh]
              overflow-y-auto
            "
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">
                {selectedstory ? "Edit story" : "Add story"}
              </h2>

              <button onClick={() => setShowModal(false)}>
                <FaTimes />
              </button>
            </div>

            <form onSubmit={submitHandler} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Student Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="
                  w-full
                  border
                  p-3
                  rounded-lg
                "
              />

              <input
                type="text"
                name="country"
                placeholder="Enter Country Name"
                value={formData.country}
                onChange={handleChange}
                required
                rows="4"
                className="
                  w-full
                  border
                  p-3
                  rounded-lg
                "
              />

              <input
                type="text"
                name="serviceType"
                placeholder="Which Service? (Study Visa/Work Visa Other)"
                value={formData.serviceType}
                onChange={handleChange}
                required
                rows="4"
                className="
                  w-full
                  border
                  p-3
                  rounded-lg
                "
              />

              <div
                className="
    flex
    items-center
    border
    rounded-lg
    overflow-hidden
  "
              >
                <label
                  htmlFor="imageUpload"
                  className="
      bg-(--primaryColor)
      text-white
      px-4
      py-3
      cursor-pointer
      border-r
      border-gray-300
    "
                >
                  Choose File
                </label>

                <span className="px-4 text-gray-500 flex-1">
                  {formData.imageUrl
                    ? formData.imageUrl.name
                    : "No file selected"}
                </span>

                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={imageHandler}
                  className="hidden"
                />
              </div>

              {previewImage && (
                <img
                  src={previewImage}
                  alt="preview"
                  className="
                    w-48
                    h-48
                    object-cover
                    rounded-lg
                    border
                  "
                />
              )}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Student's Message"
                required
                className="
                  w-full
                  border
                  p-3
                  rounded-lg
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-(--primaryColor)
                  text-white
                  py-3
                  rounded-lg
                "
              >
                {selectedstory ? "Update story" : "Add story"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* VIEW MODAL */}

      {showViewModal && selectedstory && (
        <div
          className="
            fixed
            inset-0
            bg-black/50
            flex
            justify-center
            items-center
            z-50
          "
        >
          <div
            className="
              bg-white
              p-8
              rounded-xl
              max-w-3xl
              w-[90%]
            "
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Student Details</h2>

              <button onClick={() => setShowViewModal(false)}>
                <FaTimes />
              </button>
            </div>

            <img
              src={selectedstory.imageUrl}
              alt={selectedstory.name}
              className="
                w-full
                h-80
                object-cover
                rounded-lg
              "
            />

            <h3 className="text-3xl font-bold mt-6">{selectedstory.name}</h3>

            <div className="mt-4">
              <h4 className="font-bold">Country</h4>

              <p className="mt-2">{selectedstory.country}</p>
            </div>

            <div className="mt-4">
              <h4 className="font-bold">Service Type</h4>

              <p className="mt-2">{selectedstory.serviceType}</p>
            </div>

            <div className="mt-4 flex gap-8">
              <h4 className="font-bold">Message By Student</h4>
              {selectedstory.message}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessStory;
