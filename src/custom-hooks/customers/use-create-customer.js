import React, {useEffect} from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { BASE_API_URL } from "../../utils/constants";
import { toast } from "react-hot-toast";

export function useCreateCustomer() {
  const 
    {
      isLoading: isCreateCustomerLoading,
      isError: isCreateCustomerError,
      error: createCustomerError,
      isSuccess: createCustomerSuccess,
      data,
      mutate
    }
  = useMutation({
    mutationKey: ["customers"],
    mutationFn: async (customerData) => {
      const response = await axios.post(
        `${BASE_API_URL}/api/users`,
        customerData
      );
      const data = await response.data;
  
      return data;
    },
  });

  useEffect(() => {
    if (data) {
        toast.success("Customer added successfuly")
        setTimeout(window.location.reload(), 8000);
    }
    if (createCustomerError) {
        toast.error(createCustomerError.message)
    }
  }, [data, createCustomerError]);

  return {
    isCreateCustomerLoading,
    mutate,
    createCustomerSuccess,
    isCreateCustomerError,
    createCustomerError,
  };
}
