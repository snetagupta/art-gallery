import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const Dropdown = ({ title, options }) => {
  const [open, setOpen] = React.useState(false);
  //   const options = [1, 2, 3, 4, 5];

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="relative">
      <div
        className="flex items-center gap-1 font-bold text-gray-500 cursor-pointer"
        onClick={handleClick}
      >
        <p>{title}</p>
        <MdKeyboardArrowDown className=" size-5" />
      </div>
      {open && (
        <div className="absolute flex flex-col w-[400px] px-3 py-2 gap-1 mt-2 rounded-md shadow-md">
          {options.map((option) => (
            <div className="py-2 px-2 hover:bg-gray-100 text-[17px] cursor-pointer flex justify-between items-center">
              <p className="">{option}</p>
              <IoIosArrowForward className="size-4 text-gray-500" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
