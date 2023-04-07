import React from "react";
import moment from "moment/moment";
import { MdDelete, MdSearch } from "react-icons/md";
import { AiOutlineEdit, AiOutlineUserAdd } from "react-icons/ai";
import { SelectField } from "./filter-component";
export const Games = ({
  allGames,
  toggleGameModal,
  prePopulateGame,
  setEdit,
  toggleGameDelete,
  handleGameSearch,
  handleFilterbyCategory,
  filterGameDate,
}) => {
  return (
    <div
      style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.04)" }}
      className="flex flex-col bg-white border border-[#EAEBF0] rounded-[10px]"
    >
      <div className="flex justify-between px-6 py-4">
        <h6 className=" font-switzer font-semibold sm:text-lg leading-6 text-[#1F1F1F] ">
          Games Data
        </h6>
        <button
          onClick={() => {
            setEdit(false);
            toggleGameModal();
          }}
          className="inline-flex items-center px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-md outline-none sm:text-sm hover:bg-blue-800 active:bg-gray-400"
        >
          <AiOutlineUserAdd
            className="mr-2 text-base font-bold sm:text-xl"
            color="white"
          />
          <span>Add a Game</span>
        </button>
      </div>
      <div className="flex flex-col justify-between gap-2 mx-4 my-2 text-xs sm:flex-row md:text-sm">
        <div className="bg-[#FFFFFF] border rounded-lg flex items-center pl-3">
          <MdSearch />
          <input
            type="text"
            id="filter"
            onChange={handleGameSearch}
            className="px-2 py-1 text-xs font-medium rounded-lg outline-none md:text-sm "
            placeholder="Type to search"
          />
        </div>
        <SelectField
          onChange={filterGameDate}
        >
          <option value="" selected>
            Filter by date
          </option>
          <option value="lastWeek">Last week</option>
          <option value="thisWeek">This week</option>
        </SelectField>
        <SelectField onChange={handleFilterbyCategory}>
          <option value="" selected>
            Filter by Category
          </option>
          <option>Arcade </option>
          <option>Action </option>
          <option>Adventure </option>
          <option>Casino</option>
          <option>Racing</option>
          <option>Sports</option>
          <option>Strategy</option>
        </SelectField>
      </div>
      <div className=" grid grid-cols-12 text-xs md:text-sm font-switzer leading-[18px] text-[#5F6D7E] py-3 border-y border-[#EAEBF0] ">
        <div className="col-span-3 px-3 md:px-6 ">
          <p className="">Name</p>
        </div>
        <div className="col-span-3 px-3 md:px-6 ">
          <p className="">Game Category</p>
        </div>
        <div className="col-span-2 px-3 md:px-6 ">
          <p className="">Publisher</p>
        </div>
        <div className="col-span-3 px-3 md:px-6 ">
          <p className="">Creation Date</p>
        </div>
      </div>

      {allGames?.map(({ name, category, publisher, releaseDate, _id }) => {
        return (
          <div
            key={_id}
            className="grid grid-cols-12 border-y text-xs md:text-sm leading-[18px] text-[#5F6D7E] border-[#EAEBF0]"
          >
            <div className="col-span-3 px-3 py-3 md:px-6 font-switzer">
              <p className="">{name}</p>
            </div>
            <div className="col-span-3 px-3 py-3 truncate md:px-6 font-switzer">
              <p className="">{category}</p>
            </div>
            <div className="col-span-2 px-3 py-3 truncate md:px-6 font-switzer">
              <p className="">{publisher}</p>
            </div>
            <div className="col-span-3 px-3 py-3 md:px-6 font-switzer">
              <p className="">{moment(releaseDate).format("LL")}</p>
            </div>
            <div className="flex col-span-1 gap-1 py-3 sm:gap-2 ">
              <AiOutlineEdit
                onClick={() => {
                  setEdit(true);
                  prePopulateGame(_id);
                  toggleGameModal();
                }}
                className="text-2xl cursor-pointer "
                style={{ color: "blue" }}
              />
              <MdDelete
                onClick={() => {
                  setEdit(true);
                  prePopulateGame(_id);
                  toggleGameDelete();
                }}
                className="text-2xl"
                style={{ color: "red", cursor: "pointer" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
