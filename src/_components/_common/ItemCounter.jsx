"use client";
import React, { useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";

const ItemCounter = ({ item ,productQuantity ,setItemCount ,itemCount }) => {
  const dispatch = useDispatch();
  const [productId, setProductId] = useState();
  const { selectedBasket } = useSelector((state) => state.addToBasket);
  console.log(itemCount, "itemCount");
  console.log(productQuantity,"productQuantity")
  console.log(item,"item")
  console.log(productId,"productId")
  const handleIncrease = (e, id) => {
    console.log(id, "id");
    setProductId(id)
    e.stopPropagation();
    setItemCount((itemCount) =>
      itemCount + 1 <= selectedBasket?.space_left  ? itemCount + 1 : itemCount
    );
  };
  const handleDecrease = (e, id) => {
    e.stopPropagation();
    setItemCount((itemCount) =>
      itemCount - 1 >= 0 ? itemCount - 1 : itemCount
    );
  };

  return (
    <div className="flex items-center bg-[#F2F2F2] border rounded-[50px] border-gray-100 w-32 justify-center gap-1 p-[5px] plus-minus-card">
      <span
        className={itemCount > 0 ? "enabled-decreament" : "enabled-decreament opacity-50 cursor-not-allowed"}
        onClick={(e) => handleDecrease(e, item.id)}
      >
        -
      </span>
      <span className="text-xl w-10 h-10 flex items-center justify-center mob-quantity">
        {productId === item?.id ? itemCount : "0"}
      </span>
      <span
        className="enabled-decreament"
        onClick={(e) => handleIncrease(e, item.id)}
      >
        +
      </span>
    </div>
  );
};

export default ItemCounter;
