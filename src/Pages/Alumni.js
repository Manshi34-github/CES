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

const Alumni = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <div className="mt-10">
          {Data.map((post) => {
            const alums = post.alums;
            return (
              <div>
                <div className="text-3xl font-bold text-center texrt-grey-600 underline mb-10">
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
                          <div className="w-[75%] bg-white relative top-20 rounded-2xl h-[440px]">
                            <div className="text-center h-[155px] bg-blue-100 rounded-t-2xl">
                              <img
                                src={alum.picture}
                                alt="testimonial"
                                className="h-36 w-36 relative md:left-[27%] left-[22%] bottom-20"
                              />
                              <div className="text-[15px] font-semibold relative bottom-14">
                                {alum.name} from {alum.position}
                              </div>
                              <div className="text-[15px] flex relative bottom-12 justify-center mt-1">
                                <a
                                  href={alum.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <BsFacebook className="text-xl mx-4 text-blue-500" />
                                </a>
                                <a
                                  href={alum.linkedIn}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <BsLinkedin className="text-xl mx-4 text-blue-700" />
                                </a>
                                <a
                                  href={`mailto:${alum.email}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <MdEmail className="text-2xl mx-4 text-red-500" />
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
