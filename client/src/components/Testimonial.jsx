import React from "react";

const Testimonial = ({message, messageBy}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-8 px-28 my-16">
      <p className="text-3xl text-center font-semibold font-[lora] w-[60%]">
        "{message}"
      </p>
      <p className="text-gray-500 text-sm text-center">
        {messageBy}
      </p>
    </div>
  );
};

export default Testimonial;
