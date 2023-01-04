import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Data from "../Data/EventsData";
import ImageSlider from "../Components/ImageSlider";
const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <ImageSlider />


      </div>

      <div className="pt-20">
        <div class="container bg-yellow-500 mx-auto w-full h-full">
          <div class="font-bold text-center text-5xl ">PAST EVENTS</div>
          <div class="relative wrap overflow-hidden md:px-10 py-10 px-2 h-full flex flex-wrap mx-2">
            {Data.map((post) => {
              return (
                <div
                  class={`mb-8 justify-between flex flex-wrap items-center w-[50%] h-full px-5 py-3`}
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div >
                    <div className="md:flex flex-wrap">
                      <div className="relative">
                        <div className="civil relative  object-cover">
                             <div id="content" className="absolute -z-1 bottom-0 text-center left-0 p-2 w-10/12 text-xl text-white overflow-hidden bg-black-170 rounded-md shadow-lg hover:bg-brightness-500 ">
                              <h1>{post.topic}</h1>
                             {post.content}
                           </div>
                          <img src={post.image} alt="" className="civilian w-11/12 hover:opacity-20 object-cover rounded-md hover:scale-125"/>
                          
                         
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