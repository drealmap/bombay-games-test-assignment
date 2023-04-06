import React, { useEffect, useState } from "react";
import right from "../assets/right.svg";
import candle from "../assets/candle.svg";
import down from "../assets/arrow-down.svg";
import BasicCard from "./basic-card.jsx";
import { TabComponent } from "./tab/tabs";
import { Board } from "./board";
import { Customers } from "./customers";
// import { TradeLog } from "./trade-log";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { VictoryPie } from "victory";
import { MdOutlineArrowUpward } from "react-icons/md";
import { MidSpinner } from "./loader";
import { BASE_API_URL } from "../utils/constants";

export const Container = () => {
  const [customersList, setCustomersList] = useState([]);
  const [gamesList, setGamesList] = useState([]);
  const [customersByDate, setCustomersByDate] = useState(false);
  const [newUsersThisWeek, setNewUsersThisWeek] = useState(0);

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
  });
  const {
    isLoading: isGamesLoading,
    isError: isGamesError,
    data: games,
    error: gamesError,
  } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_API_URL}/api/games`);
      const data = await response.data;
      return data;
    },
  });

  function filterItems(arr, query) {
    return arr.filter((el) =>
      el.name.toLowerCase().includes(query.toLowerCase())
    );
  }

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

  useEffect(() => {
    if (customers) {
      console.log(customers);
      setCustomersList(customers);
    }
  }, [customers]);

  useEffect(() => {
    if (games) {
      setGamesList(games);
    }
  }, [games]);

  useEffect(() => {
    async function fetchUserData() {
      const users = customers;
      const today = new Date();
      const weekStart = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - today.getDay()
      );

      const newUsersThisWeek = users?.filter((user) => {
        const userDate = new Date(user.date);
        return userDate >= weekStart && userDate <= today;
      });

      setNewUsersThisWeek(newUsersThisWeek?.length);
    }

    fetchUserData();
  }, [customers, customersList]);

  return (
    <div className=" overflow-x-hidden bg-[#FAFBFC] h-full min-h-screen p-6 lg:ml-[6vw]">
      <div className="flex font-switzer font-medium text-sm text-[#5F6D7E] items-center">
        Home
        <img src={right} alt="" />
        <span className=" text-[#D71E0E] -tracking-[0.1px] ">Dashboard</span>
      </div>

      <div className="flex flex-col gap-10 mt-7">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1 font-switzer">
            <h2 className=" font-semibold text-[28px] leading-[38px] -tracking-[0.01em] text-[#1F1F1F] ">
              FunHub
            </h2>
            <p className=" text-sm sm:text-base font-normal text-[#5F6D7E] ">
              Welcome to the admin panel of FunHub
            </p>
          </div>
        </div>
        <VictoryPie
          data={[
            { x: "Cats", y: 35 },
            { x: "Dogs", y: 40 },
            { x: "Birds", y: 55 },
          ]}
          width={350}
          height={200}
          animate={{
            duration: 2000,
          }}
        />

        <h2 className="text-base font-bold text-center sm:text-lg">
          Game Category by Popularity
        </h2>

        {isCustomersLoading ? (
          <MidSpinner />
        ) : (
          <div className="flex flex-col gap-4 mt-3 sm:mt-5 lg:flex-row font-switzer ">
            <BasicCard
              newUsersThisWeek={newUsersThisWeek}
              customers={customersList}
            />
            <BasicCard
              newUsersThisWeek={newUsersThisWeek}
              customers={customers}
            />
          </div>
        )}

        <TabComponent
          customers={customersList}
          isCustomersLoading={isCustomersLoading}
          numberOfCustomers={customersList?.length}
          numberOfGames={gamesList.length}
          games={gamesList}
          handleCustomerSearch={handleCustomerSearch}
        />
      </div>

      {/* <div className="mb-40 ">
        <TradeLog boardType="Trade Logs" />
      </div> */}
    </div>
  );
};
