import place from '../../assets/15 1.png'

const MiddleBottomInto = () => {
  return (
    <div className='p-5 pt-20 lg:relative'>
        <p className='text-green-600 font-black text-center text-2xl'>YOUR FAVORITE PLACES</p>
        <img src={place} alt="" className='w-full pt-20 lg:w-150 lg:absolute lg:top-0'/>
        <p className='text-green-600 text-3xl pt-10'>PRIVATE PLAYSTATION 5 ROOM ДЛЯ ИЗЫСКАННЫХ ГЕЙМЕРОВ</p>
    </div>
  )
}

export default MiddleBottomInto