import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Data from "../Data/EventsData";
import { ImLocation } from "react-icons/im";
import { RiTimeFill } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";

const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <div class="container bg-gray-200 mx-auto w-full h-full">
          <div class="relative wrap overflow-hidden md:px-10 py-10 px-2 h-full">
            <div class="border-2-2 left-[50%] absolute border-opacity-20 border-gray-700 h-full border"></div>
            {/* <!-- right timeline --> */}
            {Data.map((post) => {
              return (
                <div
                  class={`mb-8 flex justify-between ${post.place} items-center w-full`}
                >
                  <div class="order-1 w-5/12"></div>
                  <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 class="mx-auto font-semibold text-lg text-white">
                      {post.id}
                    </h1>
                  </div>
                  <div
                    class={`order-1 ${post.color} rounded-lg shadow-xl w-5/12 md:px-6 px-2 py-4`}
                  >
                    <div className="md:flex block">
                      <img src={post.image} alt="" className="md:w-[30%]" />
                      <div className="md:ml-5">
                        <h3 class="mb-3 font-bold text-gray-800 text-xl">
                          {post.topic}
                        </h3>
                        <p class="text-[12px] md:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                          {post.content}
                        </p>
                        <div className="md:flex">
                          <div className="flex">
                            <div className="flex md:mx-5 mx-1 mt-2">
                              <ImLocation className="mt-1" />
                              <div className="ml-2">{post.location}</div>
                            </div>
                            <div className="flex md:mx-5 mx-1 mt-2">
                              <RiTimeFill className="mt-1" />
                              <div className="ml-2">{post.time}</div>
                            </div>
                          </div>
                          <div className="flex md:mx-5 mx-1 mt-2">
                            <MdDateRange className="mt-1" />
                            <div className="ml-2">{post.date}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
