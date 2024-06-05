import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosThumbsUp } from "react-icons/io";
import { LuEye } from "react-icons/lu";
 
 const SaleCard = ({image}) =>{
    return(
        <div>
        <div className="w-[230px] h-[230px] ">
          <div className="relative">
            <img
              className="w-[230px] h-[230px] object-cover rounded-md absolute "
              src={image}
            />
            <div className="absolute left-2 top-2 flex items-center gap-2 text-sm bg-green-500 text-white px-2 py-1 rounded-lg">
                <p>80% OFF</p>
            </div>
            <div className="absolute right-2 top-2 flex items-center gap-2 text-2xl bg-white px-2 py-1 rounded-lg">
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
    )
 }
 export default SaleCard;