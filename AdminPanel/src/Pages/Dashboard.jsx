import { useEffect, useState } from "react";
import axiosInstance from "../Config/axiosInstance";

import {
  FaUsers,
  FaCommentDots,
  FaClock,
  FaGift,
} from "react-icons/fa";

const Dashboard = () => {
  const admin = JSON.parse(
    localStorage.getItem("admin") || "{}"
  );

  const [stats, setStats] = useState(null);

  const fetchDashboard = async () => {
    try {
      const response = await axiosInstance.get(
        "/admin/dashboard-stats"
      );

      if (response.data.success) {
        setStats(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const cards = [
    {
      title: "Total Queries",
      value: stats?.totalQueries || 0,
      icon: <FaUsers />,
    },
    {
      title: "Pending Queries",
      value: stats?.pendingQueries || 0,
      icon: <FaClock />,
    },
    {
      title: "Total Reviews",
      value: stats?.totalReviews || 0,
      icon: <FaCommentDots />,
    },
    {
      title: "Total Offers",
      value: stats?.totalOffers || 0,
      icon: <FaGift />,
    },
  ];

  return (
    <div className="bg-(--backgroundLight) min-h-screen p-8">

      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold text-(--primaryText)">
          Welcome Back, {admin?.name || "Admin"}
        </h1>

        <p className="text-(--secondaryText) mt-2">
          Here's what's happening today.
        </p>
      </div>

      {/* Stats Cards */}

      <div className="flex flex-wrap gap-6 mt-10">

        {cards.map((card, index) => (
          <div
            key={index}
            className="
              flex-1
              min-w-[250px]
              bg-white
              rounded-xl
              p-6
              shadow-md
            "
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-500">
                  {card.title}
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  {card.value}
                </h2>
              </div>

              <div
                className="
                  text-5xl
                  text-(--primaryColor)
                "
              >
                {card.icon}
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Recent Queries */}

      <div
        className="
          mt-10
          bg-white
          rounded-xl
          shadow-md
          p-6
        "
      >
        <h2 className="text-2xl font-semibold">
          Recent Queries
        </h2>

        <div className="mt-4">

          {!stats?.recentQueries ||
          stats.recentQueries.length === 0 ? (
            <div
              className="
                text-center
                py-8
                text-gray-500
              "
            >
              No Data Available
            </div>
          ) : (
            <div className="flex flex-col gap-4">

              {stats.recentQueries.map(
                (query) => (
                  <div
                    key={query._id}
                    className="
                      border-b
                      pb-3
                    "
                  >
                    <div className="flex justify-between items-center">

                      <div>
                        <h3 className="font-semibold">
                          {query.name}
                        </h3>

                        <p
                          className="
                            text-sm
                            text-gray-500
                          "
                        >
                          {query.service}
                        </p>
                      </div>

                      <span
                        className="
                          text-xs
                          text-gray-400
                        "
                      >
                        {new Date(
                          query.createdAt
                        ).toLocaleDateString()}
                      </span>

                    </div>
                  </div>
                )
              )}

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;