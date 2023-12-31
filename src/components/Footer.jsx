import React from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div class="w-full flex justify-center items-center bg-white">
      <div class="flex justify-center align-center py-2 px-2 gap-2">
        <span>Made With</span>
        <FcLike class="my-1" />
        <span>
          by{" "}
          <a
            href="https://www.linkedin.com/in/vivek-lahole-4b62581b9/"
            target="Linkdin Profile"
            rel="noopener noreferrer"
            className="underline transition-transform transform hover:scale-125"
          >
            Vivek Lahole
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
