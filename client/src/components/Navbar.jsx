import react from "react";
import logo from "../assets/logo.png";
import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <div className="flex items-center justify-evenly p-8">
      <img className="w-20" src={logo} />
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
          <li>Pricing</li>
          <li>Product</li>
          <li>Use cases</li>
          <li>Resources</li>
          <li>Partnership</li>
        </div>
      </div>
      <div className="flex gap-5">
        <button className="border py-1 px-8 rounded text-red-500">Login</button>
        <button>Create free</button>
      </div>
    </div>
  );
}
export default Navbar;
