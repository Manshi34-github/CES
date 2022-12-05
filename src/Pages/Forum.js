import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Data from "../Data/ForumData";

const Forum = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <div class="grid grid-flow-row gap-8 text-neutral-600 mx-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Data.map((post) => {
            return (
              <div class="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
                <div>
                  <img
                    src={post.image}
                    class="rounded-t h-72 w-full object-cover"
                    alt=""
                  />

                  <div class="p-4">
                    <p class="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                      {post.title}
                    </p>
                    <small class="leading-5 text-gray-500 dark:text-gray-400">
                      {post.description}
                    </small>
                    <div className="mt-3 text-gray-300 text-sm">
                      Posted on : {post.date}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Forum;
