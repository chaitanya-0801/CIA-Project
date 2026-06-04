import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../Config/axiosInstance";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const fetchAdmins = async () => {
    try {
      const response = await axiosInstance.get(
        "/admin/all-admins"
        );
      if (response.data.success) {
        setAdmins(response.data.allAdminData);
      }
    } catch (error) {
      toast.error("Failed to fetch admins");
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const createAdmin = async (data) => {
    try {
      const response = await axiosInstance.post(
        "/admin/create-admin",
        data
      );

      if (response.data.success) {
        toast.success("Admin Created");

        fetchAdmins();

        reset();

        setShowModal(false);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to create admin"
      );
    }
  };

  return (
    <div className="p-8 bg-(--backgroundLight) min-h-screen">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Admin Management
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="
            flex
            items-center
            gap-2
            bg-(--primaryColor)
            text-white
            px-4
            py-3
            rounded-lg
          "
        >
          <FaPlus />
          Add Admin
        </button>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-(--primaryColor) text-white">

              <tr>
                <th className="px-4 py-4 text-left">
                  Name
                </th>

                <th className="px-4 py-4 text-left">
                  Email
                </th>

                <th className="px-4 py-4 text-left">
                  Contact
                </th>

                <th className="px-4 py-4 text-left">
                  Role
                </th>

                <th className="px-4 py-4 text-left">
                  Created
                </th>
              </tr>

            </thead>

            <tbody>

              {admins.map((admin) => (
                <tr
                  key={admin._id}
                  className="
                    border-b
                    hover:bg-gray-50
                  "
                >
                  <td className="px-4 py-4">
                    {admin.name}
                  </td>

                  <td className="px-4 py-4">
                    {admin.email}
                  </td>

                  <td className="px-4 py-4">
                    {admin.contactNumber}
                  </td>

                  <td className="px-4 py-4">

                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-sm

                        ${
                          admin.role ===
                          "super-admin"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-blue-100 text-blue-700"
                        }
                      `}
                    >
                      {admin.role}
                    </span>

                  </td>

                  <td className="px-4 py-4">
                    {new Date(
                      admin.createdAt
                    ).toLocaleDateString()}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* Modal */}

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
              max-w-md
            "
          >
            <h2 className="text-2xl font-bold mb-6">
              Add New Admin
            </h2>

            <form
              onSubmit={handleSubmit(createAdmin)}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                className="
                  w-full
                  border
                  p-3
                  rounded-lg
                "
                {...register("name")}
              />

              <input
                type="email"
                placeholder="Email"
                className="
                  w-full
                  border
                  p-3
                  rounded-lg
                "
                {...register("email")}
              />

              <input
                type="text"
                placeholder="Contact Number"
                className="
                  w-full
                  border
                  p-3
                  rounded-lg
                "
                {...register("contactNumber")}
              />

              <input
                type="password"
                placeholder="Password"
                className="
                  w-full
                  border
                  p-3
                  rounded-lg
                "
                {...register("password")}
              />

              <select
                className="
                  w-full
                  border
                  p-3
                  rounded-lg
                "
                {...register("role")}
              >
                <option value="admin">
                  Admin
                </option>

                <option value="super-admin">
                  Super Admin
                </option>
              </select>

              <div className="flex gap-4">

                <button
                  type="submit"
                  className="
                    flex-1
                    bg-(--primaryColor)
                    text-white
                    py-3
                    rounded-lg
                  "
                >
                  Create
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setShowModal(false)
                  }
                  className="
                    flex-1
                    border
                    py-3
                    rounded-lg
                  "
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default Admins;