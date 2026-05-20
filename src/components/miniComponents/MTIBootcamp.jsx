import bgss from "../../assets/Group 71592.png";
import monitor from "../../assets/Lenovo Legion 27’ 240hz 0,5ms 1.png";
import earphone from "../../assets/Уши бутка.png";
import mouse from "../../assets/Мышь бутка.png";
import keyb from "../../assets/Dark project kd 87 a gateron teel ltd.png";

const MTIBootcamp = () => {
  return (
    <div className="w-full h-screen relative">
      <img src={bgss} alt="" className="w-full h-screen object-cover " />

      <div className=" absolute top-60 left-20">
        <p className="text-white pt-5 text-xl lg:text-xl uppercase ">
          Bootcamp
        </p>
        <p className="text-green-600  text-3xl pt-5 lg:text-5xl lg:w-170 lg:leading-17 uppercase">
          CPU intel Core i9 OC 5.0Mhz RAM 32gb 3600 cl 16 RX6900xt 16gb GDDR6
        </p>
      </div>
      <div className=" absolute z-10 top-20 grid grid-cols-2 gap-5 right-10">
        <div className="w-80 h-70 bg-black/50">
          {" "}
          <div className="w-full h-[70%] flex justify-center items-center">
            <img src={monitor} alt="" className="w-[70%] h-full" />
          </div>
          <div className="text-white p-3">
            <p className=" bg-linear-to-r from-green-700  via-purple-600 to-red-700 bg-clip-text text-transparent font-black">
              МОНИТОР
            </p>
            <p>Lenovo Legion 27’ 240hz 0,5ms</p>
          </div>
        </div>
        <div className="w-80 h-70 bg-black/50">
          {" "}
          <div className="w-full h-[70%] flex justify-center items-center">
            <img src={earphone} alt="" className="w-[70%] h-full" />
          </div>
          <div className="text-white p-3">
            <p className=" bg-linear-to-r from-green-700  via-purple-600 to-red-700 bg-clip-text text-transparent font-black">
              НАУШНИКИ
            </p>
            <p>Asus ROG Delta Origin</p>
          </div>
        </div>
        <div className="w-80 h-70 bg-black/50">
          {" "}
          <div className="w-full h-[70%] flex justify-center items-center">
            <img src={mouse} alt="" className="w-[50%] h-full" />
          </div>
          <div className="text-white p-3">
            <p className=" bg-linear-to-r from-green-700  via-purple-600 to-red-700 bg-clip-text text-transparent font-black">
              Мышь
            </p>
            <p>Logitech G Pro</p>
          </div>
        </div>
        <div className="w-80 h-70 bg-black/50">
          {" "}
          <div className="w-full h-[70%] flex justify-center items-center">
            <img src={keyb} alt="" className="w-full h-[80%]" />
          </div>
          <div className="text-white p-3">
            <p className=" bg-linear-to-r from-green-700  via-purple-600 to-red-700 bg-clip-text text-transparent font-black">
              КЛАВИАТУРА
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MTIBootcamp