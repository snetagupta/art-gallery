import React from "react";
import logo from "../assets/logo.png";
import road from "../assets/login/road.jpeg";
import { PiCopyrightLight } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div className="py-8 px-28">
      <div className="flex justify-between w-full">
        <div className=" flex-1  flex flex-col justify-between ">
          <div className="flex justify-start ">
            <img className="w-[100px]" src={logo} />
          </div>
          <div className="px-28 flex-1 flex flex-col  pt-20">
            <p className="text-4xl mb-4 text-center">Register</p>
            <button className=" py-2 border border-gray-400 rounded flex items-center justify-center gap-2">
              <FaGoogle />
              Continue with Google
            </button>
            <div className="flex mb-5 mt-6 gap-1">
              <span className="flex-1 border-b-2 border-gray-300 h-[5px] mt-2"></span>
              <p className=" text-gray-300">or</p>
              <span className="flex-1 border-b-2 border-gray-300  h-[5px] mt-2"></span>
            </div>
            <p className="text-gray-300 text-sm">Email</p>
            <input
              className="border border-gray-300 rounded p-2"
              placeholder="Email@gmail.com"
              type="text"
            />
            <p className="text-gray-300 text-sm mt-5">Password</p>
            <input
              className="border border-gray-300 rounded p-2"
              placeholder="Enter password"
              type="text"
            />

            <p className="text-gray-300 text-sm mt-5">Confirm Password</p>
            <input
              className="border border-gray-300 rounded p-2"
              placeholder="Confirm password"
              type="text"
            />
            <button className=" py-2 border border-gray-400 rounded mt-5">
              Register
            </button>
          </div>
          <div className=" flex items-center justify-center text-gray-500 text-xs mt-5">
            <p className="flex items-center">
              <PiCopyrightLight />
              2024 Playbook Digital, Inc. All rights reserved.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img className="rounded-md h-[calc(100vh-80px)] object-cover" src={road} />
        </div>
      </div>
    </div>
  );
};

export default Register;
