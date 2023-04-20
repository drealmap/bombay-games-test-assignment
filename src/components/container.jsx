import React, { useEffect, useState } from "react";
import right from "../assets/right.svg";
import { TabComponent } from "./tab/tabs";
import { Funhub, CardsDisplay } from "./others";

export const Container = () => {
  return (
    <div className=" overflow-x-hidden bg-[#FAFBFC] h-full min-h-screen p-6 lg:ml-[6vw]">
      <div className="flex font-switzer font-medium text-sm text-[#5F6D7E] items-center">
        Home
        <img src={right} alt="" />
        <span className=" text-[#D71E0E] -tracking-[0.1px] ">Dashboard</span>
      </div>

      <div className="flex flex-col gap-10 mt-7">
        <Funhub />
        <CardsDisplay />
        <TabComponent />
      </div>
    </div>
  );
};
