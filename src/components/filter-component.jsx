import { MdArrowDropDown } from "react-icons/md";

export const SelectField = ({ label, phone, children, ...rest }) => {
    return (
      <div className="flex flex-col w-full sm:max-w-[10rem] p-0 gap-y-1">
        {label ? (
          <label
            htmlFor={rest.id}
            className="text-base leading-7 lg:leading-6 font-switzer"
          >
            {label}
          </label>
        ) : null}
        <div className="relative">
          <select
            {...rest}
            className=" appearance-none sm:py-1  rounded-lg font-switzer text-xs md:text-sm leading-6 border border-[#E6E7E9] px-4 outline-none w-full"
          >
            {children}
          </select>
          <div className="absolute top-0 flex items-center h-full w-max right-3">
            <MdArrowDropDown />
          </div>
        </div>
      </div>
    );
  };