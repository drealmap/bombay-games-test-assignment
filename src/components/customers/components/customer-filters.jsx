import React from "react";
import { SelectField } from "../../filter-component";
import { MdSearch } from "react-icons/md";

export const CustomerFilters = ({handleCustomerSearch, filterCustomerDate, handleFilterHighScore}) => {
  return (
    <div className="flex flex-col justify-between gap-2 mx-4 my-2 text-xs sm:flex-row md:text-sm">
      <div className="bg-[#FFFFFF] border rounded-lg flex items-center pl-3">
        <MdSearch />
        <input
          type="text"
          id="filter"
          onChange={handleCustomerSearch}
          className="px-2 py-1 text-xs font-medium rounded-lg outline-none md:text-sm "
          placeholder="Type to search"
        />
      </div>
      <SelectField onChange={filterCustomerDate}>
        <option value="" selected>
          Filter by date
        </option>
        <option value={"lastWeek"}>Last week</option>
        <option value={"thisWeek"}>This week</option>
      </SelectField>

      <SelectField onChange={handleFilterHighScore}>
        <option value="" selected>
          Filter by high score range
        </option>
        <option value="<">Below 5000</option>
        <option value=">">Above 5000</option>
      </SelectField>
    </div>
  );
};
