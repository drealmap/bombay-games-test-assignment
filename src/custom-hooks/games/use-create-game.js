import React, {useEffect} from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";

import { BASE_API_URL } from "../../utils/constants";


export function useCreateGame(toggleGameModal) {

  const queryClient = useQueryClient()

  const 
    {
      isLoading: isCreateGameLoading,
      isError: isCreateGameError,
      error: createGameError,
      isSuccess: createGameSuccess,
      data,
      mutate
    }
  = useMutation({
    mutationFn: async (gameData) => {
      const response = await axios.post(
        `${BASE_API_URL}/api/games`,
        gameData
      );
      const data = await response.data;
  
      return data;
    },
  });

  useEffect(() => {
    if (data) {
        toast.success("Game added successfuly")
        queryClient.invalidateQueries("games");
        toggleGameModal()
    }
    if (createGameError) {
        toast.error(createGameError.message)
    }
  }, [data, createGameError]);

  return {
    isCreateGameLoading,
    mutate,
    createGameSuccess,
    isCreateGameError,
    createGameError,
  };
}
