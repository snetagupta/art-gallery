import { IoIosArrowRoundBack } from "react-icons/io";
import logo from "../assets/logo.png";
import forest from "../assets/trending/forest.jpg";
import SaleSection from "../components/sale/SaleSection";
const Sale = () =>{
    return(
        <div className="py-8 mx-16">
        <div className="flex items-center justify-between pb-5 border-b-2">
          <div className="flex items-center gap-5 ">
            <IoIosArrowRoundBack />
            <img className="w-[80px]" src={logo} />
            <p className=" text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500">
              On-Sale
            </p>
          </div>
          <div>
            <button className="border border-gray-300 py-2 px-4 rounded">
              Sign in
            </button>
          </div>
        </div>
        <div className="mt-10 relative h-60">
          <img
            className="absolute h-[100%] w-full object-cover rounded-md"
            src={forest}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white mx-28">
            <p className="text-white font-bold text-4xl ">
              Welcome to ArtGallery's Sale
            </p>
            <p className="text-white font-semibold text-lg">
              Explore stunning portfolios, art competitions and tons of free
              resources
            </p>
          </div>
        </div>
        <SaleSection />
      </div>
    )
}
export default Sale;