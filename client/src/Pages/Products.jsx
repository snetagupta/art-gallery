import { IoFilter } from "react-icons/io5";
import { LuArrowRightLeft } from "react-icons/lu";
import Filters from "../components/Filters";
import ArtCard from "../components/ArtCard";

const Products = () => {
  return (
    <div className="px-12 py-12">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-semibold">Digital Art(204)</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <IoFilter />
            <p  className="">Hide Filter</p>
          </div>
          <div  className="flex items-center gap-2">
            <LuArrowRightLeft/>
            <p>Sort By</p>
          </div>
        </div>
      </div>
      <div className="flex py-10 px-10 mt-6" >
        <div><Filters/></div>
        <div  className="flex-1 flex  gap-6 flex-wrap">
            <ArtCard/>
            <ArtCard/>
            <ArtCard/>
            <ArtCard/>
            <ArtCard/>
            <ArtCard/>
            <ArtCard/>
            <ArtCard/>
        </div>
   
   
   </div>
    </div>
  );
};
export default Products;
