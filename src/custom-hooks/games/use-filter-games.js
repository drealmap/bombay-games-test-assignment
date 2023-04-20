import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { useAllGames } from "./use-all-games";
import { useStat } from "../use-stats";

export function useFilterGames() {
  const [gamesList, setGamesList] = useState([]);

  const { games } = useAllGames();
  const { gamesAddedLastWeek, gamesAddedThisWeek } = useStat();

  useEffect(() => {
    if (games) {
      setGamesList(games);
    }
  }, [games]);

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
  return {
    handleGameSearch,
    gamesList,
    filterGameDate,
    handleFilterbyCategory,
  };
}
