import React from "react";
import aiImage from "../../assets/hero/ai.png";
import heroArtImage from "../../assets/hero/heroArt.jpeg"

const Hero = () => {
  return (
    <div className="py-8 px-28 flex justify-between">
      {/* content */}
      <div className="flex-1 pt-10 flex flex-col gap-10">
        <span className="flex items-center text-sm gap-1 border rounded-full w-fit px-3 py-1 poppins-medium">
          How <img className=" h-5 mb-2" src={aiImage} alt="ai" /> artists use
          Playbook
        </span>
        <div className="flex flex-col gap-10 py-10">
          <h2 className="text-6xl leading-tight">
            Make your creative work beauuutiful.
          </h2>
          <p className="text-gray-500 text-[20px]">
            Organize, share, and collaborate on creative files and projects with
            your clients and team.
          </p>
          <div className="flex items-center gap-3">
            <button className="font-semibold px-5 py-3 text-white bg-[#FE2753] border border-[#FE2753] rounded-md hover:shadow-lg transition-all duration-200">
              Create Playbook free{" "}
            </button>
            <button className="border border-black font-semibold px-5 py-3 rounded-md hover:shadow-lg transition-all duration-200">
              Creative? Get qualified for 4TB
            </button>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="flex-1">
        <img src={heroArtImage} alt="art" className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default Hero;
