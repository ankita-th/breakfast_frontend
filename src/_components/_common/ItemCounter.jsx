import React, { useState } from "react";
import Button from "./Button";

const ItemCounter = () => {
  const [itemQuantity, setItemQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [wishListQuantity, setWishListQuantity] = useState(0);
  const [basketQuantity, setBasketQuantity] = useState(0);
  const handleIncrease = (e) => {
    e.defaultPropagation();
    setItemQuantity((count) => count + 1);
  };
  const handleDecrease = (e) => {
    e.defaultPropagation();
    setItemQuantity((count) => count - 1);
  };


  return (
    <div className="flex items-center bg-[#F2F2F2] border rounded-[50px] border-gray-100 w-32 justify-center gap-1 p-[5px]">
      <span
        className="cursor-pointer text-2xl w-10 h-10 flex-none flex items-center justify-center bg-white rounded-full p-4"
        onClick={handleDecrease}
      >
        -
      </span>
      <span className=" text-xl w-10 h-10 flex items-center justify-center">
        {itemQuantity ? itemQuantity : "1"}
      </span>
      <span
        className="cursor-pointer text-2xl w-10 h-10 flex-none flex items-center justify-center bg-white rounded-full p-2"
        onClick={handleIncrease}
      >
        +
      </span>

    </div>
  );
};

export default ItemCounter;
