import React from "react";
import { FcLike } from "react-icons/fc";
const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-center align-center py-2 px-2 gap-2">
        <span>Made With</span>
        <FcLike className="my-1" />
        <span>by Vivek Lahole</span>
      </div>
    </div>
  );
};

export default Footer;
