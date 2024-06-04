import forest from "../assets/trending/forest.jpg";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosThumbsUp } from "react-icons/io";
import { LuEye } from "react-icons/lu";

const PreviewCard = () => {
  return (
    <div>
    <div className="w-[230px] h-[230px] ">
      <div className="relative">
        <img
          className="w-[230px] h-[230px] object-cover rounded-md absolute "
          src={forest}
        />
        <div className="absolute right-2 top-4 flex items-center gap-2 text-2xl ">
          <LuEye />
          <IoIosThumbsUp className="text-yellow-500" />
        </div>
      </div>
     
    </div>
     <div className="flex items-center gap-2 p-1">
     <FaRegCircleUser className="text-2xl text-gray-500" />
     <p className="text-lg ">Photos</p>
   </div>
   </div>
  );
};
export default PreviewCard;
