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
import TopPosition from "./components/topPosition";
import TopBottom from "./components/topBottom";
import logo from "./assets/Group 7169.png";
import MiddleTop from "./components/middleTop";
import Middle from "./components/middle";
import MiddleBottom from "./components/middleBottom";
import Bar from "./components/bar";
import BarInfo from "./components/barInfo";
import Discount from "./components/discount";
import Action from "./components/action";
import ContactUs from "./components/contactUs";
import Services from "./components/services";
import Footertop from "./components/Footertop";
import logotypes from ".//assets/Group 7169.png";
import MiddleBottomGames from "./components/middleBottomGames";

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const swiper = useSwiper();
  return (
    <>
      <div className=" relative">
        <div className=" fixed w-full left-0 top-0 z-100  bg-black/50">
          <div className="  flex justify-evenly items-center gap p-5 gap-30">
            <img src={logo} alt="" className="w-30" />
            <div className="flex justify-center items-center gap-3 lg:hidden">
              <Button
                icon={<MenuOutlined />}
                onClick={() => {
                  setOpenDrawer(true);
                }}
              />
              <p className="text-white! text-2xl">Menu</p>
            </div>
            <div className="hidden  text-white lg:flex justify-center items-center gap-10">
              <p>О нас</p>
              <p>Твои любимые места</p>
              <p>Bar & Hookah</p>
              <p>Акции</p>
              <p>Наши цены</p>
            </div>
            <Button variant="filled" className=" rounded-3xl! bg-white/30! border-white/50! text-white! hidden! lg:block!">Связаться с нами</Button>
          </div>
        </div>
        <TopPosition />
        <TopBottom />
        <MiddleTop />
        <Middle />
        <MiddleBottom />
        <MiddleBottomGames/>
        <Bar />
        <BarInfo />
        <Discount />
        <Action />
        <ContactUs />
        <Services />
        <Footertop />

        <Drawer
          open={openDrawer}
          className=" text-white! bg-gray-700!"
          onClose={() => {
            setOpenDrawer(false);
          }}
        >
          <div className="h-screen  pt-20">
            <div className=" flex justify-center items-center flex-col leading-20 text-white text-3xl">
              <img src={logotypes} alt="" className="w-50" />
              <p className="pt-10">About us</p>
              <p>Your favorite places</p>
              <p>Bar & Hookah</p>
              <p>Services</p>
            </div>
            <p className="text-white/40 text-center pt-30 text-2xl">
              @2022-2026 Gosu Cybersoft - Больше, чем просто компьютерный клуб
            </p>
          </div>
        </Drawer>

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
