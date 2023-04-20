import React, { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";

import { BASE_API_URL } from "../../utils/constants";

export function useDeleteCustomer(toggleDeleteModal) {
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
        console.log("Deleted")
      },
    }
  );

  useEffect(() => {
    if (data) {
      toast.success("Customer deleted successfully");
      queryClient.invalidateQueries("customers");
      toggleDeleteModal()
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
