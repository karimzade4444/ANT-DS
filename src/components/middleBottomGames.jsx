import Games from "./miniComponents/games"

const MiddleBottomGames = ({
  games,
  deleteGames,
  createGames,
  updateGames,
}) => {
  return (
    <div className="min-h-screen bg-black/80">
      <p className=" text-green-600 text-4xl font-extrabold text-center p-5">
        GAMES
      </p>
      <div className=" flex justify-around items-center flex-wrap gap-7 p-5">
        <input type="search" name="" id="" className=" w-100 h-14 bg-white/60 rounded-2xl" />
        <button className=" w-60 h-14 bg-white rounded-2xl font-black cursor-pointer">Добавить новую игру</button>
      </div>
      <Games
        games={games}
        deleteGames={deleteGames}
        createGames={createGames}
        updateGames={updateGames}
      />
    </div>
  );
};

export default MiddleBottomGames