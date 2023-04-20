import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


import { Customers } from "../customers";
import { Games } from "../games";
import { AddCustomerModal } from "../add-customer-modal";
import { AddGameModal } from "../add-game-modal";
import { MidSpinner } from "../others";
import { useAllCustomers, useAllGames } from "../../custom-hooks";

export const TabComponent = () => {
  const [firstTabActive, setFirstTabActive] = useState(true);
  const [customerModal, setCustomerModal] = useState(false);
  const [gameModal, setGameModal] = useState(false);
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    address: "",
    highScore: 0,
    language: "English",
    music: true,
    sound: true,
    _id: "",
  });
  const [gameData, setGameData] = useState({
    name: "",
    description: "",
    publisher: "",
    category: "Arcade",
    _id: "",
  });
  const [edit, setEdit] = useState(false);

  const { customers, isCustomersLoading } = useAllCustomers()
  const { games, isGamesLoading } = useAllGames()

  const toggleCustomerModal = () => {
    if (customerModal === false) {
      setCustomerModal(true);
    } else {
      setCustomerModal(false);
      setCustomerData({
        name: "",
        email: "",
        address: "",
        highScore: 0,
        language: "English",
        music: true,
        sound: true,
      });
    }
  };


  const toggleGameModal = () => {
    if (gameModal === false) {
      setGameModal(true);
    } else {
      setGameModal(false);
      setGameData({
        name: "",
        description: "",
        publisher: "",
        category: "Arcade",
        _id: "",
      });
    }
  };


  return (
    <div>
      <Tabs className=" text-[15px] leading-[22px] text-[#5F6D7E] font-switzer font-medium -tracking-[0.1px] ">
        <TabList
          className="flex gap-6 mb-8 border-b border-gray-200 dark:border-gray-700"
          aria-label="Tabs"
          role="tablist"
        >
          <Tab
            className={`${
              firstTabActive
                ? "text-[#D71E0E] border-b text-sm border-[#D71E0E] font-semibold"
                : "border-transparent"
            } cursor-pointer outline-none pb-4 gap-2 px-1 inline-flex items-center border-b whitespace-nowrap hover:text-[#D71E0E]`}
            role="tab"
            id="tab1"
            onClick={() => setFirstTabActive(true)}
          >
            Customers{" "}
            <span
              className={`${
                firstTabActive
                  ? "text-red-600 border-b bg-red-100 dark:text-white text-sm"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
              }  ml-1 py-0.5 px-1.5 rounded-full text-xs font-medium  `}
            >
              {customers?.length}
            </span>
          </Tab>
          <Tab
            type="button"
            className={`${
              firstTabActive
                ? "border-transparent"
                : "text-[#D71E0E] border-b text-sm border-[#D71E0E] font-semibold"
            } cursor-pointer outline-none pb-4 gap-2 px-1 inline-flex items-center border-b whitespace-nowrap hover:text-[#D71E0E]`}
            id="tab2"
            role="tab"
            onClick={() => setFirstTabActive(false)}
          >
            Games{" "}
            <span
              className={`${
                firstTabActive
                  ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 "
                  : "text-red-600 border-b bg-red-100 dark:text-white text-sm"
              }  ml-1 py-0.5 px-1.5 rounded-full text-xs font-medium  `}
            >
              {games?.length}
            </span>
          </Tab>
        </TabList>
        <TabPanel>
          {isCustomersLoading ? (
            <MidSpinner />
          ) : (
            <Customers
              toggleCustomerModal={toggleCustomerModal}
              setEdit={setEdit}
              setCustomerData={setCustomerData}
            />
          )}

          {customerModal ? (
            <AddCustomerModal
              toggleModal={toggleCustomerModal}
              customerData={customerData}
              setCustomerData={setCustomerData}
              edit={edit}
            />
          ) : null}
        </TabPanel>
        <TabPanel>
          <Games
            toggleGameModal={toggleGameModal}
            setEdit={setEdit}
            setGameData={setGameData}
          />
          {gameModal ? (
            <AddGameModal
              toggleModal={toggleGameModal}        
              gameData={gameData}
              setGameData={setGameData}
              edit={edit}
            />
          ) : null}
        </TabPanel>
      </Tabs>
    </div>
  );
};
