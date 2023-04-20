import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { MidSpinner } from "./others";
import { useCreateCustomer, useEditCustomer } from "../custom-hooks";

export const AddCustomerModal = ({
  toggleModal,
  edit,
  customerData,
  setCustomerData,
}) => {
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
  const { mutate, isCreateCustomerLoading } = useCreateCustomer(toggleModal);
  const { editCustomer, isEditCustomerLoading } = useEditCustomer(
    toggleModal,
    user
  );

  const handleAddCustomer = () => {
    mutate(user);
    
  };

  const handleEditCustomer = (userId) => {
    editCustomer(userId);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen ">
      {isEditCustomerLoading || isCreateCustomerLoading ? (
        <MidSpinner />
      ) : (
        <>
          {" "}
          <div
            onClick={toggleModal}
            className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 bg-[#313131] bg-opacity-80"
          ></div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] overflow-auto h-[80vh] lg:h-full -translate-y-[50%] w-[90vw] max-w-md">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                edit ? handleEditCustomer(customerData._id) : handleAddCustomer();
              }}
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
            >
              <h2 className="mb-5 text-lg">
                {edit ? "Edit Customer's Details" : "Add A New Customer"}
              </h2>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="John Doe"
                  required
                  value={customerData.name}
                  onChange={({ target: { value } }) =>
                    setCustomerData({ ...customerData, name: value })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="user@example.com"
                  required
                  value={customerData.email}
                  onChange={({ target: { value } }) =>
                    setCustomerData({ ...customerData, email: value })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="address"
                >
                  Address
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  placeholder="Talinn, Estonia"
                  required
                  value={customerData.address}
                  onChange={({ target: { value } }) =>
                    setCustomerData({ ...customerData, address: value })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="high-score"
                >
                  High Score
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="high-score"
                  type="number"
                  placeholder="2061"
                  required
                  value={customerData.highScore}
                  onChange={({ target: { value } }) =>
                    setCustomerData({
                      ...customerData,
                      highScore: parseInt(value),
                    })
                  }
                />
              </div>

              <div
                className="block mb-4 text-sm font-bold text-gray-700"
                for="email"
              >
                User Settings
              </div>

              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    for="grid-state"
                  >
                    Language
                  </label>
                  <div className="relative">
                    <select
                      className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      value={customerData.language}
                      onChange={({ target: { value } }) =>
                        setCustomerData({ ...customerData, language: value })
                      }
                    >
                      <option>English</option>
                      <option>French</option>
                      <option>Spanish</option>
                      <option>Portuguese</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                      <AiOutlineDown size={"0.7rem"} />
                    </div>
                  </div>
                </div>
                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    for="grid-state"
                  >
                    Music On
                  </label>
                  <div className="relative">
                    <select
                      className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      value={customerData.music}
                      onChange={({ target: { value } }) =>
                        setCustomerData({ ...customerData, music: value })
                      }
                    >
                      <option>True</option>
                      <option>False</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                      <AiOutlineDown size={"0.7rem"} />
                    </div>
                  </div>
                </div>
                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    for="grid-state"
                  >
                    Sound On
                  </label>
                  <div className="relative">
                    <select
                      className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      value={customerData.sound}
                      onChange={({ target: { value } }) =>
                        setCustomerData({ ...customerData, sound: value })
                      }
                    >
                      <option>True</option>
                      <option>False</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                      <AiOutlineDown size={"0.7rem"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  {edit ? "Save" : "Add Customer"}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
