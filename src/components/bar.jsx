
import bgb from '../assets/DSC08022 3.png'

const Bar = () => {
  return (
        <div
          style={{ backgroundImage: `url(${bgb})` }}
          className="h-screen bg-cover bg-center relative"
        >
          <p className=" absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-5xl leading-15 w-40 text-center">
            Bar & Hookah
          </p>
        </div>
  )
}

export default Bar