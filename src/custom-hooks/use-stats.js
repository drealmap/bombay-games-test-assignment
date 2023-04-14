import React, { useState, useEffect } from "react";
import { useAllCustomers } from "./customers";
import { useAllGames } from "./games";


export function useStat() {
  const { customers } = useAllCustomers();
  const { games } = useAllGames();

  const [newUsersThisWeek, setNewUsersThisWeek] = useState(0);
  const [newGamesThisWeek, setNewGamesThisWeek] = useState(0);
  const [usersAddedLastWeek, setUsersAddedLastWeek] = useState([]);
  const [usersAddedThisWeek, setUsersAddedThisWeek] = useState([]);
  const [gamesAddedLastWeek, setGamesAddedLastWeek] = useState([]);
  const [gamesAddedThisWeek, setGamesAddedThisWeek] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      const users = customers;
      const today = new Date();
      const weekStart = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - today.getDay()
      );

      const newUsersThisWeek = users?.filter((user) => {
        const userDate = new Date(user.date);
        return userDate >= weekStart && userDate <= today;
      });
      const newGamesThisWeek = games?.filter((game) => {
        const gameDate = new Date(game.releaseDate);
        return gameDate >= weekStart && gameDate <= today;
      });
      const usersAddedLastWeek = users?.filter((user) => {
        const userDate = new Date(user.date);
        return !userDate >= weekStart && userDate <= today;
      });
      const gamesAddedLastWeek = games?.filter((game) => {
        const gameDate = new Date(game.date);
        return !gameDate >= weekStart && gameDate <= today;
      });

      setNewUsersThisWeek(newUsersThisWeek?.length);
      setNewGamesThisWeek(newGamesThisWeek?.length);
      setUsersAddedThisWeek(newUsersThisWeek);
      setUsersAddedLastWeek(usersAddedLastWeek);
      setGamesAddedLastWeek(gamesAddedLastWeek);
      setGamesAddedThisWeek(newGamesThisWeek);
    }

    fetchUserData();
  }, [customers, games]);

  return {
    newGamesThisWeek,
    newUsersThisWeek,
    usersAddedLastWeek,
    usersAddedThisWeek,
    gamesAddedLastWeek,
    gamesAddedThisWeek,
  };
}