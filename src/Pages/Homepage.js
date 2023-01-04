import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Images/hero.png";
import BG from "../Images/image.png";
import Footer from "../Components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div
          className="flex h-[90vh] bg-cover bg-blend-darken"
          style={{ backgroundImage: `url(${BG})` }}
        >
          <div className="md:w-[40%] w-[70%] relative md:top-40 top-20 ml-10 md:ml-16">
            <div className="text-3xl  text-white font-bold">
              The Society of Civil Engineers
            </div>
            <div className="text-white mt-7 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              odio officia possimus qui temporibus. Culpa magnam maxime iure at,
              ut non numquam laboriosam cum optio labore mollitia doloremque
              consequatur cumque.
            </div>
          </div>
          <img
            src={Hero}
            alt=""
            className="h-[400px] md:block hidden relative top-24 ml-40"
          />
        </div>
        {/*<img src={Vector} alt="" className="absolute -top-10 z-10" />  */}
      </div>
      <div className="mt-10 mb-20">
        <div className="text-4xl text-center font-bold">About Us</div>
        <div className="md:mx-48 mx-5 mt-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          esse labore ut tempora optio soluta hic? Sed exercitationem explicabo
          quod natus repellendus voluptate doloribus, assumenda ex id! Nemo
          consequatur quibusdam numquam alias ut unde nesciunt placeat est
          incidunt ab, voluptates quis, aperiam expedita rem optio quod sapiente
          reprehenderit fugit odit neque. Officia, quisquam! Doloribus fugiat
          sint autem voluptates architecto molestiae ea minima consequatur et
          pariatur quam maxime dolorum eligendi culpa ut sequi iste laborum,
          expedita labore praesentium magnam quibusdam, laboriosam quis aperiam.
          Sequi voluptatem maxime incidunt quidem deserunt assumenda sunt
          laborum et nam officia atque, fugiat harum deleniti placeat natus!
        </div>
        <div className="md:mx-48 mx-5 mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          esse labore ut tempora optio soluta hic? Sed exercitationem explicabo
          quod natus repellendus voluptate doloribus, assumenda ex id! Nemo
          consequatur quibusdam numquam alias ut unde nesciunt placeat est
          incidunt ab, voluptates quis, aperiam expedita rem optio quod sapiente
          reprehenderit fugit odit neque. Officia, quisquam! Doloribus fugiat
          sint autem voluptates architecto molestiae ea minima consequatur et
          pariatur quam maxime dolorum eligendi culpa ut sequi iste laborum,
          expedita labore praesentium magnam quibusdam, laboriosam quis aperiam.
          Sequi voluptatem maxime incidunt quidem deserunt assumenda sunt
          laborum et nam officia atque, fugiat harum deleniti placeat natus!
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
