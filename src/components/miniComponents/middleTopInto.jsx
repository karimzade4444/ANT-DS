import keyboardImg from '../../assets/Девайсы premium брендов (посмотри какая из двух лучше) 1.png'

const MiddleTopInto = () => {
  return (
    <div className="p-5">
      <p className="text-green-600 font-bold text-3xl text-center pt-10">
        ABOUT US
      </p>
      <img src={keyboardImg} alt="" className="w-full pt-20" />
      <p className="text-green-600  text-3xl pt-5">FPS ИМЕЕТ ЗНАЧЕНИЕ</p>
      <p className='text-white pt-5 text-xl'>
        Компьютерный клуб построенный геймерами для геймеров. Каждая из наших
        игровых зон отвечает требованиям любых современных игровых проектов,
        позволяет добиваться высоких результатов и обходить соперников.
      </p>
    </div>
  );
}

export default MiddleTopInto