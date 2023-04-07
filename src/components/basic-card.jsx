import React from "react";
import { MdOutlineArrowUpward } from "react-icons/md";

export default function BasicCard({ newUsersThisWeek, customers, str }) {
  return (
    <div className="flex items-center justify-between w-full px-4 py-8 bg-white rounded-lg lg:w-64 ">
      <div className="flex flex-col gap-2.5">
        <div className=" font-switzer font-bold text-[28px] leading-8 ">
          {newUsersThisWeek}
        </div>
        <div className="text-sm text-black opacity-50 lg:text-base font-switzer">
          New {str} Added This Week
        </div>
      </div>
      <div className="flex gap-1 p-1 bg-[#27AE60] rounded-sm bg-opacity-10">
        <MdOutlineArrowUpward color="#219653" />
        <p className="text-[#219653] font-grotesk">
          {parseInt((newUsersThisWeek / customers?.length) * 100)}%
        </p>
      </div>
    </div>
  );
}
