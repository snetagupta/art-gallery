import SaleCard from "./SaleCard";
import art3 from "../../assets/trending/art3.webp"
import HashTags from "../HashTags";

const SaleSection = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">Competition entries</p>
        <p className="text-lg text-red-600">See All</p>
      </div>
      <HashTags/>
      <div className="flex items-center justify-between">
        <SaleCard image={art3}/>
        <SaleCard image={art3}/>
        <SaleCard image={art3}/>
        <SaleCard image={art3}/>
        <SaleCard image={art3}/>
      </div>
    </div>
  );
};
export default SaleSection;