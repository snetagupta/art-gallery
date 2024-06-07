import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import forest from "../assets/trending/forest.jpg";

const ArtCard = ({ image }) => {
  return (
    <div className="transition-all duration-300 hover:scale-105 ">
      <div className="w-[230px] h-[230px] relative">
        <div className="">
          <img
            className="w-[230px] h-[230px] object-cover rounded-md absolute "
            src={forest}
          />

          <div className="absolute right-2 bottom-3  text-2xl ">
            <FaRegHeart className="text-white" />
          </div>
        </div>
      </div>
      <div>
        <p>Shiva</p>
        <div className="flex items-center gap-2 p-1">
          <FaRegCircleUser className="text-2xl text-gray-500" />
          <p className="text-lg ">By-Manoj Sridar</p>
        </div>
        <p>₹ 5,900 onwards</p>
      </div>
    </div>
  );
};
export default ArtCard;
