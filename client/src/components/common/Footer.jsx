import React from "react";
import logo from "../../assets/logo.png";
import { PiCopyrightLight,PiInstagramLogoLight,PiLinkedinLogoLight,PiTwitterLogoFill } from "react-icons/pi";

const Footer = () => {
  const products = [
    "Overview",
    "Pricing",
    "Features",
    "Beta program",
    "Students",
    "Professional freelancers",
    "Design teams",
    "Creative project management",
    "AI art & prompt storage",
    "Collaboration & editing",
    "Smarter storage",
    "Creative licenses",
    "Professional handoff",
    "Large file sharing",
  ];
  const communities = [
    "#PortfolioMonth",
    "Playbook Licensed Artists Program",
    "Past Competitions",
    "Joyce Müller",
    "Vicky Hughes",
    "Meg Lewis",
    "Andrew Nye",
    "Jacopo Oliveri",
    "Evan Weselmann",
    "Jarom Vogel",
    "Anna Rupprecht",
    "Paola Saliby",
    "Janice Chang",
    "Rafael Varona",
    "Gustaf Ö Hjalmars",
    "Helen Li",
  ];
  const resources = [
    "Download Chrome Extension",
    "Protecting Artist Privacy",
    "Artist Interviews",
    "Tutorials",
    "The story of Playbook",
    "Case studies",
    "Playbook FAQs",
    "All topics",
  ];
  const templates = [
    "Playbook Classic 1",
    "Playbook Classic 2",
    "Playbook Standard 1",
    "Playbook Standard 2",
    "Playbook Showcase",
    "Playbook Gallery 1",
    "Playbook Gallery 2",
  ];
  const companies = ["Our Team", "Partner with us"];
  return (
    <>
    <div className="py-8 px-28 flex items-start justify-between gap-5 text-sm">
      <img className="w-[100px]" src={logo} />
     
      <div className="">
        <p className="font-semibold text-gray-700 mb-3">Product</p>
        <div className="text-gray-500 flex flex-col gap-3">
          {products.map((product, index) => (
            <p key={index}>{product}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="font-semibold text-gray-700 mb-3">Community</p>
        <div className="text-gray-500 flex flex-col gap-3">
          {communities.map((community, index) => (
            <p key={index}>{community}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="font-semibold text-gray-700 mb-3">Resources</p>
        <div className="text-gray-500 flex flex-col gap-3">
          {resources.map((resource, index) => (
            <p key={index}>{resource}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="font-semibold text-gray-700 mb-3">Templates Examples</p>
        <div className="text-gray-500 flex flex-col gap-3">
          {templates.map((template, index) => (
            <p key={index}>{template}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="font-semibold text-gray-700 mb-3">Company</p>
        <div className="text-gray-500 flex flex-col gap-3">
          {companies.map((company, index) => (
            <p key={index}>{company}</p>
          ))}
        </div>
      </div>
    </div>
 <div className="py-8 px-28 flex items-center justify-center gap-12 text-gray-500 text-xs">
<p className="flex items-center">< PiCopyrightLight/>2024 Playbook Digital, Inc. All rights reserved.
</p>
<p>Terms</p>
<p>Privacy</p>
<p>Consent Preferences</p>
<p>Join our Discord!</p>
<p>Platform Status</p>

<span className="flex items-center gap-3 text-lg">
<PiInstagramLogoLight/>
<PiLinkedinLogoLight />
<PiTwitterLogoFill/>
</span>
 </div>
    </>
  );
};
export default Footer;
