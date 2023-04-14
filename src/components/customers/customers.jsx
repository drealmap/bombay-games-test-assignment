import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineUserAdd } from "react-icons/ai";

import { CustomerFilters, CustomersTable } from "./components";
import { useAllCustomers, useStat } from "../../custom-hooks";

export const Customers = ({
  toggleCustomerModal,
  prePopulate,
  setEdit,
  toggleCustomerDelete,
}) => {
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

  return (
    <div
      style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.04)" }}
      className="flex flex-col bg-white border border-[#EAEBF0] rounded-[10px]"
    >
      <div className="flex justify-between px-6 py-4 ">
        <h6 className=" font-switzer font-semibold sm:text-lg leading-6 text-[#1F1F1F] ">
          Customers Data
        </h6>
        <button
          onClick={() => {
            setEdit(false);
            toggleCustomerModal();
          }}
          className="inline-flex items-center px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-md outline-none sm:text-sm hover:bg-blue-800 active:bg-gray-400"
        >
          <AiOutlineUserAdd
            className="mr-2 text-base font-bold sm:text-xl"
            color="white"
          />
          <span>Add Customer</span>
        </button>
      </div>
      <CustomerFilters
        handleCustomerSearch={handleCustomerSearch}
        filterCustomerDate={filterCustomerDate}
        handleFilterHighScore={handleFilterHighScore}
      />
      <div className=" grid grid-cols-12 text-xs md:text-sm font-switzer leading-[18px] text-[#5F6D7E] py-3 border-y border-[#EAEBF0] ">
        <div className="col-span-3 px-3 md:px-6 ">
          <p className="">Name</p>
        </div>
        <div className="col-span-3 px-3 md:px-6 ">
          <p className="">Email</p>
        </div>
        <div className="col-span-2 px-3 md:px-6 ">
          <p className="">Address</p>
        </div>
        <div className="col-span-3 px-3 md:px-6 ">
          <p className="">Date joined</p>
        </div>
      </div>

      <CustomersTable
        customersList={customersList}
        setEdit={setEdit}
        prePopulate={prePopulate}
        toggleCustomerModal={toggleCustomerModal}
        toggleCustomerDelete={toggleCustomerDelete}
      />
    </div>
  );
};
