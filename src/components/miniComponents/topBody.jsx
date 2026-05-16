import { LinkOutlined } from "@ant-design/icons";
import gamer from "../../assets/image 17 (1).png";
import { Button } from "antd";

const TopBody = () => {
  return (
    <div className="p-5">
      <img src={gamer} alt="" className="w-full mt-50" />
      <p className="text-green-600 font-bold text-3xl pt-4">
        Больше, чем просто компьютерный клуб
      </p>
      <div className=" relative mt-15">
        <div className="w-30 h-30 rounded-[100px] bg-purple-600">
          <div>
            <p className=" flex gap-3 w-60 text-white font-bold text-xl absolute right-10 top-10">
              ВОЙТИ В АККАУНТ <LinkOutlined />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBody;
