import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { useAllCustomers, useAllGames, useStat } from "../custom-hooks";
import right from "../assets/right.svg";
import { TabComponent } from "./tab/tabs";
import { Funhub } from "./funhub";
import { CardsDisplay } from "./cards-display";

export const Container = () => {
  const [customersList, setCustomersList] = useState([]);
  const [gamesList, setGamesList] = useState([]);

  const { games, isGamesLoading } = useAllGames();
  const { gamesAddedLastWeek, gamesAddedThisWeek } = useStat();

  function filterItems(arr, query) {
    return arr.filter((el) =>
      el.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  const filterGameDate = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setGamesList(games);
    }
    if (e.target.value === "lastWeek") {
      setGamesList(gamesAddedLastWeek);
      if (gamesAddedLastWeek.length === 0) {
        toast.error("No result found");
      }
    }
    if (e.target.value === "thisWeek") {
      setGamesList(gamesAddedThisWeek);
      if (gamesAddedThisWeek.length === 0) {
        toast.error("No result found");
      }
    }
  };

  function filterCategory(arr, query) {
    return arr.filter((el) =>
      el.category.toLowerCase().includes(query.toLowerCase())
    );
  }

  const handleGameSearch = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setGamesList(games);
    }
    if (e.target.value !== "") {
      setGamesList(filterItems(games, e.target.value));
      if (filterItems(gamesList, e.target.value).length === 0) {
        toast.error("No result found");
      }
    }
  };

  const handleFilterbyCategory = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setGamesList(games);
    }
    if (e.target.value !== "") {
      setGamesList(filterCategory(games, e.target.value));
      if (filterCategory(gamesList, e.target.value).length === 0) {
        toast.error("No result found");
      }
    }
  };

  useEffect(() => {
    if (games) {
      setGamesList(games);
      console.log(games);
    }
  }, [games]);

  return (
    <div className=" overflow-x-hidden bg-[#FAFBFC] h-full min-h-screen p-6 lg:ml-[6vw]">
      <div className="flex font-switzer font-medium text-sm text-[#5F6D7E] items-center">
        Home
        <img src={right} alt="" />
        <span className=" text-[#D71E0E] -tracking-[0.1px] ">Dashboard</span>
      </div>

      <div className="flex flex-col gap-10 mt-7">
        <Funhub />
        <CardsDisplay />
        <TabComponent
          numberOfGames={gamesList.length}
          games={gamesList}
          handleGameSearch={handleGameSearch}
          handleFilterbyCategory={handleFilterbyCategory}
          filterGameDate={filterGameDate}
        />
      </div>
    </div>
  );
};
