import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import SignUpButton from "../components/SignUpButton";
import { FaUserPlus } from "react-icons/fa";
import useUserOauth from "../hooks/useUserOauth";
import Spinner from "../components/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQueryClient } from "react-query";

const SignInScreen = () => {
  const { data, isLoading, error } = useUserOauth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState(0);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  useEffect(() => {
    if (!isLoading && data) {
      navigate("/home", {
        replace: true,
      });
    }
  }, [data, isLoading]);

  const options = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  function handleSignInEmailPassword() {
    console.log(email);
    if (!email || !password) {
      toast.error("Add correct Email and Password");
      return;
    }
    setState(1);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        queryClient.setQueryData("user", user);
        setState(0);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode, options);
        const errorMessage = error.message;
        console.log(errorMessage);
        setState(0);
      });
  }

  if (isLoading || state) {
    return <Spinner />;
  }

  return (
    <div class="w-full bg-gray-100 text-gray-900 flex flex-col justify-center items-center  min-h-screen">
      <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
          <div class="mt-12 flex flex-col items-center">
            <h1 class="text-2xl xl:text-3xl font-extrabold">Sign In</h1>
            <div class="w-full flex-1 mt-8">
              <div class="flex flex-col items-center">
                <SignUpButton
                  label={"Sign in with Google"}
                  src={"src/assets/google.svg"}
                  authProvider={"googleAuthProvider"}
                />
                <SignUpButton
                  label={"Sign in with Github"}
                  src={"src/assets/Github.svg"}
                  authProvider={"githubAuthProvider"}
                />
              </div>

              <div class="my-12 border-b text-center">
                <div
                  class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform 
                  translate-y-1/2"
                >
                  Or sign in with e-mail
                </div>
              </div>

              <div class="mx-auto max-w-xs">
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 
                    text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 
                    text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  autoComplete="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button
                  class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 
                  transform transition-transform duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none active:scale-90"
                  onClick={handleSignInEmailPassword}
                >
                  <FaUserPlus />
                  <span class="ml-3">Sign In</span>
                </button>
                <div className="flex justify-center items-center">
                  <span
                    className="mt-2  text-sm text-gray-600 justify-start flex-1 underline hover:scale-90 
                  transition-transform duration-300"
                  >
                    New User ?
                  </span>
                  <span className="mt-2 text-center text-sm items-end">
                    <Link
                      to={"/signup"}
                      className="font-medium text-purple-600 hover:text-purple-500"
                    >
                      Create Account
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 bg-indigo-100 text-center hidden lg:flex ">
          <img
            class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            src="src/assets/logo.svg"
          ></img>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default SignInScreen;