import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { getAllReview } from "../../ApiServices/backendService";

const TestimonialSection = () => {
  const [allReview, setAllReview] = useState(null);

  const fetchReview = async () => {
    try {
      const res = await getAllReview();
      setAllReview(res.data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      <h2 className="text-5xl font-bold text-(--primaryText) text-center ">
        Client Testimonials
      </h2>
      <p className="w-1/2 mx-auto text-center text-(--secondaryText) p-4">Discover what our students and clients have to say about their journey with us. Their experiences highlight our dedication to making study, work, and immigration dreams a reality.</p>
      {
        allReview == null ? (<>Fetching</>) : (
          
    <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={30}
  slidesPerView={1}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  breakpoints={{
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>
  {allReview.map((item, key) => (
    <SwiperSlide key={key}>
      <div
        className="
          bg-white
          p-8
          rounded-2xl
          shadow-lg
          h-full
        "
      >
        <div className="flex items-center gap-4">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-14 h-14 rounded-full object-cover border"
          />

          <div>
            <h4 className="font-semibold">{item.name}</h4>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={
                    star <= item.rating
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 text-(--secondaryText)">
          {item.message}
        </p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
        )
      }
    </div>
  );
};

export default TestimonialSection;
