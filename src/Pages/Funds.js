import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Funds = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20 ">
        <div class="relative  my-10 md:w-[50%] w-full md:left-[25%] z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
          <h4 class="w-full text-4xl font-medium leading-snug">Alumnus Fund</h4>
          <form class="relative w-full mt-6 space-y-8">
            <div class="relative">
              <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                placeholder="eg: Pawan Kumar"
              />
            </div>
            <div class="relative">
              <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                placeholder="eg: abcd@gmail.com"
              />
            </div>
            <div class="relative">
              <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                Batch <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                placeholder="eg: 2024"
              />
            </div>
            <div class="relative">
              <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                LinkedIn Profile <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                placeholder="eg: https://www.linkedin.com/in/abcd-4329a2208/"
              />
            </div>
            <div class="relative">
              <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                Contact No. <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                placeholder="eg: +91 9749568594"
              />
            </div>
            <div class="relative">
              <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                Field Of Work <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                placeholder="eg: Software Developer"
              />
            </div>
            <div class="relative">
              <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                Current Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                placeholder="eg: Cisco"
              />
            </div>
            <div class="relative">
              <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                Account Details <span className="text-red-500">*</span>
              </label>
              <div className="pt-6 text-center">UPI Id: 9026663689@paytm</div>
            </div>
            <div class="relative">
              <button class="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-500 ease">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Funds;
