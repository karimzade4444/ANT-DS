import { LinkOutlined } from "@ant-design/icons";
import gamer from "../../assets/image 17 (1).png";
import { Button } from "antd";

const TopBody = () => {
  return (
    <div className="p-5 relative lg:flex justify-between items-end lg:flex-row-reverse">
      <img src={gamer} alt="" className="w-full mt-50 lg:w-200 lg:mt-30 " />
      <p className="text-green-600 font-bold text-3xl pt-4 lg:absolute lg:left-30 lg:top-60 lg:text-6xl lg:tracking-widest lg:w-200">
        Больше, чем просто компьютерный клуб
      </p>
      <div className=" relative mt-15 lg:ml-25">
        <div className="w-30 h-30 rounded-[100px] bg-purple-600">
          <div>
            <p className=" flex gap-3 w-60 text-white font-bold text-xl absolute right-10 top-10 lg:left-20">
              ВОЙТИ В АККАУНТ <LinkOutlined />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBody;
