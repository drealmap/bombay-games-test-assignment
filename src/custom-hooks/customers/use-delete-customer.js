import React, { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";

import { BASE_API_URL } from "../../utils/constants";

export function useDeleteCustomer() {
  const queryClient = useQueryClient();

  const {
    isLoading: isDeleteCustomerLoading,
    error: deleteCustomerError,
    data,
    mutate,
  } = useMutation(
    {
      mutationFn: async (id) => {
        const response = await axios.delete(`${BASE_API_URL}/api/users/${id}`);
        const data = await response.data;

        return data;
      },
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("customers");
      },
    }
  );

  useEffect(() => {
    if (data) {
      toast.success("Customer deleted successfully");
      setTimeout(window.location.reload(), 12000);
    }
    if (deleteCustomerError) {
      toast.error(deleteCustomerError.message);
    }
  }, [data, deleteCustomerError]);

  return {
    mutate,
    isDeleteCustomerLoading,
  };
}
