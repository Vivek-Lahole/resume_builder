import React from "react";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

const Layout = ({ children }) => {
  return (
    <div class="flex flex-col min-h-screen bg-gray-100">
      <Header class="fixed top-0 w-full" />
      <div className="flex-1 overflow-y-auto">{children}</div>
      <Footer class="fixed bottom-0 w-full" />
    </div>
  );
};

export default Layout;
