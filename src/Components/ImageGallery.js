import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel"
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import '../styles.css'
import { Navigation, EffectFade, FreeMode, Thumbs, Autoplay } from "swiper";
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'
import image3 from '../Images/image3.jpg'
const ImageGallery = () => {
    return (
        <div>

            <Swiper
                  data-aos="fade-down"
                  data-aos-offset="10"
                  data-aos-delay="50"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "25px",
                    "--swiper-animation-speed": "8000",
                    width: '95%',
                    border: '2px solid gray',
                    boxShadow: '6px 6px 8px  gray',
                    marginBottom: '10px',
                    borderRadius: '2px'
                }}
                autoplay={true}
                loop={true}
                spaceBetween={10}
                navigation={true}
                effect={'fade'}
                modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={image3} alt="" />
                </SwiperSlide>


            </Swiper>


        </div>
    )
}

export default ImageGallery
