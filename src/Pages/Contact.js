import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
// import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import Data from "../Data/ContactData";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <div class="bg-white p-6 rounded-md w-full">
          {Data.map((post) => {
            const students = post.student;
            return (
              <div>
                <div className="text-3xl text-center text-blue-500 underline font-bold my-5">
                  {post.topic}
                </div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal ">
                      <thead>
                        <tr>
                          <th class="px-11 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Name
                          </th>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Year
                          </th>
                          <th class="px-12 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Email
                          </th>
                          <th class="px-14 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Contact
                          </th>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            
                          </th>
                    
                        </tr>
                      </thead>
                      <tbody>
                        {students.map((student) => {
                          return (
                            <tr>
                              <td class="px-10 py-5 border-b border-gray-200 bg-white text-sm">
                                <div class="flex items-center">
                                  <div class="flex-shrink-0 w-10 h-10">
                                    <img
                                      class="w-full h-full rounded-full"
                                      src={student.picture}
                                      alt=""
                                    />
                                  </div>
                                  <div class="ml-3">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      {student.name}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {student.year}
                                </p>
                              </td>
                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {student.email}
                                </p>
                              </td>
                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap flex">
                                  <a
                                    href={student.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <BsFacebook className="text-xl mx-4 text-blue-500" />
                                  </a>
                                  <a
                                    href={student.linkedIn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <BsLinkedin className="text-xl mx-4 text-blue-700" />
                                  </a>
                                  <a
                                    href={`tel:${student.contact}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <AiFillPhone className="text-2xl mx-4 text-red-500" />
                                  </a>
                                </p>
                              </td>
                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                  ></span>
                                  <span class="relative">{student.status}</span>
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
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

export default Contact;
