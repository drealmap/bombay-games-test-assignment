import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { BASE_API_URL } from "../../utils/constants";

export function useAllGames() {
  const {
    isLoading: isGamesLoading,
    isError: isGamesError,
    data: games,
    error: gamesError,
  } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_API_URL}/api/games`);
      const data = await response.data;
      return data;
    },
  });

  return { isGamesLoading, games, isGamesError, gamesError };
}

