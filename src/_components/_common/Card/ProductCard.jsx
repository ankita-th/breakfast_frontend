import React from "react";
import Badge from "../Badge";
import ItemCounter from "../ItemCounter";
import { CART, CART1 } from "@/assets/Icons/Svg";
import Image from "next/image";
import { baseURL } from "@/_Api-Handlers/apiConfig";

const ProductCard = ({ item }) => {
  return (
    <div className="p-2.5 bg-white rounded-[10px] relative">
      <div className="flex absolute top-[14px] left-[15px] right-[10px] flex items-center whitespace-nowrap">
        <Badge
          badgeName={"Fresh"}
          textColor={"white"}
          bgColor={"gradient-to-r from-[#92C64E] to-[#4BAF50]"}
        />
        <Badge
          badgeName={"Delivery in two days"}
          textColor={"[#BD6600]"}
          bgColor={"gradient-to-r from-[#FFD99F] to-[#FFD99F]"}
        />
      </div>
      <Image
        className="w-full h-48 object-cover rounded-[10px]"
        src={item.image ? `${baseURL}${item.product_images[0]}` : "/images/breadimg.jpg"}
        alt="Card Image"
        width={250}
        height={250}
      />
      
      <h2 className="text-[18px] font-bold text-center text-black mt-[15px]">
        {item.name}
      </h2>

      <p className="text-3 text-[#9299A3] font-bold py-[15px] text-center md:pt-[0px]">
        <del>70</del>
        <span className="text-[#55B250] font-bold">
          {/* {stripHtmlTags(item.description)} */}
        </span>
      </p>
      <div className="flex items-center justify-end gap-[10px] mb-[30px] absolute top-[14px] right-[14px]">
        <a href="#">
          <Image
            className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
            src={"/images/heart.svg"}
            alt="heartLogo"
            width={20}
            height={20}
          />
        </a>
        {/* <a href="#">
          <Image
            className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
            src={"/images/shopping-cart.svg"}
            alt="cartLogo"
            width={20}
            height={20}
          />
        </a> */}
      </div>
      <div className="flex gap-2.5 justify-between">
        <div>
          <ItemCounter
          // count={itemCount}
          // handleDecrease={handleDecrease}
          // handleIncrease={handleIncrease}
          />
        </div>
        <div className="flex gap-2.5">
          <span className="text-black flex items-center justify-center">
            {CART}
          </span>
          <span className="text-black flex items-center justify-center">
            {CART1}
          </span>
        </div>
      </div>

      {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Click Here
        </button> */}
    </div>
  );
};

export default ProductCard;
