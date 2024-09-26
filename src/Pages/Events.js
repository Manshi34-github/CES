import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Data from "../Data/EventsData";
import ImageSlider from "../Components/ImageSlider";
const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20 ">
        <ImageSlider />


      </div>

      <div className="pt-20">
        <div class="container bg-white-500 mx-auto ">
          <div class="font-bold text-center text-5xl py-8 ">PAST EVENTS</div>
          <div class="relative flex flex-wrap overflow-hidden grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-10
          lg:grid-cols-2 lg:gap-25">
            {Data.map((post) => {
              return (
                <div
                  class={`mb-8 justify-between flex flex-wrap items-center  px-5 py-3`}
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div >
                    <div className="md:flex flex-wrap justify-center">
                      <div className="relative">
                        <div className="civil relative  object-cover">
                          <div id="content" className="absolute -z-1 bottom-22 text-center left-0 w-[100%] h-[100%] text-xl text-black overflow-hidden 
                             bg-black-170 rounded-md shadow-lg hover:bg-brightness-0 items-center">
                            <h1 class="text-3xl font-[2500]">{post.topic}</h1>
                            <div>
                              {post.content}
                            </div>

                            <div class="flex justify-between flex-row">
                              <div class="ml-24 mt-65"> DATE: {post.date}</div>
                              <div class="mr-24 mt-65"> VENUE: {post.location}</div>
                            </div>
                          </div>
                          <div id="image">
                            <img src={post.image} alt="" className="civilian flex flex-col 
                    items-center justify-center hover:opacity-20 object-cover rounded-md hover:scale-100" />
                          </div>


                        </div>
                      </div>
                    </div>

                    <div className="md:ml-5">

                    </div>
                    {/* </div> */}
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