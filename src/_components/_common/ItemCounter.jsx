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
      <Button
        className="cursor-pointer text-2xl w-10 h-10 flex items-center justify-center bg-white rounded-full p-4"
        btnClick={handleDecrease}
        btnText={"-"}
      />
      <Button
        className=" text-xl w-10 h-10 flex items-center justify-center"
        btnText={itemQuantity ? itemQuantity : "0"}
      />
      <Button
        className="cursor-pointer text-2xl w-10 h-10 flex items-center justify-center bg-white rounded-full p-2"
        btnClick={handleIncrease}
        btnText={"+"}
      />
    </div>
  );
};

export default ItemCounter;
