import Games from "./miniComponents/games"

const MiddleBottomGames = () => {
  return (
    <div className=" h-screen bg-black/80">
        <p className=" text-green-600 text-4xl font-extrabold text-center p-5">GAMES</p>
       <Games/>
    </div>
  )
}

export default MiddleBottomGames