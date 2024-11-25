import React, { useState } from "react";

const ItemCounter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = (e) => {
    e.defaultPropagation()
    setCount((count) => count + 1);
  };
  const handleDecrease = (e) => {
    e.defaultPropagation()
    setCount((count) => count - 1)
  };
  return (
    <div className="flex items-center bg-gray-300 border border-gray-100 w-32 rounded-lg justify-center gap-1">
      <span
        className="cursor-pointer text-2xl w-10 h-10 flex items-center justify-center bg-white rounded-full p-4"
        onClick={(e)=>handleDecrease(e)}
      >
        -
      </span>
      <span className=" text-xl w-10 h-10 flex items-center justify-center">
        {count ? count : "1"}
      </span>
      <span
        className="cursor-pointer text-2xl w-10 h-10 flex items-center justify-center bg-white rounded-full p-2"
        onClick={(e)=>handleIncrease(e)}
      >
        +
      </span>
    </div>
  );
};

export default ItemCounter;
