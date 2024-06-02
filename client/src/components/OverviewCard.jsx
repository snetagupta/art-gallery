import React from "react";

const OverviewCard = ({ heading, text, image, direction }) => {
  return (
    <div className={`flex items-center justify-between gap-10 ${direction} `}>
      <div className="flex-1 pr-40 py-6">
        <h2 className="text-3xl">{heading}</h2>
        <p className="text-lg mt-5">{text}</p>
      </div>
      <div className="flex-1">
        <img className="w-[100%]" src={image} />
      </div>
    </div>
  );
};
export default OverviewCard;
