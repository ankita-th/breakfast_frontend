"use client";
import React from "react";
import { BUTTON_TYPE } from "@/_constants/constant";
import { BUTTON_LOADER } from "../../../public/images/SvgIcons";
// import { BUTTON_LOADER } from "@/public/Icons/Svg";

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
      className={disabled ? "disabled"  : className}
    >
      {loader && BUTTON_LOADER}
      {text}
    </button>
  );
};

export default CommonButton;
