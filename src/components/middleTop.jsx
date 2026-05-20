import bg from '../assets/Group 7159.png'
import MiddleTopInto from './miniComponents/middleTopInto'
import keyboard from '../assets/Девайсы premium брендов (посмотри какая из двух лучше) 1.png'

const MiddleTop = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="h-screen bg-cover bg-center lg:hidden"
      >
        <div>
          <p>ABOUT US</p>
          <img src={keyboard} alt="" />
        </div>
      </div>
      <div
        className="hidden h-screen bg-cover bg-center lg:block bg-black/95"
      >
        <MiddleTopInto />
      </div>
    </>
  );
}

export default MiddleTop