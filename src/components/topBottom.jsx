import bgTB from '../assets/DSC088w02 1 2.png'

const TopBottom = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgTB})` }}
      className="h-screen bg-cover bg-center relative"
    >
      <p className=" absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-4xl" >
        About us
      </p>
    </div>
  );
}

export default TopBottom