import React from "react";

const ToolTips = ({ text, children }) => {
  return (
    <div className="relative w-max group mx-auto">
      {children}
      <div className="max-w-xs absolute shadow-lg hidden group-hover:block bg-[#333] text-white font-semibold px-3 py-[6px] text-[13px] right-0 left-0 mx-auto w-max -bottom-10 rounded before:w-4 before:h-4 before:rotate-45 before:bg-[#333] before:absolute before:z-[-1] before:-top-1 before:left-0  before:right-0 before:mx-auto">
        {text}
      </div>
    </div>
  );
}
export default ToolTips;
