"use client";
import { PREMIUM_CARD } from "@/app/_constant/Constant";
import Image from "next/image";
import heartImg from "../../Assets/images/heart.svg";
import shoppingcartImg from "../../Assets/images/shopping-cart.svg";
import arrowImg from "../../Assets/Images/arrow.svg";
import React, { useState } from "react";
import { CART, CART1 } from "../../../public/images/SvgIcons";

const PremiumCard = ({ PREMIUM_CARD_DATA, page }) => {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <section>
        <div className="max-w-screen-xl w-full px-4 ">
          <div className="grid-cols-4 grid gap-[15px] mt-[80px]">
            {PREMIUM_CARD_DATA.map((item) => (
              <div className="premium_product_card p-[10px] bg-white rounded-[10px]">
                <Image
                  className="premium_product_cardimg"
                  src={item.logo_img}
                  alt="breadImg"
                />
                <h5 className="text-[18px] font-bold text-center text-black mt-[15px]">
                  Brown Bread
                </h5>
                <p className="text-[12px] text-[#9299A3] font-bold py-[15px] text-center">
                  <del>{item.old_price}</del>
                  <span className="text-[#55B250] font-bold">
                    {item.new_price}
                  </span>
                  unit
                </p>
                {page == "home" ? (
                  <div className="flex items-center justify-center gap-[10px] mb-[30px]">
                    <a href="#">
                      <Image
                        className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
                        src={heartImg}
                        alt="heartLogo"
                      />
                    </a>
                    <a href="#">
                      <Image
                        className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
                        src={shoppingcartImg}
                        alt="shoppingImg"
                      />
                    </a>
                  </div>
                ) : (
                  // <div className="flex items-center justify-center gap-4 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center justify-center gap-2">
                  <span
                    className="text-black cursor-pointer text-2xl w-10 h-10 flex items-center justify-center"
                    onClick={handleDecrease}
                  >
                    -
                  </span>
                  <span className="text-black text-xl w-10 h-10 flex items-center justify-center">
                    {count}
                  </span>
                  <span
                    className="text-black cursor-pointer text-2xl w-10 h-10 flex items-center justify-center"
                    onClick={handleIncrease}
                  >
                    +
                  </span>
                  <span className="text-black w-10 h-10 flex items-center justify-center">{CART}</span>
                  <span className="text-black w-10 h-10 flex items-center justify-center">{CART1}</span>
                </div>
                
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="flex gap-[10px] bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[10px_30px] rounded-full text-white font-semibold items-center mt-[30px]"
            >
              View All
              <span>
                <Image
                  className="bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[6px] rounded-full w-[25px] h-[25px]"
                  src={arrowImg}
                  alt="arrowImg"
                />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumCard;
