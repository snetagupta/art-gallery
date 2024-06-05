import NewArrivalCard from "./NewArrivalCard";
import art2 from "../assets/trending/art2.jpg"

const NewArrivalSection = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">Competition entries</p>
        <p className="text-lg text-red-600">See All</p>
      </div>
      <div className=" flex items-center gap-6">
        <p><b className="text-red-500">#</b>ColorCompetition2024</p>
        <p><b className="text-red-500">#</b>AiArtCompetition2023</p>
        <p><b className="text-red-500">#</b>DesignHackathon2023</p>
        <p><b className="text-red-500">#</b>PhotoCompetitionNov2022</p>
      </div>
      <div className="flex items-center justify-between">
        <NewArrivalCard image={art2}/>
        <NewArrivalCard image={art2}/>
        <NewArrivalCard image={art2}/>
        <NewArrivalCard image={art2}/>
        <NewArrivalCard image={art2}/>
      </div>
    </div>
  );
};
export default NewArrivalSection;