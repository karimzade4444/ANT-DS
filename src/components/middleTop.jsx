import bg from '../assets/Group 7159.png'
import MiddleTopInto from './miniComponents/middleTopInto'

const MiddleTop = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="h-screen bg-cover bg-center lg:hidden"
      >
        
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