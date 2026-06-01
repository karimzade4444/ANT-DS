



const Games = ({ games, deleteGames, createGames, updateGames }) => {
  return (
    <div className=" grid grid-cols-1 gap-5 p-5 lg:grid-cols-5">
      {games.map((item) => {
        return (
          <div
            key={item.id}
            className="bg-gray-900 text-white rounded-xl p-5 shadow-lg border border-gray-800"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>

            <div className="flex justify-between items-center mb-4">
              <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                {item.platform}
              </span>
              <span className="text-gray-400 text-sm">{item.genre}</span>
            </div>

            <button
              onClick={() => deleteGames(item.id)}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
            >
              Удалить
            </button>
            <button
             
              className="w-full mt-3 bg-white/60 hover:bg-white/30 text-black font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
            >
              Посмотреть
            </button>
            <button
              
              className="w-full mt-3 bg-black hover:bg-black/50 text-white font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
            >
              Редактировать
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Games