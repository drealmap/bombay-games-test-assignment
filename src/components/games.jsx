import React from "react";
import moment from "moment/moment";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";

export const Games = ({ allGames }) => {
  return (
    <div
      style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.04)" }}
      className="flex flex-col bg-white border border-[#EAEBF0] rounded-[10px]"
    >
      <div className="px-6 py-4 ">
        <h6 className=" font-switzer font-semibold text-lg leading-6 text-[#1F1F1F] ">
          Games Data
        </h6>
      </div>
      <div className=" grid grid-cols-12 font-switzer py-3 border-y border-[#EAEBF0] ">
        <div className="col-span-3 px-6 ">
          <p className="  text-sm leading-[18px] text-[#5F6D7E] ">Name</p>
        </div>
        <div className="col-span-3 px-6 ">
          <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Game Category</p>
        </div>
        <div className="col-span-2 px-6 ">
          <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Publisher</p>
        </div>
        <div className="col-span-3 px-6 ">
          <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Creation Date</p>
        </div>
      </div>

      {allGames?.map(({ name, category, publisher, releaseDate, _id }) => {
        return (
          <div
            key={_id}
            className="grid grid-cols-12 border-y border-[#EAEBF0] "
          >
            <div className="col-span-3 px-6 py-3 font-switzer">
              <p className="  text-sm leading-[18px] text-[#5F6D7E] ">{name}</p>
            </div>
            <div className="col-span-3 px-6 py-3 font-switzer">
              <p className=" text-sm leading-[18px] text-[#5F6D7E] ">{category}</p>
            </div>
            <div className="col-span-2 px-6 py-3 font-switzer">
              <p className=" text-sm leading-[18px] text-[#5F6D7E] ">
                {publisher}
              </p>
            </div>
            <div className="col-span-3 px-6 py-3 font-switzer">
              <p className=" text-sm leading-[18px] text-[#5F6D7E] ">
                {moment(releaseDate).format("LL")}
              </p>
            </div>
            <div className="flex col-span-1 gap-2 py-3 ">
              <AiOutlineEdit />
              <MdDelete />
            </div>
          </div>
        );
      })}
    </div>
  );
};
