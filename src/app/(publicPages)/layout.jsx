import Footer from "@/_components/_common/Footer";
import Header from "@/_components/_common/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer/>
    </div>
  );
};

export default layout;
