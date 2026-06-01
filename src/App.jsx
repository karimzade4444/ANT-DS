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
import logotypes from "./assets/Group 7169.png"; // Исправил двойной слэш .//
import MiddleBottomGames from "./components/middleBottomGames";

const App = () => {
  // --- 1. ВСЕ ХУКИ И СТЕЙТЫ ДОЛЖНЫ БЫТЬ ТУТ, ВНУТРИ АРР ---
  const [openDrawer, setOpenDrawer] = useState(false);
  const swiper = useSwiper();

  const [games, setGames] = useState([
    // Хорошая практика: маленькая буква в setGames
    {
      id: 1,
      image:
        "https://cdn.marvel.com/content/2x/marvelsspiderman2_lob_crd_02.jpg",
      title: "Spider-Man 2",
      platform: "PS5",
      genre: "Action",
    },
    {
      id: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
      title: "Cyberpunk 2077",
      platform: "PC",
      genre: "RPG",
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/ru/d/db/Counter-strike_2.jpg",
      title: "Counter Strike 2",
      platform: "PC",
      genre: "Shooter",
    },
  ]);

  // --- 2. CRUD ФУНКЦИИ ТОЖЕ ВНУТРИ КОМПОНЕНТА ---
  const createGames = (newImage, newTitle, newPlatform, newGenre) => {
    const newItem = {
      id: Date.now(),
      image: newImage,
      title: newTitle,
      platform: newPlatform,
      genre: newGenre,
    };
    setGames([...games, newItem]);
  };

  const deleteGames = (idToDelete) => {
    const updatedGames = games.filter((item) => item.id !== idToDelete);
    setGames(updatedGames);
  };

  const updateGames = (
    idToUpdate,
    updatedImage,
    updatedTitle,
    updatedPlatform,
    updatedGenre,
  ) => {
    const updateddGames = games.map((item) => {
      if (item.id === idToUpdate) {
        return {
          ...item,
          image: updatedImage,
          title: updatedTitle,
          platform: updatedPlatform,
          genre: updatedGenre,
        };
      }
      return item;
    });
    setGames(updateddGames);
  };

  return (
    <>
      <div className="relative">
        <div className="fixed w-full left-0 top-0 z-100 bg-black/50">
          <div className="flex justify-evenly items-center p-5 gap-30">
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
            <div className="hidden text-white lg:flex justify-center items-center gap-10">
              <p>О нас</p>
              <p>Твои любимые места</p>
              <p>Bar & Hookah</p>
              <p>Акции</p>
              <p>Наши цены</p>
            </div>
            <Button
              variant="filled"
              className="rounded-3xl! bg-white/30! border-white/50! text-white! hidden! lg:block!"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
        <TopPosition />
        <TopBottom />
        <MiddleTop />
        <Middle />
        <MiddleBottom />

        {/* --- 3. ПЕРЕДАЕМ ДАННЫЕ И ФУНКЦИИ В КОМПОНЕНТ ИГР ЧЕРЕЗ ПРОПСЫ --- */}
        <MiddleBottomGames
          games={games}
          createGames={createGames}
          deleteGames={deleteGames}
          updateGames={updateGames}
        />

        <Bar />
        <BarInfo />
        <Discount />
        <Action />
        <ContactUs />
        <Services />
        <Footertop />

        <Drawer
          open={openDrawer}
          className="text-white! bg-gray-700!"
          onClose={() => {
            setOpenDrawer(false);
          }}
        >
          <div className="h-screen pt-20">
            <div className="flex justify-center items-center flex-col leading-20 text-white text-3xl">
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
      </div>
    </>
  );
};

export default App;
