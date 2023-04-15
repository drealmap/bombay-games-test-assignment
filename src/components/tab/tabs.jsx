import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { toast } from "react-hot-toast";

import { Customers } from "../customers";
import { Games } from "../games";
import { AddCustomerModal } from "../add-customer-modal";
import { AddGameModal } from "../add-game-modal";
import { DeleteModal } from "../delete-modal";
import { MidSpinner } from "../loader";
import { BASE_API_URL } from "../../utils/constants";
import { DeleteGameModal } from "../delete-game";
import { useAllCustomers } from "../../custom-hooks";

export const TabComponent = ({
  games,
  handleGameSearch,
  numberOfGames,
  handleFilterbyCategory,
  filterGameDate,
}) => {
  const [firstTabActive, setFirstTabActive] = useState(true);
  const [customerModal, setCustomerModal] = useState(false);
  const [gameModal, setGameModal] = useState(false);
  const [deleteCustomerModal, setDeleteCustomerModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteGameModal, setDeleteGameModal] = useState(false);
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

  const prePopulate = async (userId) => {
    if (edit === true) {
      setLoading(true);
      await fetch(`${BASE_API_URL}/api/users/${userId}`, {
        method: "GET",
        // body: JSON.stringify(user),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setCustomerData({
            name: result.name,
            email: result.email,
            address: result.address,
            highScore: result.high_score,
            language: result.settings.language,
            music: result.settings.music_enabled === false ? "False" : "True",
            sound: result.settings.sound_enabled === false ? "False" : "True",
            _id: result._id,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
      setLoading(false);
    }
  };
  const prePopulateGame = async (userId) => {
    if (edit === true) {
      setLoading(true);
      await fetch(`${BASE_API_URL}/api/games/${userId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setGameData({
            name: result.name,
            description: result.description,
            publisher: result.publisher,
            category: result.category,
            _id: result._id,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
      setLoading(false);
    }
  };

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

  const toggleCustomerDelete = () => {
    setDeleteCustomerModal(!deleteCustomerModal);
  };
  const toggleGameDelete = () => {
    setDeleteGameModal(!deleteGameModal);
  };


  const handleAddGame = async (e) => {
    e.preventDefault();

    const user = {
      name: gameData.name,
      publisher: gameData.publisher,
      description: gameData.description,
      category: gameData.category,
    };
    await fetch(`${BASE_API_URL}/api/games`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        toast.success("Game added successfully");
        setTimeout(window.location.reload(), 5000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditCustomer = async (userId) => {
    setLoading(true);
    const user = {
      name: customerData.name,
      email: customerData.email,
      address: customerData.address,
      high_score: customerData.highScore,
      settings: {
        language: customerData.language,
        music_enabled: customerData.music === "False" ? false : true,
        sound_enabled: customerData.sound === "False" ? false : true,
      },
    };
    await fetch(`${BASE_API_URL}/api/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setLoading(false);
        toast.success("User details saved");
        setTimeout(window.location.reload(), 5000);
        toggleCustomerModal();
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditGame = async (userId) => {
    const user = {
      name: gameData.name,
      publisher: gameData.publisher,
      description: gameData.description,
      category: gameData.category,
    };
    await fetch(`${BASE_API_URL}/api/games/${userId}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        toast.success("Game saved successfully");
        setTimeout(window.location.reload(), 5000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCustomerDelete = async (userId) => {
    console.log(userId);
    await fetch(`${BASE_API_URL}/api/users/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        toast.success("User deleted successfully");
        setTimeout(window.location.reload(), 5000);
        toggleCustomerDelete();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGameDelete = async (userId) => {
    await fetch(`${BASE_API_URL}/api/games/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        toast.success("Game deleted successfully");
        setTimeout(window.location.reload(), 4000);
      })
      .catch((error) => {
        console.error(error);
      });
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
              {numberOfGames}
            </span>
          </Tab>
        </TabList>
        <TabPanel>
          {isCustomersLoading ? (
            <MidSpinner />
          ) : (
            <Customers
              toggleCustomerModal={toggleCustomerModal}
              prePopulate={prePopulate}
              setEdit={setEdit}
              toggleCustomerDelete={toggleCustomerDelete}
            />
          )}

          {customerModal ? (
            <AddCustomerModal
              toggleModal={toggleCustomerModal}
              // handleAddCustomer={handleAddCustomer}
              customerData={customerData}
              setCustomerData={setCustomerData}
              handleEditCustomer={handleEditCustomer}
              edit={edit}
              loading={loading}
            />
          ) : null}
          {deleteCustomerModal ? (
            <DeleteModal
              toggleCustomerDelete={toggleCustomerDelete}
              handleDelete={handleCustomerDelete}
              customerData={customerData}
              user={"customer"}
            />
          ) : null}
        </TabPanel>
        <TabPanel>
          <Games
            allGames={games}
            handleGameSearch={handleGameSearch}
            toggleGameModal={toggleGameModal}
            prePopulateGame={prePopulateGame}
            setEdit={setEdit}
            toggleGameDelete={toggleGameDelete}
            handleFilterbyCategory={handleFilterbyCategory}
            filterGameDate={filterGameDate}
          />
          {deleteGameModal ? (
            <DeleteGameModal
              toggleGamedelete={toggleGameDelete}
              handleGameDelete={handleGameDelete}
              gameData={gameData}
            />
          ) : null}
          {gameModal ? (
            <AddGameModal
              toggleModal={toggleGameModal}
              handleAddGame={handleAddGame}
              gameData={gameData}
              setGameData={setGameData}
              handleEditGame={handleEditGame}
              edit={edit}
              loading={loading}
            />
          ) : null}
        </TabPanel>
      </Tabs>
    </div>
  );
};
