import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState } from "react";
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

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const swiper = useSwiper();
  return (
    <>
      <div className=" relative">
        {/* <h1>GOSU</h1>
        <div className="lg:flex gap-5 justify-center items-center hidden">
          <p>О нас</p>
          <p>Твои любимые места</p>
          <p>Bar&Hookah</p>
          <p>Bar&Hookah</p>
          <p>Bar&Hookah</p>
        </div>
        <Button
          className="hidden! lg:block!"
          shape="round"
          color="default"
          variant="filled"
        >
          Связаться с нами
        </Button>
        <Button
          className="lg:hidden!"
          icon={<MenuOutlined />}
          onClick={() => {
            setOpenDrawer(true);
          }}
        />
        <Drawer
          open={openDrawer}
          onClose={() => {
            setOpenDrawer(false);
          }}
        >
          <div className="flex flex-col gap-5 justify-center items-center">
            <p>О нас</p>
            <p>Твои любимые места</p>
            <p>Bar&Hookah</p>
            <p>Bar&Hookah</p>
            <p>Bar&Hookah</p>
          </div>
        </Drawer>
      </div>

      <div className="w-1/2">
        <Swiper
          slidesPerView={1}
          spaceBetween={100}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Pagination,Autoplay]}
          pagination={{ clickable: true }}
      
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
        </Swiper> */}
      </div>
    </>
  );
};

export default App;
