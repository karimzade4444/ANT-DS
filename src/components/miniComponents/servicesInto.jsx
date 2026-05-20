import { InstagramOutlined, LinkedinOutlined, WhatsAppOutlined } from '@ant-design/icons';
import girl from '../../assets/IMG_7433 1.png'
import { Button } from "antd";
import ServiceInfoLocation from './serviceInfoLocation';

const ServicesInto = () => {
  return (
    <div className="p-5 lg: relative">
      <p className="text-green-600 text-center pt-20 font-black text-3xl lg:text-start lg:text-xl lg:pl-20">
        SERVICES
      </p>
      <img
        src={girl}
        alt=""
        className="w-full pt-20 lg:w-250 lg:absolute lg:right-20"
      />
      <div className=' lg:absolute lg:left-40 z-10 lg:w-120 lg:top-100'>
        <p className="text-green-600 text-3xl pt-10 lg:text-5xl">НАШИ КОНТАКТЫ</p>
        <p className="pt-10 text-white text-2xl lg:text-xl ">
          Наши сотрудники всегда готовы помочь вам с выбором, оформить бронь и
          предоставить лучший сервис
        </p>
        <p className=" text-white pt-20 text-center lg:text-start lg:text-4xl">+992 917-20-8222</p>
      </div>
      <div className=" flex justify-center items-center pt-5 gap-5 lg:absolute lg:top-190 lg:left-45">
        <Button
          icon={<InstagramOutlined className=" text-5xl!" />}
          className="w-20! h-20! rounded-3xl!"
        />
        <Button
          icon={<WhatsAppOutlined className=" text-5xl!" />}
          className="w-20! h-20! rounded-3xl!"
        />
        <Button
          icon={<LinkedinOutlined className=" text-5xl!" />}
          className="w-20! h-20! rounded-3xl!"
        />
      </div>
      <ServiceInfoLocation />
    </div>
  );
}

export default ServicesInto