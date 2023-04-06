import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { MidSpinner } from "./loader";

export const AddGameModal = ({
  toggleModal,
  handleAddGame,
  edit,
  handleEditGame,
  gameData,
  setGameData,
  loading,
}) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen ">
      {loading ? (
        <MidSpinner />
      ) : (
        <>
          {" "}
          <div
            onClick={toggleModal}
            className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 bg-[#313131] bg-opacity-80"
          ></div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] overflow-auto h-[80vh] lg:h-full -translate-y-[50%] w-[90vw] max-w-md">
            <form
              onSubmit={
                edit
                  ? (e) => {
                      e.preventDefault();
                      handleEditGame(gameData._id);
                    }
                  : handleAddGame
              }
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
            >
              <h2 className="mb-5 text-lg">
                {edit ? "Edit Game's Details" : "Add A New Game"}
              </h2>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Sportsbet"
                  required
                  value={gameData.name}
                  onChange={({ target: { value } }) =>
                    setGameData({ ...gameData, name: value })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="publisher"
                >
                  Publisher
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="publisher"
                  type="text"
                  placeholder="Bombay games"
                  required
                  value={gameData.publisher}
                  onChange={({ target: { value } }) =>
                    setGameData({ ...gameData, publisher: value })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="description"
                >
                  Description
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="description"
                  type="text"
                  placeholder="A very interactive casino game"
                  required
                  value={gameData.description}
                  onChange={({ target: { value } }) =>
                    setGameData({ ...gameData, description: value })
                  }
                />
              </div>


              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    for="grid-state"
                  >
                    Category
                  </label>
                  <div className="relative">
                    <select
                      className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      value={gameData.category}
                      onChange={({ target: { value } }) =>
                        setGameData({ ...gameData, category: value })
                      }
                    >
                      <option>Arcade </option>
                      <option>Action </option>
                      <option>Adventure </option>
                      <option>Casino</option>
                      <option>Racing</option>
                      <option>Sports</option>
                      <option>Strategy</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                      <AiOutlineDown size={"0.7rem"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  {edit ? "Save" : "Add Game"}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
