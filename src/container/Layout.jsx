import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div class="flex flex-col min-h-screen bg-gray-200">
      <Header class="top-0 w-full " />
      <div class="flex-1 overflow-y-auto flex  justify-center items-center">
        {children}
      </div>
      <Footer class="bottom-0 w-full" />
    </div>
  );
};

export default Layout;
