
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <div className="py-36 px-28">
      <div className="text-center">
        <p className="text-6xl font-medium">Pricing</p>
        <p className="text-xl text-gray-500 mt-6">
          Never run out of creative space
        </p>
      </div>
      <div className="flex items-center justify-between gap-6 mt-12">
       <PricingCard/>
       <PricingCard/>
       <PricingCard/>
      </div>
    </div>
  );
};
export default Pricing;
