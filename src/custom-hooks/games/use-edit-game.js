import React, {useEffect} from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";

import { BASE_API_URL } from "../../utils/constants";


export function useEditGame(toggleGameModal, gameData) {

  const queryClient = useQueryClient()

  const 
    {
      isLoading: isEditGameLoading,
      isError: isEditGameError,
      error: editGameError,
      data,
      mutate: editGame
    }
  = useMutation({
    mutationFn: async (gameId) => {
      const response = await axios.put(
        `${BASE_API_URL}/api/games/${gameId}`,
        gameData
      );
      const data = await response.data;
  
      return data;
    },
  });

  useEffect(() => {
    if (data) {
        toast.success("Game details saved");
        queryClient.invalidateQueries("games");
        toggleGameModal()
    }
    if (editGameError) {
        toast.error(editGameError.message)
    }
  }, [data, editGameError]);

  return {
    isEditGameLoading,
    editGame,
  };
}
