import React from "react";
import { PiSignOutLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { ToastContainer, toast } from "react-toastify";
import { useQueryClient } from "react-query";

const ProfileCard = ({ name, email, imageUrl }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
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

  async function signOutUser() {
    await auth.signOut().then((res) => {
      queryClient.setQueryData("user", null);
      toast.success("User Sign Out Succesfully!", options);
      navigate("/signin");
    });
  }

  return (
    <div
      className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 
    m-2 bg-white shadow-xl rounded-lg text-gray-900 min-w-64 min-h-64"
    >
      <div className="rounded-t-lg h-32 overflow-hidden relative">
        <img
          className="object-cover object-top w-full h-auto filter blur-md"
          src={imageUrl ? imageUrl : "src/assets/logo.svg"}
          alt="Blurred Background"
        />
      </div>
      <div className="mx-auto w-24 h-24 relative -mt-12 border-4 border-h-gray-200 rounded-full overflow-hidden bg-gray-200">
        <img
          className="object-contain object-center h-auto w-24"
          src={imageUrl ? imageUrl : "src/assets/user.svg"}
          alt="Profile"
        />
      </div>
      <div className="text-center m-2">
        <h2 className="font-semibold text-sm">{name ? name : "User"}</h2>
        <p className="text-gray-500 text-xs">{email ? email : ""}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 p-4">
        <Link
          to="/temp"
          className="text-gray-500 font-semibold hover:text-black transition-transform transform hover:scale-125 whitespace-nowrap"
        >
          Home
        </Link>
        <Link
          to="/home"
          className="text-gray-500 font-semibold hover:text-black transition-transform transform hover:scale-125 whitespace-nowrap"
        >
          Add template
        </Link>

        <div className=" w-full flex justify-between border-t border-gray-400 p-2">
          <button
            className="tracking-wide font-semibold bg-blue-600 text-gray-100 w-full h-auto py-2 rounded-lg hover:bg-indigo-700 
                  transform transition-transform duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none active:scale-90"
            onClick={signOutUser}
          >
            <span className="flex-1">Sign out</span>
            <PiSignOutLight className="mr-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
