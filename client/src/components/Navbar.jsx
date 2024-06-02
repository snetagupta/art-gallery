import react from "react";
import logo from "../assets/logo.png";
import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-8 px-28">
      {/* Logo */}
      <div className="border-r pr-8">
      <img className="w-20" src={logo} />
      </div>
     {/* Menus */}
      <div>
        <div className="flex items-center justify-evenly gap-5 text-base font-normal">
          <Dropdown
            title={"Community & Templates"}
            options={[
              "Template Gallery",
              "Portfolio Showcase",
              "Free Giveaway",
              "Competitions",
            ]}
          />
          <p className="font-[500] text-gray-500 hover:bg-gray-100 p-1 rounded-md cursor-pointer">Pricing</p>
          <Dropdown
            title={"Product"}
            options={[
              "Overview",
              "Features",
              "Beta programs",
              "Professional freelancers",
              "Design teams",
              "Playbook search GPT",
            ]}
          />
          <Dropdown
            title={"Use cases"}
            options={[
              "Creative project management",
              "AI art &prompt storage",
              "Collaboration & editing",
              "Smart storage",
              "Creative licenses", 
            ]}
          />
          <Dropdown
            title={"Resources"}
            options={[
              "Blog",
              "Tutorial",
              "The story of Playbook",
              "Case studies",
              "Artist privacy & ownership",
            ]}
          />
          <p className="font-[500] text-gray-500 hover:bg-gray-100 p-1 rounded-md cursor-pointer">Partnership</p>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-5 text-sm">
        <button className="border py-2 px-6 rounded text-red-500">Login</button>
        <button className="bg-red-500  py-2 px-6 rounded text-white">Create free</button>
      </div>
    </div>
  );
}
export default Navbar;
