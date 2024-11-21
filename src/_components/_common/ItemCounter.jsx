import React from "react";
import { CART, CART1 } from "../../../public/images/SvgIcons";

const ItemCounter=({handleDecrease,handleIncrease,count})=> {
  return (
      <div className="flex items-center bg-gray-300 border border-gray-100 w-32 rounded-lg justify-center gap-1">
        <span
          className="cursor-pointer text-2xl w-10 h-10 flex items-center justify-center bg-white rounded-full p-4"
          onClick={handleDecrease}
        >
          -
        </span>
        <span className=" text-xl w-10 h-10 flex items-center justify-center">
          {count ? count : "1"}
        </span>
        <span
          className="cursor-pointer text-2xl w-10 h-10 flex items-center justify-center bg-white rounded-full p-2"
          onClick={handleIncrease}
        >
          +
        </span>
      
      </div>
  );
}

export default ItemCounter;
