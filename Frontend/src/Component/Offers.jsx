import { useEffect, useState } from "react";
import { getAllOffers } from "../ApiServices/backendService";
import { FaTimes } from "react-icons/fa";
import SkeletonOffer from "./SkeletonOffer";

const Offer = () => {
  const [offers, setOffers] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const fetchOffers = async () => {
    try {
      const response = await getAllOffers();

      if (response.data.success) {
        setOffers(response.data.offers || []);
      }
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <div className="bg-(--backgroundLight) min-h-screen py-16 px-6">
      {/* Heading */}

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-(--primaryText)">
          Current Offers
        </h1>

        <p className="mt-4 text-(--secondaryText)">
          Explore our latest visa and immigration offers.
        </p>
      </div>

      {/* No Offers */}
      {offers === null ? (
        <div className=" flex flex-wrap gap-8 justify-center">
          {Array.from({ length: 3 }).map((_, idx) => (
            <SkeletonOffer key={idx} />
          ))}
        </div>
      ) : offers.length === 0 ? (
        <div className="text-center text-xl text-gray-500">
          No Offers Available
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {offers.map((offer) => (
            <div
              key={offer._id}
              onClick={() => setSelectedOffer(offer)}
              className="
          bg-white
          rounded-xl
          shadow-md
          overflow-hidden
          cursor-pointer
          hover:scale-105
          transition-all
          duration-300
          w-[350px]
        "
            >
              <img
                src={offer.posterUrl}
                alt={offer.name}
                className="
            w-full
            h-100
            object-fit
          "
              />

              <div className="p-4">
                <h2
                  className="
              text-xl
              font-bold
              text-center
            "
                >
                  {offer.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}

      {selectedOffer && (
        <div
          className="
            fixed
            inset-0
            bg-black/70
            z-50
            flex
            justify-center
            items-center
            p-4
          "
        >
          <div
            className="
              bg-white
              rounded-xl
              max-w-5xl
              w-full
              max-h-[90vh]
              overflow-y-auto
              p-6
              relative
            "
          >
            {/* Close */}

            <button
              onClick={() => setSelectedOffer(null)}
              className="
                absolute
                right-4
                top-4
                text-xl
              "
            >
              <FaTimes />
            </button>

            {/* Offer Name */}

            <h2
              className="
                text-4xl
                font-bold
                mb-6
              "
            >
              {selectedOffer.name}
            </h2>

            {/* Large Poster */}

            <div className="flex justify-center">
              <img
                src={selectedOffer.posterUrl}
                alt={selectedOffer.name}
                className="
                  max-h-[700px]
                  max-w-full
                  object-contain
                  rounded-xl
                  shadow-lg
                "
              />
            </div>

            {/* Description */}

            <div className="mt-8">
              <h3 className="text-2xl font-semibold">Description</h3>

              <p className="mt-3 text-gray-700 leading-8">
                {selectedOffer.description}
              </p>
            </div>

            {/* Requirements */}

            <div className="mt-8">
              <h3 className="text-2xl font-semibold">Requirements</h3>

              <p className="mt-3 text-gray-700 leading-8">
                {selectedOffer.requirements}
              </p>
            </div>

            {/* Dates */}

            <div className="mt-8 flex flex-wrap gap-8">
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

export default Offer;
