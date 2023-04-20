import React, {useEffect} from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";

import { BASE_API_URL } from "../../utils/constants";


export function useEditCustomer(toggleCustomerModal, customerData) {

  const queryClient = useQueryClient()

  const 
    {
      isLoading: isEditCustomerLoading,
      isError: isEditCustomerError,
      error: editCustomerError,
      isSuccess: editCustomerSuccess,
      data,
      mutate: editCustomer
    }
  = useMutation({
    mutationFn: async (userId) => {
      const response = await axios.put(
        `${BASE_API_URL}/api/users/${userId}`,
        customerData
      );
      const data = await response.data;
  
      return data;
    },
  });

  useEffect(() => {
    if (data) {
        toast.success("User details saved");
        queryClient.invalidateQueries("customers");
        toggleCustomerModal()
    }
    if (editCustomerError) {
        toast.error(editCustomerError.message)
    }
  }, [data, editCustomerError]);

  return {
    isEditCustomerLoading,
    editCustomer,
  };
}
