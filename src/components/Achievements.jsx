import Wrapper from "./ui/Wrapper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { acheivements } from "../data/constantData";

const Achievements = () => {
  return (
    <section className="py-14">
      <div className="container lg:max-w-[1300px] mx-auto px-14 relative">
        <Swiper
          spaceBetween={35}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper py-8 static"
          breakpoints={{
            668: {
              // width: 576,
              slidesPerView: 1,
            },
            920: {
              // width: 768,
              slidesPerView: 2,
            },
            1280: {
              // width: 768,
              slidesPerView: 3,
            },
          }}
          style={{
            "--swiper-pagination-color": "#162529",
            "--swiper-navigation-color": "#162529",
          }}
        >
          {acheivements.map((item) => (
            <SwiperSlide
              className="mySlide card bg-base-100 shadow-xl items-stretch cursor-grab"
              key={item.id}
            >
              <figure>
                <img src={item.image} alt={item.title} />
              </figure>
              <div className="card-body items-start">
                <h2 className="card-title text-base font-bold lg:text-xl">
                  {item.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Achievements;
