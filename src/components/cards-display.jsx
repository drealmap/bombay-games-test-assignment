import React, {useState, useEffect} from "react";
import { MidSpinner } from "./loader";
import BasicCard from "./basic-card";
import { useAllCustomers, useAllGames, useStat } from "../custom-hooks";

export const CardsDisplay = () => {
  const { customers, isCustomersLoading } = useAllCustomers();
  const { games, isGamesLoading } = useAllGames();
  const { newUsersThisWeek, newGamesThisWeek } = useStat()

  return (
    <div className="flex flex-col gap-4 mt-3 sm:mt-5 lg:flex-row font-switzer ">
      {isCustomersLoading ? (
        <MidSpinner />
      ) : (
        <BasicCard
          newUsersThisWeek={newUsersThisWeek}
          customers={customers}
          str="Customers"
        />
      )}

      {isGamesLoading ? (
        <MidSpinner />
      ) : (
        <BasicCard
          newUsersThisWeek={newGamesThisWeek}
          customers={games}
          str="Games"
        />
      )}
    </div>
  );
};
