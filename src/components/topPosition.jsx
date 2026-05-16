
import bgTop from '../assets/1920 1.png'
import { Button } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import TopBody from './miniComponents/topBody';


const TopPosition = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgTop})` }}
      className="h-screen bg-cover bg-center"
    >
      <TopBody/>
    </div>
  );
}

export default TopPosition