import React from "react";
import { BUTTON_LOADER } from "../../../public/images/SvgIcons";

const Button = ({ className, btnText, btnType, btnClick,btnLoader, disabled ,icon}) => {
  return (
    <div>
      <button
        className={className}
        onClick={btnClick}
        type={btnType}
        disabled={disabled}
      >
        {btnLoader && BUTTON_LOADER}
        {icon}
        {btnText}
      </button>
    </div>
  );
};

export default Button;
