import i1 from "../../assets/DSC01974 1.png";
import i2 from "../../assets/DSCF0316 1.png";
import i3 from "../../assets/IMG_6072 1.png";
import i4 from "../../assets/DSC_1641 1.png";
import i5 from "../../assets/IMG_6285 1.png";
import i6 from "../../assets/DSCF0374 1.png";
import i7 from "../../assets/DSC_1616 1.png";
import { LinkOutlined } from "@ant-design/icons";

const BarInfoInto = () => {
  return (
    <div className="p-5">
      <p className="text-center font-black text-3xl text-green-600 pt-15">
        BAR & HOOKAH
      </p>
      <div className="grid grid-cols-1 gap-5 pt-20">
        <img src={i1} alt="" className=" shadow-2xl w-full" />
        <div className=" grid grid-cols-2 gap-5">
          <img src={i2} alt="" className=" shadow-2xl w-full" />
          <img src={i3} alt="" className=" shadow-2xl w-full" />
        </div>
        <img src={i4} alt="" className=" shadow-2xl w-full" />
        <div className="grid grid-cols-2 gap-5">
          <img src={i5} alt="" className=" shadow-2xl w-full" />
          <img src={i6} alt="" className=" shadow-2xl w-full" />
        </div>
        <img src={i7} alt="" className=" shadow-2xl w-full" />
      </div>
      <div className=" relative w-40 h-40 rounded-[100px] bg-purple-600 mt-20 ml-5">
        <p className=" text-white font-black text-3xl w-60 absolute left-20 top-15">
          ПОДРОБНО <LinkOutlined />
        </p>
      </div>
    </div>
  );
};

export default BarInfoInto;
