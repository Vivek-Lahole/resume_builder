import React from "react";
import { PuffLoader } from "react-spinners";

const Spinner = ({ size }) => {
  return (
    <div>
      <PuffLoader color="#ccd4ff" size={size} />
    </div>
  );
};

export default Spinner;
