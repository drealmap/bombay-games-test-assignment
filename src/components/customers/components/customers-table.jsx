import React from "react";
import moment from "moment/moment";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";

export const CustomersTable = ({
  customersList,
  setEdit,
  prePopulate,
  toggleCustomerModal,
  toggleCustomerDelete
}) => {
  // customersList?.map(({ name, email, address, date, _id }) => {
  return customersList?.map(({ name, email, address, date, _id }) => {
    return (
      <div
        key={_id}
        className="grid grid-cols-12 border-y text-xs md:text-sm leading-[18px] text-[#5F6D7E] border-[#EAEBF0]"
      >
        <div className="col-span-3 px-3 py-3 md:px-6 font-switzer">
          <p className="">{name}</p>
        </div>
        <div className="col-span-3 px-3 py-3 truncate md:px-6 font-switzer">
          <p className="">{email}</p>
        </div>
        <div className="col-span-2 px-3 py-3 truncate md:px-6 font-switzer">
          <p className="">{address}</p>
        </div>
        <div className="col-span-3 px-3 py-3 md:px-6 font-switzer">
          <p className="">{moment(date).format("LL")}</p>
        </div>
        <div className="flex col-span-1 gap-1 py-3 sm:gap-2 ">
          <AiOutlineEdit
            onClick={() => {
              setEdit(true);
              prePopulate(_id);
              toggleCustomerModal();
            }}
            className="text-2xl cursor-pointer "
            style={{ color: "blue" }}
          />
          <MdDelete
            onClick={() => {
              setEdit(true);
              prePopulate(_id);
              toggleCustomerDelete();
            }}
            className="text-2xl"
            style={{ color: "red", cursor: "pointer" }}
          />
        </div>
      </div>
    );
  });
};
