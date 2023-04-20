import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return <TailSpin width={80} height={80} color={"white"} />;
};

export default Loader;

export const ButtonSpinner = ({ blue }) => {
  return <TailSpin width={20} height={20} color={blue ? "#4A7BF3" : "white"} />;
};

export const MidSpinner = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-10">
      <TailSpin width={30} height={30} color={"#4A7BF3"} />
    </div>
  );
};

export const BlurSpinner = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center  fixed bg-black bg-opacity-10 z-[11] top-0 left-0">
      <TailSpin width={40} height={40} color={"#4A7BF3"} />
    </div>
  );
};