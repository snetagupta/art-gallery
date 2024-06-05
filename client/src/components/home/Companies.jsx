import React from "react";
import CompanyCard from "./CompanyCard";
import company1 from "../../assets/companies/company1.png";
import company2 from "../../assets/companies/company2.png";
import company3 from "../../assets/companies/company3.png";
import company4 from "../../assets/companies/company4.png";
import company5 from "../../assets/companies/company5.png";
import company6 from "../../assets/companies/company6.png";
import company7 from "../../assets/companies/company7.png";
import company8 from "../../assets/companies/company8.png";
import company9 from "../../assets/companies/company9.png";
import company10 from "../../assets/companies/company10.png";

const Companies = () => {
  const companies = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company7,
    company8,
    company9,
    company10,
  ];
  return (
    <div className="py-8 px-28 flex flex-col justify-center items-center">
      <CompanyCard
        title="TRUSTED BY TEAMS AND DESIGNERS FROM"
        companies={companies}
        footer="And 900,000+ other creatives and teams"
      />
    </div>
  );
};

export default Companies;
