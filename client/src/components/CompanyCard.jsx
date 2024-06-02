import React from "react";

const CompanyCard = ({ title, companies, footer }) => {
  return (
    <div className="">
      <p className=" text-center mb-10 text-gray-500">{title}</p>
      <div className="grid grid-cols-5 gap-20">
        {companies.map((company, index) => (
          <img key={index} src={company} alt="company" className="h-[50px]" />
        ))}
      </div>
      <p className=" text-center text-sm mt-10 text-gray-500">{footer}</p>
    </div>
  );
};

export default CompanyCard;
