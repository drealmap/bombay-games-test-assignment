import React from "react";
import { useDeleteCustomer } from "../custom-hooks";

export const DeleteModal = ({ toggleCustomerDelete, _id, }) => {

  const { mutate } = useDeleteCustomer(toggleCustomerDelete)

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen ">
      <div
        onClick={toggleCustomerDelete}
        className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 bg-[#313131] bg-opacity-80"
      ></div>
      <div className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-md">
        <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <h2 className="mb-10">Are you sure you want to delete this customer?</h2>

          <div className="flex justify-between ">
            <button
              className="px-4 py-2 font-bold text-white bg-red-400 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => mutate(_id)}
            >
              Yes, Delete
            </button>
            <button
              className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={toggleCustomerDelete}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
