import React, { useRef, useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const Dropdown = ({ title, options }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center font-[500] text-gray-500 cursor-pointer hover:bg-gray-100 p-1 rounded-md"
        onClick={handleClick}
      >
        <p>{title}</p>
        <MdKeyboardArrowDown className="size-5" />
      </div>
      {open && (
        <div className="absolute flex flex-col w-[400px] px-3 py-2 gap-1 mt-2 rounded-md shadow-md bg-white">
          {options.map((option) => (
            <div
              key={option}
              className="py-2 px-2 hover:bg-gray-100 text-[17px] cursor-pointer flex justify-between items-center"
            >
              <p>{option}</p>
              <IoIosArrowForward className="size-4 text-gray-500" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
