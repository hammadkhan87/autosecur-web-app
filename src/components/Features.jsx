import { FaCheck } from "react-icons/fa";
import video from "../assets/videos/autosecure_secure_web_white_mobile_neu.mp4";
import { Link } from "react-router-dom";
import Wrapper from "./ui/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { features } from "../data/constantData";

const Features = () => {
  return (
    <section className="py-14">
      <Wrapper className="px-4 md:px-24">
        <Swiper
          spaceBetween={35}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper py-8"
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
          {features.map((item) => (
            <SwiperSlide
              className="mySlide card bg-base-100 shadow-xl items-stretch cursor-grab"
              key={item.id}
            >
              <video autoPlay muted>
                <source src={video} type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
              <div className="card-body items-start">
                <h2 className="card-title text-lg font-bold lg:text-2xl">
                  {item.name}
                </h2>
                <p>{item.desc}</p>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-blue-500 min-w-[20px]" />
                  <p className="text-base">{item.benefit1}</p>
                </div>
                <div className="flex gap-2">
                  <FaCheck className="text-blue-500 min-w-[20px]" />
                  <p className="text-base">{item.benefit2}</p>
                </div>
                <div className="mt-4">
                  <Link to={item.link} className="btn btn-active">
                    {item.btnTitle}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  );
};

export default Features;
