import react from "react";
import logo from "../assets/logo.png";
import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <div className="flex items-center justify-evenly p-8">
      <div className="border-r pr-8">
      <img className="w-20" src={logo} />
      </div>
     
      <div>
        <div className="flex items-center justify-evenly gap-10 text-base font-normal">
          <Dropdown
            title={"Community & Templates"}
            options={[
              "Template Gallery",
              "Portfolio Showcase",
              "Free Giveaway",
              "Competitions",
            ]}
          />
          <p className="font-bold text-gray-500 ">Pricing</p>
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
          <p className="font-bold text-gray-500 ">Partnership</p>
        </div>
      </div>
      <div className="flex gap-5">
        <button className="border py-1 px-6 rounded text-red-500">Login</button>
        <button className="bg-red-600  py-1 px-6 rounded text-white">Create free</button>
      </div>
    </div>
  );
}
export default Navbar;
