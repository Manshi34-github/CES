import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Data from "../Data/AlumniData";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Colon from "../Images/upper colon.png";
import BG from "../Images/NotableAlumni.png";


const Alumni = () => {
  return (
    <div>
      <Navbar />
      <div
          className="flex h-[80vh] bg-origin-border  pt-4 bg-cover bg-blend-darken"
          style={{ backgroundImage: `linear-gradient(rgba(135, 80, 156, 0.4), rgba(135, 80, 156, 0.4)),url(${BG})` }}
        >
           <div className="md:w-[40%] w-[70%] relative md:top-40 top-20 ml-10">
            <div className="text-8xl  text-white font-bold">
              Alumni Perks
            </div>
            
          </div>
        
      </div>
      <div className="pt-0">
        <div className="mt-0">
          {Data.map((post) => {
            const alums = post.alums;
            return (
              <div>
                <div className="text-3xl font-bold text-center text-white bg-origin-border border-indigo-100 p-3 border-4 mb-10 bg-fuchsia-700">
                  Batch Of {post.year}
                </div>
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                  }}
                  navigation={true}
                  // pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  className="w-10/12"
                >
                  {alums.map((alum) => {
                    return (
                      <div className="">
                        <SwiperSlide className="relative left-[59px]">
                          <div className="w-[75%] bg-white relative top-20 rounded-2xl h-[440px] transition ease-in-out delay-70 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white duration-200 ">
                            <div className="text-center h-[155px] bg-blue-300 rounded-t-2xl">
                              <img
                                src={alum.picture}
                                alt="testimonial"
                                className="h-36 w-36 relative md:left-[27%] left-[22%] bottom-20"
                              />
                              <div className="text-[15px]  font-semibold relative bottom-14 text-white">
                                {alum.name} from {alum.position}
                              </div>
                              <div className="text-[15px] flex relative bottom-12 justify-center mt-1">
                                <a
                                  href={alum.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <BsFacebook className="text-xl mx-4 text-blue-500  bg-origin-border " />
                                </a>
                                <a
                                  href={alum.linkedIn}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <BsLinkedin className="  bg-origin-border text-xl mx-4 text-blue-700" />
                                </a>
                                <a
                                  href={`mailto:${alum.email}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <MdEmail className="  bg-origin-border text-2xl mx-4 text-red-500" />
                                </a>
                              </div>
                            </div>
                            <div className="m-10">
                              <img src={Colon} alt="colon" className="" />
                              <div className="mt-8">{alum.about}</div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    );
                  })}
                </Swiper>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Alumni;
