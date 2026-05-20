import bgss from "../../assets/Group 71592.png";
import monitor from "../../assets/Acer gaming 27’ 240hz 1ms.png";
import earphone from "../../assets/hyperx-cloud-stinger-1.png";
import mouse from "../../assets/Мышь стандарт.png";
import keyb from "../../assets/Dark Project KD87 A LTD.png";

const MTII = () => {
  return (
    <div className="w-full h-screen relative">
      <img src={bgss} alt="" className="w-full h-screen object-cover " />

      <div className=" absolute top-60 left-20">
        <p className="text-white pt-5 text-xl lg:text-xl ">STANDART PX</p>
        <p className="text-green-600  text-3xl pt-5 lg:text-5xl lg:w-170 lg:leading-17">
          CPU INTEL CORE I5 4.6MHZ RAM 16GB 3200MHZ CL 15 RTX2070 8GB GDDR6
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
            <p>Acer gaming 27' 240hz 1ms</p>
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
            <p>Hyper X Cloud Alpha S Blue</p>
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
            <p>Logitech g102</p>
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
            <p>Dark Project KD 87 A</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MTII;
