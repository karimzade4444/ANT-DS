import logotype from '../../assets/Group 7169.png'


const FooterBottom = () => {
  return (
    <div className="h-screen bg-black/95 pt-20">
      <div className=" flex justify-center items-center flex-col leading-20 text-white text-3xl">
        <img src={logotype} alt="" className="w-50" />
        <div className=' lg: flex lg:justify-center lg:items-center lg:gap-10 lg:pt-20'>
          <p className="pt-10 lg:pt-0">About us</p>
          <p>Your favorite places</p>
          <p>Bar & Hookah</p>
          <p>Services</p>
        </div>
      </div>
      <p className="text-white/40 text-center pt-30 text-2xl">
        @2022-2026 Gosu Cybersoft - Больше, чем просто компьютерный клуб
      </p>
    </div>
  );
}

export default FooterBottom