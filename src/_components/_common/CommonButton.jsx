"use client";
import React from "react";

// const CommonButton = ({
//   type,
//   loader,
//   className="auth-btn",
//   disabled = false,
//   onClick,
//   text,
// }) => {
//   return (
//     <>
//       <button
//         disabled={disabled}
//         onClick={onClick}
//         type={type}
//         className={className}
//       >
//         {loader ? "loading" : text}
//         {`${text} ${loader ? "<Loader/>" : ""}`}
//         {text}
//       </button>
//     </>
//   );
// };

// export default CommonButton;
import { BUTTON_TYPE } from "@/_constants/constant";
import { BUTTON_LOADER } from "../../../public/images/SvgIcons";
// import { BUTTON_LOADER } from "@/Assets/Icons/Svg";

const CommonButton = ({
  loader,
  type = BUTTON_TYPE.button,
  className = "auth-btn",
  disabled = false,
  onClick,
  text,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {loader && BUTTON_LOADER}
      {text}
    </button>
  );
};

export default CommonButton;
