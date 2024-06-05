import React from "react";
// import arrow from "../assets/arrow/arrow.png"
import artGallery from "../../assets/benefits/artGallery.jpeg"
import { BsArrowReturnRight } from "react-icons/bs";

const Benefits =() =>{
    return(
        <div className="text-center flex flex-col items-center justify-center py-8 px-28">
            <h2 className=" text-4xl w-[500px] ">Neat, tidy, and organized
for your Company</h2>
            <div className="flex items-center justify-evenly gap-5 my-8">
            <div className="flex items-center gap-4">
               < BsArrowReturnRight className="text-pink-600 size-6 font-bold"/>
                <p className="text-xl font-[500]">Find files 10x faster</p>
            </div>
            <div className="flex items-center gap-4">
               < BsArrowReturnRight className="text-pink-600 size-6 font-bold"/>
                <p className="text-xl font-[500]">Collaborate with anyone</p>
            </div>
            <div className="flex items-center gap-4">
               < BsArrowReturnRight className="text-pink-600 size-6 font-bold"/>
                <p className="text-xl font-[500]">Centralize essentials</p>
            </div>
            </div>
            <div className="flex justify-center mt-10">
                <img className="w-[500px]" src={artGallery}/>
            </div>
        </div>
    )
}
export default Benefits