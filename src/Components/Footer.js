import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-indigo-100 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex">
                <AiFillFacebook className="bg-white p-2 text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" />

                <AiFillInstagram className="bg-white p-2 text-pink-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" />

                <AiFillLinkedin className="bg-white p-2 text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" />

                <BsTwitter className="bg-white p-2 text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        to="/"
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Funds
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Family
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Alumni
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-indigo-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © 2022 by CES
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
