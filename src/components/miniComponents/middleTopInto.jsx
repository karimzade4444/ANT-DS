
import keyboardImg from '../../assets/Девайсы premium брендов (посмотри какая из двух лучше) 1.png'
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


const MiddleTopInto = () => {
  return (
    <div className="p-5 lg:p-0">
      <p className="text-green-600 font-bold text-3xl text-center pt-10">
        ABOUT US
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="hidden! lg:block!"
      >
        <SwiperSlide>
          <div className="w-full h-50 bg-blue-600"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-50 bg-red-600"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-50 bg-green-600"></div>
        </SwiperSlide>
      </Swiper>

      <img src={keyboardImg} alt="" className="w-full pt-20 lg:hidden" />
      <p className="text-green-600  text-3xl pt-5">FPS ИМЕЕТ ЗНАЧЕНИЕ</p>
      <p className="text-white pt-5 text-xl">
        Компьютерный клуб построенный геймерами для геймеров. Каждая из наших
        игровых зон отвечает требованиям любых современных игровых проектов,
        позволяет добиваться высоких результатов и обходить соперников.
      </p>
    </div>
  );
}

export default MiddleTopInto