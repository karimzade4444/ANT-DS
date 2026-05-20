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
        <div className='p-5'>
          <p className='text-green-600 text-3xl text-center pt-10'>ABOUT US</p>
          <img src={keyboard} alt=""  className='w-full pt-10'/>
          <p className="text-green-600  text-3xl pt-5 lg:text-6xl">
            FPS ИМЕЕТ ЗНАЧЕНИЕ
          </p>
          <p className="text-white pt-5 text-xl lg:text-xl lg:w-145">
            Компьютерный клуб построенный геймерами для геймеров. Каждая из
            наших игровых зон отвечает требованиям любых современных игровых
            проектов, позволяет добиваться высоких результатов и обходить
            соперников.
          </p>
        </div>
      </div>
      <div className="hidden h-screen bg-cover bg-center lg:block bg-black/95">
        <MiddleTopInto />
      </div>
    </>
  );
}

export default MiddleTop