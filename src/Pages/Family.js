import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Data from "../Data/FamilyData";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

const Family = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <section class="bg-white">
          <div class="container px-6 py-10 mx-auto">
            {Data.map((post) => {
              const teams = post.teams;
              return (
                <div>
                  <div className="">
                    <h1 class="text-3xl font-semibold text-center text-blue-800 capitalize lg:text-4xl ">
                      {post.year} Year
                    </h1>
                    <div class="mx-auto mt-2 flex justify-center">
                      <span class="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                      <span class="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                      <span class="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
                    </div>
                  </div>
                  <div className="">
                    {teams.map((team) => {
                      const students = team.teammates;
                      return (
                        <div>
                          <div className="text-gray-500 mt-10 text-2xl font-bold underline">
                            {team.teamname}
                          </div>
                          {console.log(students.place)}
                          <div class="grid grid-cols-1 items-center justify-center gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                            {students.map((student) => {
                              return (
                                <div>
                                  <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
                                    <img
                                      class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                                      src={student.studentPic}
                                      alt=""
                                    />

                                    <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
                                      {student.studentName}
                                    </h1>

                                    <p class="mt-2 text-gray-500 capitalize text-gray-500 group-hover:text-gray-300">
                                      {student.position}
                                    </p>

                                    <div class="flex mt-3 -mx-2">
                                      <a
                                        href={`mailto:${student.email}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <MdEmail className="text-xl mx-4 text-red-500 hover:text-gray-500 group-hover:text-white" />
                                      </a>
                                      <a
                                        href={student.linkedIn}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <BsLinkedin className="text-xl mx-4 text-blue-700 hover:text-gray-500 group-hover:text-white" />
                                      </a>
                                      <a
                                        href={`tel:${student.contactNo}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <AiFillPhone className="text-2xl mx-4 text-blue-500 hover:text-gray-500 group-hover:text-white" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Family;
