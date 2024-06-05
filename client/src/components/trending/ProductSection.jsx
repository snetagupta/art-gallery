import PreviewCard from "./PreviewCard";
import art from "../../assets/trending/art.png";
import HashTags from "../HashTags";

const ProductSection = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">Competition entries</p>
        <p className="text-lg text-red-600">See All</p>
      </div>
      <HashTags />
      <div className="flex items-center justify-between">
        <PreviewCard image={art} />
        <PreviewCard image={art} />
        <PreviewCard image={art} />
        <PreviewCard image={art} />
        <PreviewCard image={art} />
      </div>
    </div>
  );
};
export default ProductSection;
