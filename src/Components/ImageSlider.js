import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Event from "../Images/upcoming_event.jpg";


function ImageSlider() {
  const slides = [
    {
      url: Event,
    },
    {
      url: 'https://images.pexels.com/photos/60230/pexels-photo-60230.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        url: Event,
    },
    {
      url: 'https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      url: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-auto h-[900px] w-full m-auto py-16 px-4 relative group'>
 <div style={{ backgroundImage: `url(${slides[currentIndex].url})`, backgroundSize: 'cover' }} className='bg-cover bg-center w-full h-full rounded-2xl mx-auto transition duration-200'>

        {/* {left Arrow} */}

        {/* <div className=" pt-20  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft style={{position:'absolute',top:'50%'}} size={60} />
        </div> */}
        <div >
          <BsChevronCompactRight className="hidden group-hover:block text-black cursor-pointer rounded-full bg-gray-100" style={{position:'absolute',top:'50%',right:'0', marginRight:'25px'}} size={40} onClick={nextSlide} />
        </div>
        {/* <div className=" pt-20  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={60} />
        </div> */}
        <div>
          <BsChevronCompactLeft className="hidden group-hover:block text-black cursor-pointer rounded-full bg-gray-100"  style={{position:'absolute',top:'50%',marginLeft:'15px'}}  size={40} onClick={prevSlide} />
        </div>


        {/* {Right Arrow} */}
      {/* <div>
      <BsChevronCompactRight size={60}/>
      </div> */}
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer">
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}





export default ImageSlider;




