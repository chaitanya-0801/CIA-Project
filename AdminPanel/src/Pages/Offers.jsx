import { useEffect, useState } from "react";
import axiosInstance from "../Config/axiosInstance";
import toast from "react-hot-toast";
import { FaPlus, FaEdit, FaTrash, FaEye, FaTimes } from "react-icons/fa";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  const [selectedOffer, setSelectedOffer] = useState(null);

  const [previewImage, setPreviewImage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    requirements: "",
    startDate: "",
    lastDate: "",
    posterUrl: null,
  });

  // ================= FETCH OFFERS =================

  const fetchOffers = async () => {
    try {
      setLoading(true);

      const response = await axiosInstance.get("/getoffer");

      if (response.data.success) {
        setOffers(response.data.offers || []);
      }
    } catch (error) {
      toast.error("Failed to fetch offers");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  // ================= IMAGE HANDLER =================

  const imageHandler = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      posterUrl: file,
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
    setSelectedOffer(null);

    setFormData({
      name: "",
      description: "",
      requirements: "",
      startDate: "",
      lastDate: "",
      posterUrl: null,
    });

    setPreviewImage("");

    setShowModal(true);
  };

  // ================= OPEN EDIT MODAL =================

  const openEditModal = (offer) => {
    setSelectedOffer(offer);

    setFormData({
      name: offer.name,
      description: offer.description,
      requirements: offer.requirements,
      startDate: offer.startDate?.split("T")[0] || "",
      lastDate: offer.lastDate?.split("T")[0] || "",
      posterUrl: null,
    });

    setPreviewImage(offer.posterUrl);

    setShowModal(true);
  };

  // ================= SUBMIT =================

  const submitHandler = async (e) => {
    e.preventDefault();

    const toastId = toast.loading(
         selectedOffer ? "Updating Offer..." : "Adding Offer...",
       );

    try {
      const data = new FormData();

      if (formData.posterUrl) {
        data.append("posterUrl", formData.posterUrl);
      }

      data.append("name", formData.name);

      data.append("description", formData.description);

      data.append("requirements", formData.requirements);

      data.append("startDate", formData.startDate);

      data.append("lastDate", formData.lastDate);

      if (selectedOffer) {
        const response = await axiosInstance.put(
          `/admin/update-offer/${selectedOffer._id}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );

        if (response.data.success) {
          toast.success("Offer Updated", {
            id:toastId,
          });
        }
      } else {
        const response = await axiosInstance.post("/admin/add-offer", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        toast.success(response.data.message || "Offer Added Successfully", {
          id:toastId,
        });
      }

      fetchOffers();
      setShowModal(false);
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message || "Operation Failed", {
        id:toastId,
      });
    }
  };

  // ================= DELETE =================

  const deleteOffer = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this offer?",
    );

    if (!confirmDelete) return;

    try {
      const response = await axiosInstance.delete(`/admin/delete-offer/${id}`);

      if (response.data.success) {
        toast.success("Offer Deleted");
      }

      fetchOffers();
    } catch (error) {
      console.log(error);
      toast.error("Failed To Delete Offer");
    }
  };

  return (
    <div className="p-8 bg-(--backgroundLight) min-h-screen">
      {/* HEADER */}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Manage Offers</h1>

          <p className="text-gray-500 mt-2">
            Create, Edit and Manage all offers.
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
          Add Offer
        </button>
      </div>

      {/* TABLE */}

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-(--primaryColor) text-white">
              <tr>
                <th className="p-4 text-left">Poster</th>

                <th className="p-4 text-left">Offer Name</th>

                <th className="p-4 text-left">Start Date</th>

                <th className="p-4 text-left">Last Date</th>

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
              ) : offers.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="
                      text-center
                      p-8
                    "
                  >
                    No Offers Found
                  </td>
                </tr>
              ) : (
                offers.map((offer) => (
                  <tr
                    key={offer._id}
                    className="
                      border-b
                      hover:bg-gray-50
                    "
                  >
                    <td className="p-4">
                      <img
                        src={offer.posterUrl}
                        alt={offer.name}
                        className="
                          w-20
                          h-20
                          rounded-lg
                          object-cover
                        "
                      />
                    </td>

                    <td className="p-4 font-medium">{offer.name}</td>

                    <td className="p-4">
                      {new Date(offer.startDate).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      {offer.lastDate
                        ? new Date(offer.lastDate).toLocaleDateString()
                        : "N/A"}
                    </td>

                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSelectedOffer(offer);
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
                          onClick={() => openEditModal(offer)}
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
                          onClick={() => deleteOffer(offer._id)}
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
                {selectedOffer ? "Edit Offer" : "Add Offer"}
              </h2>

              <button onClick={() => setShowModal(false)}>
                <FaTimes />
              </button>
            </div>

            <form onSubmit={submitHandler} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Offer Name"
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

              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
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

              <textarea
                name="requirements"
                placeholder="Requirements"
                value={formData.requirements}
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

              <input
                type="date"
                name="startDate"
                value={formData.startDate}
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
                type="date"
                name="lastDate"
                value={formData.lastDate}
                onChange={handleChange}
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
                {selectedOffer ? "Update Offer" : "Add Offer"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* VIEW MODAL */}

      {showViewModal && selectedOffer && (
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
              <h2 className="text-3xl font-bold">Offer Details</h2>

              <button onClick={() => setShowViewModal(false)}>
                <FaTimes />
              </button>
            </div>

            <img
              src={selectedOffer.posterUrl}
              alt={selectedOffer.name}
              className="
                w-full
                h-80
                object-cover
                rounded-lg
              "
            />

            <h3 className="text-3xl font-bold mt-6">{selectedOffer.name}</h3>

            <div className="mt-4">
              <h4 className="font-bold">Description</h4>

              <p className="mt-2">{selectedOffer.description}</p>
            </div>

            <div className="mt-4">
              <h4 className="font-bold">Requirements</h4>

              <p className="mt-2">{selectedOffer.requirements}</p>
            </div>

            <div className="mt-4 flex gap-8">
              <div>
                <h4 className="font-bold">Start Date</h4>

                <p>{new Date(selectedOffer.startDate).toLocaleDateString()}</p>
              </div>

              <div>
                <h4 className="font-bold">Last Date</h4>

                <p>
                  {selectedOffer.lastDate
                    ? new Date(selectedOffer.lastDate).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;
