import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { DeleteModal } from "../../delete-modal";
import { useGetCustomer } from "../../../custom-hooks";

export const CustomersTable = ({
  customersList,
  setEdit,
  toggleCustomerModal,
  setCustomerData
}) => {

  const [deleteModal, setDeleteModal] = useState(false)
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const { isCustomerLoading } = useGetCustomer(selectedCustomerId, setCustomerData)

  const toggleCustomerDelete = () => {
    setDeleteModal(!deleteModal);
  };

  const prePopulate = (id) => {
    setSelectedCustomerId(id)
  }

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
              toggleCustomerDelete();
            }}
            className="text-2xl"
            style={{ color: "red", cursor: "pointer" }}
          />
          {deleteModal ? (
            <DeleteModal
              toggleCustomerDelete={toggleCustomerDelete}
              _id={_id}
            />
          ) : null}
        </div>
      </div>
    );
  });
};
