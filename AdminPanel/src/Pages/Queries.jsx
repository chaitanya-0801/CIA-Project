import { useEffect, useState } from "react";
import axiosInstance from "../Config/axiosInstance";
import toast from "react-hot-toast";
import { MdOutlineSkipNext,MdOutlineSkipPrevious  } from "react-icons/md";


const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageno, setPageno] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [total,setTotal]=useState(10)

  const fetchQueries = async () => {
    try {
      console.log("Fetching");
      const response = await axiosInstance.get("/admin/contact-forms", {
        params: {
          search: search,
          status: status,
          page: pageno,
          limit: 10,
        },
      });

      if (response.data.success) {
        setQueries(response.data.contactForms);
        setTotal(response.data.total)
      }
    } catch (error) {
      toast.error("Failed to fetch queries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, [search, pageno, status]);

  const updateStatus = async (id, status) => {
    try {
      const response = await axiosInstance.put(`/admin/contact-forms/${id}`, {
        status,
      });

      if (response.data.success) {
        toast.success("Status Updated");

        setQueries((prev) =>
          prev.map((query) =>
            query._id === id ? { ...query, status } : query,
          ),
        );

        if (selectedQuery && selectedQuery._id === id) {
          setSelectedQuery({
            ...selectedQuery,
            status,
          });
        }
      }
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-xl">Loading Queries...</div>;
  }

  return (
    <div className="p-8 bg-(--backgroundLight) min-h-screen">
      {/* Heading */}

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Contact Queries</h1>

        <div className="bg-white px-4 py-2 rounded-lg shadow">
          Total Queries : {total}
        </div>
      </div>

      {/* Table */}
      <div className="flex justify-end">
        <div className=""></div>
      <div className="flex gap-2 m-2 ">
      <div
        className=""
        onChange={(e) => {
          setStatus(e.target.value);
        }}
        >
        <select className="border p-2 rounded-md">
          <option value={"Pending"}>Pending</option>
          <option value={"In Progress"}>In Progress</option>
          <option value={"Resolved"}>Resolved</option>
        </select>
      </div>
      <div className="">
        <input className="border rounded-md p-2" placeholder="Search By Name"  onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
      </div>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-(--primaryColor) text-white">
              <tr>
                <th className="px-4 py-4 text-left">Sr. No. </th>
                <th className="px-4 py-4 text-left">Name</th>

                <th className="px-4 py-4 text-left">Service</th>

                <th className="px-4 py-4 text-left">Email</th>

                <th className="px-4 py-4 text-left">Status</th>

                <th className="px-4 py-4 text-left">Date</th>

                <th className="px-4 py-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {queries.map((query,idx) => (
                <tr
                  key={query._id}
                  className="
                    border-b
                    hover:bg-gray-50
                  "
                >
                  <td className="px-4 py-4">{idx+1}</td>
                  <td className="px-4 py-4">{query.name}</td>

                  <td className="px-4 py-4">{query.service}</td>

                  <td className="px-4 py-4">{query.email}</td>

                  <td className="px-4 py-4">
                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-medium

                        ${
                          query.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : query.status === "In Progress"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                        }
                      `}
                    >
                      {query.status}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    {new Date(query.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-4 py-4 flex gap-2">
                    <button
                      onClick={() => setSelectedQuery(query)}
                      className="
                        bg-(--primaryColor)
                        text-white
                        px-3
                        py-1
                        rounded-lg
                      "
                    >
                      View
                    </button>

                    <select
                      value={query.status}
                      onChange={(e) => updateStatus(query._id, e.target.value)}
                      className="
                        border
                        rounded-lg
                        px-2
                        py-1
                      "
                    >
                      <option value="Pending">Pending</option>

                      <option value="In Progress">In Progress</option>

                      <option value="Resolved">Resolved</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end">
        <div className=""></div>
        <div className="flex gap-2 m-2">
          <div
            className="border rounded-md p-2"
            onClick={() => {
              if (pageno > 1) {
                setPageno(pageno - 1);
              }
            }}
          >
            {<MdOutlineSkipPrevious/>}
          </div>
          <div
            className="border rounded-md p-2"
            onClick={() => {
              if (pageno < total / 10)
              {

                setPageno(pageno + 1);
              }
            }}
          >
            {<MdOutlineSkipNext/>}
          </div>
        </div>
      </div>

      {/* Modal */}

      {selectedQuery && (
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
              rounded-xl
              p-8
              w-[90%]
              max-w-2xl
              relative
            "
          >
            <button
              onClick={() => setSelectedQuery(null)}
              className="
                absolute
                top-4
                right-4
                text-xl
                font-bold
              "
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold mb-6">Query Details</h2>

            <div className="space-y-4">
              <p>
                <strong>Name:</strong> {selectedQuery.name}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${selectedQuery.email}`}
                  className="
                    text-(--primaryColor)
                  "
                >
                  {selectedQuery.email}
                </a>
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href={`tel:${selectedQuery.phone}`}
                  className="
                    text-(--primaryColor)
                  "
                >
                  {selectedQuery.phone}
                </a>
              </p>

              <p>
                <strong>Service:</strong> {selectedQuery.service}
              </p>

              <p>
                <strong>Status:</strong> {selectedQuery.status}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {new Date(selectedQuery.createdAt).toLocaleString()}
              </p>

              <div>
                <strong>Message:</strong>

                <div
                  className="
                    mt-2
                    p-4
                    bg-gray-100
                    rounded-lg
                  "
                >
                  {selectedQuery.message}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Queries;
