"use client";
import React from "react";

const CommonButton = ({
  type,
  loader,
  className="auth-btn",
  disabled = false,
  onClick,
  text,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={className}
      >
        {/* {loader ? "loading" : text} */}
        {/* {`${text} ${loader ? "<Loader/>" : ""}`} */}
        {text}
      </button>
    </>
  );
};

export default CommonButton;
