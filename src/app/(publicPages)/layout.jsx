import Header from "@/_components/_common/Header";
import React from "react";

function layout({children}) {
  return (
    <div>
        <Header/>
      {children}
    </div>
  );
}

export default layout;
