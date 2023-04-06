import React from "react";


export const Board = ({ orderItems, boardType }) => {
  return (
    <div
      style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.04)" }}
      className="flex flex-col gap-2.5 bg-white border border-[#EAEBF0] rounded-[10px]"
    >
      <div className=" py-4 px-6 isolate ">
        <h6 className=" font-switzer font-semibold text-lg leading-6 text-[#1F1F1F] ">
          {boardType} Board
        </h6>
      </div>
      <div className=" grid grid-cols-12 border-y border-[#EAEBF0] ">
        <div className=" col-span-4 py-3 px-6 font-switzer ">
          <p className="  text-sm leading-[18px] text-[#5F6D7E] ">Name</p>
        </div>
        <div className=" col-span-3 py-3 px-6 font-switzer ">
          <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Quantity</p>
        </div>
        <div className=" col-span-3 py-3 px-6 font-switzer ">
          <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Price</p>
        </div>
        <div className=" col-span-2 py-3 px-6 font-switzer ">
          <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Action</p>
        </div>
      </div>

      {orderItems?.map((order, index) => {
        return (
          <div
            key={order.id}
            className="grid grid-cols-12 border-y border-[#EAEBF0] "
          >
            <div className=" col-span-4 py-3 px-6 font-switzer ">
              <p className="  text-sm leading-[18px] text-[#5F6D7E] ">
                Product
              </p>
            </div>
            <div className=" col-span-3 py-3 px-6 font-switzer ">
              <p className=" text-sm leading-[18px] text-[#5F6D7E] ">
                Quantity
              </p>
            </div>
            <div className=" col-span-3 py-3 px-6 font-switzer ">
              <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Price</p>
            </div>
            <div className=" col-span-2 py-3 px-6 font-switzer ">
              <p className=" text-sm leading-[18px] text-[#5F6D7E] ">Action</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};