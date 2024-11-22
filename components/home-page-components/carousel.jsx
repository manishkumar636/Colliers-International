// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./carousel.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // navigation={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper text-xl"
      >
        <SwiperSlide>
          At Colliers, our experts are committed to helping clients navigate the
          complexities of real estate. Whether you’re buying, selling, leasing,
          or investing, our team provides tailored solutions to meet your unique
          needs. We combine local market knowledge with global insights to
          ensure your goals are achieved efficiently and effectively.
        </SwiperSlide>
        <SwiperSlide>
          Colliers embraces innovation to deliver smarter real estate
          strategies. From leveraging cutting-edge technology to providing
          data-driven insights, we empower our clients to make informed
          decisions. This forward-thinking approach helps businesses and
          individuals maximize the value of their real estate investments.
        </SwiperSlide>
        <SwiperSlide>
          At Colliers, we believe in shaping the future responsibly. We are
          dedicated to sustainable practices that not only benefit the
          environment but also add long-term value to your property.
        </SwiperSlide>

        <div className="slider-controler flex max-md:justify-center  gap-3  mt-16">
          <div
            style={{ borderWidth: 1.5, borderRadius: 4 }}
            className={`swiper-button-prev static text-3xl font-semibold bg-red-500 border-2 border-red-500 px-5 py-0   duration-300 text-white hover:bg-white hover:text-red-500 transition-all `}
          >
            {"<"}
          </div>

          <div
            style={{ borderWidth: 1.5, borderRadius: 4 }}
            className={`swiper-button-next static text-3xl font-semibold bg-red-500 border-2 border-red-500 px-5 py-0   duration-300 text-white hover:bg-white hover:text-red-500 transition-all `}
          >
            {">"}
          </div>
        </div>
      </Swiper>
    </>
  );
}
