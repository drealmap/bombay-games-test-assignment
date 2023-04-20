import React from "react";
import moment from "moment/moment";
import { AiOutlineUserAdd } from "react-icons/ai";

import { GameFilters, GamesTable } from "./components";
import { useFilterGames } from "../../custom-hooks";

export const Games = ({ toggleGameModal, setEdit, setGameData }) => {
  const {
    handleFilterbyCategory,
    handleGameSearch,
    filterGameDate,
    gamesList,
  } = useFilterGames();

  return (
    <div
      style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.04)" }}
      className="flex flex-col bg-white border border-[#EAEBF0] rounded-[10px]"
    >
      <div className="flex justify-between px-6 py-4">
        <h6 className=" font-switzer font-semibold sm:text-lg leading-6 text-[#1F1F1F] ">
          Games Data
        </h6>
        <button
          onClick={() => {
            setEdit(false);
            toggleGameModal();
          }}
          className="inline-flex items-center px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-md outline-none sm:text-sm hover:bg-blue-800 active:bg-gray-400"
        >
          <AiOutlineUserAdd
            className="mr-2 text-base font-bold sm:text-xl"
            color="white"
          />
          <span>Add a Game</span>
        </button>
      </div>
      <GameFilters
        handleFilterbyCategory={handleFilterbyCategory}
        handleGameSearch={handleGameSearch}
        filterGameDate={filterGameDate}
      />
      <div className=" grid grid-cols-12 text-xs md:text-sm font-switzer leading-[18px] text-[#5F6D7E] py-3 border-y border-[#EAEBF0] ">
        <div className="col-span-3 px-3 md:px-6 ">
          <p className="">Name</p>
        </div>
        <div className="col-span-3 px-3 md:px-6 ">
          <p className="">Game Category</p>
        </div>
        <div className="col-span-2 px-3 md:px-6 ">
          <p className="">Publisher</p>
        </div>
        <div className="col-span-3 px-3 md:px-6 ">
          <p className="">Creation Date</p>
        </div>
      </div>

      <GamesTable
        toggleGameModal={toggleGameModal}
        gamesList={gamesList}
        setEdit={setEdit}
        setGameData={setGameData}
      />
    </div>
  );
};
