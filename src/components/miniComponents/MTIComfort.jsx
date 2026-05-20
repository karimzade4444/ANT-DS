import bgss from "../../assets/Group 71592.png";
import monitor from "../../assets/Benq ZOWIE XL2740 27’ 240hz.png";
import earphone from "../../assets/уши комфортт.png";
import mouse from "../../assets/мышь комфорт.png";
import keyb from "../../assets/Dark Project KD87 A LTD.png";


const MTIComfort = () => {
  return (
    <div className="w-full h-screen relative">
      <img src={bgss} alt="" className="w-full h-screen object-cover " />

      <div className=" absolute top-60 left-20">
        <p className="text-white pt-5 text-xl lg:text-xl uppercase ">
          comfort pc
        </p>
        <p className="text-green-600  text-3xl pt-5 lg:text-5xl lg:w-170 lg:leading-17 uppercase">
          CPU intel Core i5 OC 5.0Mhz RAM 16gb 3600 cl 16 RTX 3070 with 8gb
          GDDR6
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
            <p>Benq ZOWIE XL2740 27’ 240hz</p>
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
            <p>Logitech Pro X</p>
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
            <p>ZOWIE EC 2</p>
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
}

export default MTIComfort