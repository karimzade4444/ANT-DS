import wook from '../../assets/DSC02819 1.png'

const ActionInto = () => {
  return (
    <div className='p-5 lg:relative'>
   <p className='text-green-600 font-black text-4xl text-center pt-10'>Акции</p>
   <img src={wook} alt=""  className=' w-full pt-20 lg:w-200 lg:h-170 lg:absolute lg:right-20'/>
   <p className='text-green-600 text-3xl pt-10 lg:absolute lg:w-200 lg:text-5xl lg:left-40 lg:top-100 lg:leading-17'>ПРИ ПОКУПКЕ ПАРОВОГО КОКТЕЙЛЯ ЧАС ИГРЫ В ПОДАРОК</p>
    </div>
  )
}

export default ActionInto