import bgr from "../assets/DSC08928 1.png";

const Middle = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgr})` }}
      className="h-screen bg-cover bg-center relative"
    >
      <p className=" absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-4xl w-80 text-center">
        Your favorite places & Games
      </p>
    </div>
  );
};

export default Middle;
