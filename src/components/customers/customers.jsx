import React, { useState, useEffect } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

import { CustomerFilters, CustomersTable } from "./components";
import { useFilterCustomers } from "../../custom-hooks";

export const Customers = ({
  toggleCustomerModal,
  setEdit,
  setCustomerData
}) => {
  const {
    customersList,
    handleCustomerSearch,
    handleFilterHighScore,
    filterCustomerDate,
  } = useFilterCustomers();

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
        toggleCustomerModal={toggleCustomerModal}
        setCustomerData={setCustomerData}
      />
    </div>
  );
};
