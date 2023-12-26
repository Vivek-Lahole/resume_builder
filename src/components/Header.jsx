import React from "react";

const Header = () => {
  return (
    <div className="w-full h-auto flex mx-3 my-3 justify-center items-center gap-4">
      <img className="w-12 h-auto px-2 py-2" src="src\assets\logo.svg" />
      <span className="text-xl flex-1 justify-center items-center font-bold">
        Build Resume
      </span>
    </div>
  );
};

export default Header;
