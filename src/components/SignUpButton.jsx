import React from "react";
import { FaChevronRight } from "react-icons/fa6";

async function handleAuth() {
  handler();
}

const SignUpButton = ({ src, label, handler }) => {
  return (
    <button
      class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out 
    focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5 active:scale-90"
      onClick={handleAuth}
    >
      <div class="bg-white p-1 rounded-full">
        <img className="w-4 h-auto" src={src} />
      </div>
      <span class="ml-4">{label}</span>
    </button>
  );
};

export default SignUpButton;

{
  /* <div
  className="w-full flex justify-between items-center border-2 border-blue-700 px-4 py-3  rounded-md cursor-pointer group
    hover:bg-blue-700 duration—150 active:scale-95 transition-transform hover:shadow-md"
  onClick={handleAuth}
>
  <Icon className="text-xm group-hover:text-white" />
  <span className="text-xs font-semibold group-hover:text-white">{label}</span>
  <FaChevronRight className="text-xm group-hover:text-white" />
</div>; */
}
