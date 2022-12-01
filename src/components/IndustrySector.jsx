import { FaCalendarAlt, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { industrySector } from "../data/constantData";
import Wrapper from "./ui/Wrapper";

const IndustrySector = () => {
  return (
    <section className="pt-16 pb-10">
      <Wrapper>
        <header>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
            Industry sectors. Solutions.
          </h2>
          <p className="text-lg md:text-2xl lg:text-3xl font-normal text-slate-800 md:max-w-2xl my-8">
            Tailored to your industry. Find out what solutions and added value
            the new autosecure ecosystem has to offer you.
          </p>
          <Link className="link link-neutral text-lg">
            <FaCalendarAlt className="inline-block mr-4" />
            Arrange a consultation
          </Link>
        </header>

        <Swiper
          spaceBetween={35}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
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
          {industrySector.map((item) => (
            <SwiperSlide
              className="mySlide card bg-base-100 shadow-xl items-stretch cursor-grab"
              key={item.id}
            >
              <figure>
                <img src={item.image} alt={item.name} />
              </figure>
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
                    Learn More
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

export default IndustrySector;
