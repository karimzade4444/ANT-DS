import dis from '../assets/7F947787-F0B3-44CA-A37D-72B9E69C01EA 1.png'

const Discount = () => {
  return (
     <div
              style={{ backgroundImage: `url(${dis})` }}
              className="h-screen bg-cover bg-center relative"
            >
              <p className=" absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-5xl leading-15 w-40 text-center">
                Discount
              </p>
            </div>
  )
}

export default Discount