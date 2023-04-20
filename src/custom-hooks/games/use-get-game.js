import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { BASE_API_URL } from "../../utils/constants";

export function useGetGame(gameId, setGameData) {
  const {
    isLoading: isGameLoading,
    isError: isGameError,
    data: gameInfo,
    error: gameError,
    refetch,
  } = useQuery(
    ["game", gameId],
    async () => {
      const response = await axios.get(`${BASE_API_URL}/api/games/${gameId}`);
      const data = await response.data;
      setGameData({
        name: data.name,
        description: data.description,
        publisher: data.publisher,
        category: data.category,
        _id: data._id,
      });
      return data;
    },
    { staleTime: 0, enabled: false }
  );

  useEffect(() => {
    if (gameId !== null) {
      refetch(); // Trigger a data fetch when selectedItemId changes
    }
  }, [gameId, refetch]);

  return {
    isGameLoading,
    gameInfo,
    refetch,
    isGameError,
    gameError,
  };
}
