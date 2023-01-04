import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Data from "../Data/CloudData";
import { Link } from "react-router-dom";

const Cloud = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <div class="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10">
          <div class="grid grid-cols-1 lg:xl:grid-cols-3 md:grid-cols-2 gap-3 group bg-gray-50 shadow-xl shadow-neutral-100 border-2">
            {Data.map((post) => {
              return (
                <div
                  data-aos="zoom-in-up"
                  data-aos-offset="50"
                  data-aos-delay="50"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  className="border-2 rounded-xl bg-sky-50 shadow-xl my-2 mx-1">
                  <a
                    href={post.Drivelink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                      <span
                        class={`p-5 rounded-full bg-red-500 text-white shadow-lg shadow-${post.color}-200`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-10 w-10"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="1.5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>
                      <p class="text-xl font-medium text-slate-700 mt-3">
                        {post.title}
                      </p>
                      <p class="mt-2 text-sm text-stone-900">{post.content}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          <div
             data-aos="flip-down"
             data-aos-offset="50"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
            class="w-full  bg-indigo-600 shadow-xl shadow-indigo-200 md:py-10 py-5 md:px-20 px-5 flex justify-between items-center mt-5">
            <p class=" text-white">
              {" "}
              <span class="md:text-4xl text-3xl font-medium">
                Still Confused ?
              </span>{" "}
              <br /> <span class="text-lg">Take consult from seniors ! </span>
            </p>
            <Link to="/contact">
              <button class="px-5 py-3  font-medium text-slate-700 shadow-xl  hover:bg-white duration-150  bg-yellow-400">
                CONTACT OF SENIORS{" "}
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Cloud;
