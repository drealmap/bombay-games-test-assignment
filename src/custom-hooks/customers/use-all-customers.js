import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { BASE_API_URL } from "../../utils/constants";

export function useAllCustomers() {
  const {
    isLoading: isCustomersLoading,
    isError: isCustomersError,
    data: customers,
    error: customersError,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_API_URL}/api/users`);
      const data = await response.data;
      return data;
    },
  }, {staleTime: 0});

  return { isCustomersLoading, customers, isCustomersError, customersError };
}