import React from "react";
import Layout from "../../container/Layout";
import SignUpButton from "../components/SignUpButton";
import { FaUserPlus } from "react-icons/fa";

const AuthScreen = () => {
  return (
    <Layout>
      <div class="w-full  h-auto bg-gray-100 text-gray-900 flex flex-col justify-center items-center  min-h-screen">
        <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div class="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
            <div class="mt-12 flex flex-col items-center">
              <h1 class="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
              <div class="w-full flex-1 mt-8">
                <div class="flex flex-col items-center">
                  <SignUpButton
                    label={"Sign Up with Google"}
                    src={"src/assets/google.svg"}
                  />
                  <SignUpButton
                    label={"Sign Up with Github"}
                    src={"src/assets/Github.svg"}
                  />
                </div>

                <div class="my-12 border-b text-center">
                  <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or sign up with e-mail
                  </div>
                </div>

                <div class="mx-auto max-w-xs">
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                  />
                  <button class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none active:scale-90">
                    <FaUserPlus />
                    <span class="ml-3">Sign Up</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex ">
            <img
              class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              src="src/assets/logo.svg"
            ></img>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthScreen;
