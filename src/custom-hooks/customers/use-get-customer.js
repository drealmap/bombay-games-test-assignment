import React, {useEffect} from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { BASE_API_URL } from "../../utils/constants";

export function useGetCustomer(userId, setCustomerData) {
    const {
      isLoading: isCustomerLoading,
      isError: isCustomerError,
      data: customerInfo,
      error: customerError,
      refetch,
    } = useQuery(
      ["customer", userId],
      async () => {
        const response = await axios.get(`${BASE_API_URL}/api/users/${userId}`);
        const data = await response.data;
        setCustomerData({
          name: data.name,
          email: data.email,
          address: data.address,
          highScore: data.high_score,
          language: data.settings.language,
          music: data.settings.music_enabled === false ? "False" : "True",
          sound: data.settings.sound_enabled === false ? "False" : "True",
          _id: data._id,
        });
        return data;
      },
      { staleTime: 0, enabled: false }
    );
  
    useEffect(() => {
      if (userId !== null) {
        refetch(); // Trigger a data fetch when selectedItemId changes
      }
    }, [userId, refetch]);
  
    return {
      isCustomerLoading,
      customerInfo,
      refetch,
      isCustomerError,
      customerError,
    };
  }
  