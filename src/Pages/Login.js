import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BG from "../Images/image.png";
import { auth, provider } from "../Components/config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <div>
      <Navbar />

      <div
        class="h-screen w-full bg-cover bg-blend-darken"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div class="mx-auto pt-20 flex h-full md:w-[30%] w-[80%] flex-col justify-center text-white">
          <div>
            <p class="text-2xl">Login </p>
            <p>please login only with your institute account</p>
          </div>
          <div class="my-6">
            <button
              onClick={handleSignIn}
              class="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2"
            >
              <img
                src="https://freesvg.org/img/1534129544.png"
                alt=""
                class="mr-2 w-6 object-fill"
              />
              Sign in with Google
            </button>
          </div>
          <div>
            <fieldset class="border-t border-solid border-gray-400">
              <legend class="mx-auto px-2 text-center text-sm">
                Or login via our secure system
              </legend>
            </fieldset>
          </div>
          <div class="mt-10">
            <form>
              <div>
                <label class="mb-2.5 block font-extrabold" for="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                  placeholder="mail@user.com"
                />
              </div>
              <div class="mt-4">
                <label class="mb-2.5 block font-extrabold" for="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow"
                />
              </div>

              <div class="my-10">
                <button class="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div class="h-screen w-1/2 bg-blue-600">
          <img src={BG} alt="" class="h-full w-full" />
        </div> */}

      <Footer />
    </div>
  );
};

export default Login;
