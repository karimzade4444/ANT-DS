
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
import bg1 from '../../assets/Group 71.png'


const MiddleTopInto = () => {
  return (
    <div className="p-5 lg:p-0">
      <p className="text-green-600 font-bold text-3xl text-center pt-10 lg:text-start lg:text-xl lg:pl-30">
        ABOUT US
      </p>
      <div className="lg:flex lg:flex-row-reverse lg:justify-center lg:items-center lg:relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full lg:w-[600px]"
        >
          <SwiperSlide>
            <div className="w-full flex justify-center">
              <img src={keyboardImg} alt="" className="w-full max-w-[600px]" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full flex justify-center">
              <img src={keyboardImg} alt="" className="w-full max-w-[600px]" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full flex justify-center">
              <img src={keyboardImg} alt="" className="w-full max-w-[600px]" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className=" lg:absolute lg:z-10 lg:left-30">
          <img src={keyboardImg} alt="" className="w-full pt-20 lg:hidden" />
          <p className="text-green-600  text-3xl pt-5 lg:text-6xl">
            FPS ИМЕЕТ ЗНАЧЕНИЕ
          </p>
          <p className="text-white pt-5 text-xl lg:text-xl lg:w-145">
            Компьютерный клуб построенный геймерами для геймеров. Каждая из
            наших игровых зон отвечает требованиям любых современных игровых
            проектов, позволяет добиваться высоких результатов и обходить
            соперников.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MiddleTopInto