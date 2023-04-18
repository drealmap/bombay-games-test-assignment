import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { useAllCustomers } from "./use-all-customers";
import { useStat } from "../use-stats";

export function useFilterCustomers() {
  const [customersList, setCustomersList] = useState([]);

  const { customers } = useAllCustomers();
  const { usersAddedLastWeek, usersAddedThisWeek } = useStat();

  useEffect(() => {
    if (customers) {
      console.log(customers);
      setCustomersList(customers);
    }
  }, [customers]);

  function filterItems(arr, query) {
    return arr.filter((el) =>
      el.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  function filterLowerScore(arr, query) {
    return arr.filter((el) => el.high_score < query);
  }
  function filterHigherScore(arr, query) {
    return arr.filter((el) => el.high_score > query);
  }

  const filterCustomerDate = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setCustomersList(customers);
    }
    if (e.target.value === "lastWeek") {
      setCustomersList(usersAddedLastWeek);
      if (usersAddedLastWeek.length === 0) {
        toast.error("No result found");
      }
    }
    if (e.target.value === "thisWeek") {
      setCustomersList(usersAddedThisWeek);
      if (usersAddedThisWeek.length === 0) {
        toast.error("No result found");
      }
    }
  };

  const handleFilterHighScore = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setCustomersList(customers);
    }
    if (e.target.value === "<") {
      setCustomersList(filterLowerScore(customers, 5000));
      if (filterLowerScore(customers, 5000).length === 0) {
        toast.error("No result found");
      }
    }
    if (e.target.value === ">") {
      setCustomersList(filterHigherScore(customers, 5000));
      if (filterHigherScore(customers, 5000).length === 0) {
        toast.error("No result found");
      }
    }
  };

  const handleCustomerSearch = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setCustomersList(customers);
    }
    if (e.target.value !== "") {
      setCustomersList(filterItems(customers, e.target.value));
      if (filterItems(customersList, e.target.value).length === 0) {
        toast.error("No result found");
      }
    }
  };
  return {
    handleCustomerSearch,
    customersList,
    filterCustomerDate,
    handleFilterHighScore,
  };
}
