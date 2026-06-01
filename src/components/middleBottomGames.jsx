import Games from "./miniComponents/games"

const MiddleBottomGames = ({
  games,
  deleteGames,
  createGames,
  updateGames,
}) => {
  return (
    <div className=" h-screen bg-black/80">
      <p className=" text-green-600 text-4xl font-extrabold text-center p-5">
        GAMES
      </p>
      <Games  games={games} deleteGames={deleteGames} createGames={createGames} updateGames={updateGames}/>
    </div>
  );
};

export default MiddleBottomGames