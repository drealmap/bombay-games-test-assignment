import React, { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";

import { BASE_API_URL } from "../../utils/constants";

export function useDeleteGame(toggleDeleteModal) {
  const queryClient = useQueryClient();

  const {
    isLoading: isDeleteGameLoading,
    error: deleteGameError,
    data,
    mutate,
  } = useMutation(
    {
      mutationFn: async (id) => {
        const response = await axios.delete(`${BASE_API_URL}/api/games/${id}`);
        const data = await response.data;
        return data;
      },
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("games");
      },
    }
  );

  useEffect(() => {
    if (data) {
      toast.success("Game deleted successfully");
      queryClient.invalidateQueries("games");
      toggleDeleteModal()
    }
    if (deleteGameError) {
      toast.error(deleteGameError.message);
    }
  }, [data, deleteGameError]);

  return {
    mutate,
    isDeleteGameLoading,
  };
}
