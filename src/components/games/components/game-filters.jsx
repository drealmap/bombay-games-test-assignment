import React from "react";
import { MdSearch } from "react-icons/md";
import { SelectField } from "../../others";

export const GameFilters = ({
  handleFilterbyCategory,
  handleGameSearch,
  filterGameDate,
}) => {
  return (
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
      <SelectField onChange={filterGameDate}>
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
  );
};
