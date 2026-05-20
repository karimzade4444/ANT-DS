import bgs from "../../assets/Group 71592.png";
import keyboardImg from "../../assets/Девайсы premium брендов (посмотри какая из двух лучше) 1.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  A11y,
  Scrollbar,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import bg1 from "../../assets/Group 71.png";
import MTII from "./MTII";
import MTIComfort from "./MTIComfort";
import MTIVip from "./MTIVip";
import MTIBootcamp from "./MTIBootcamp";


const MiddleTopInto = () => {
  return (
    <div className="p-5 lg:p-0 lg:relative">
      <p className="text-green-600 font-bold text-3xl text-center pt-10 lg:text-start lg:text-xl lg:pl-30 lg:absolute lg:top-5 z-10 ">
        ABOUT US
      </p>
      <div className="lg:flex lg:flex-row-reverse lg:justify-center lg:items-center lg:relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <div className="w-full h-screen relative">
              <img src={bgs} alt="" className="w-full h-screen object-cover " />
              <img
                src={keyboardImg}
                alt=""
                className="w-250 absolute top-10 h-160 right-10"
              />
              <div className=" absolute top-60 left-20">
                <p className="text-green-600  text-3xl pt-5 lg:text-6xl">
                  FPS ИМЕЕТ ЗНАЧЕНИЕ
                </p>
                <p className="text-white pt-5 text-xl lg:text-xl lg:w-145">
                  Компьютерный клуб построенный геймерами для геймеров. Каждая
                  из наших игровых зон отвечает требованиям любых современных
                  игровых проектов, позволяет добиваться высоких результатов и
                  обходить соперников.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <MTII />
          </SwiperSlide>

          <SwiperSlide>
            <MTIComfort />
          </SwiperSlide>
          <SwiperSlide>
            <MTIVip />
          </SwiperSlide>
          <SwiperSlide>
            <MTIBootcamp />
          </SwiperSlide>
        </Swiper>
        <div className=" lg:absolute lg:z-10 lg:left-30">
          <img src={keyboardImg} alt="" className="w-full pt-20 lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default MiddleTopInto;
