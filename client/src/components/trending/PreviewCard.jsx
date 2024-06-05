// import forest from "../../assets/trending/forest.jpg";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosThumbsUp } from "react-icons/io";
import { LuEye } from "react-icons/lu";

const PreviewCard = ({ image }) => {
  return (
    <div className="transition-all duration-300 hover:scale-105">
      <div className="w-[230px] h-[230px] hover:shadow-lg shadow-black  cursor-pointer">
        <div className="relative">
          <img
            className="w-[230px] h-[230px] object-cover rounded-md absolute "
            src={image}
          />
          <div className="absolute right-2 top-2 flex items-center gap-2 text-2xl bg-white bg-opacity-80 px-2 py-1 rounded-md">
            <LuEye />
            <IoIosThumbsUp className="text-yellow-500" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 p-1 cursor-pointer">
        <FaRegCircleUser className="text-2xl text-gray-500" />
        <p className="text-lg ">Photos</p>
      </div>
    </div>
  );
};
export default PreviewCard;
