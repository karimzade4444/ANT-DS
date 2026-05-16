import logo from '../assets/Group 7169.png'
import bgTop from '../assets/1920 1.png'
import { Button } from "antd";
import { MenuOutlined } from '@ant-design/icons';


const TopPosition = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgTop})` }}
      className="h-screen bg-cover bg-center"
    >
      <div className=' sticky top-0'>
        <div className="  flex justify-between items-center gap p-5">
          <img src={logo} alt="" className="w-30" />
          <div className="flex justify-center items-center gap-3">
            <Button icon={<MenuOutlined />} />
            <p className="text-white! text-2xl">Menu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPosition