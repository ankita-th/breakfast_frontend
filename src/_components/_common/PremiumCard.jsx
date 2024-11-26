"use client";
import { PREMIUM_CARD } from "@/app/_constant/Constant";
import Image from "next/image";
import heartImg from "../../Assets/images/heart.svg";
import shoppingcartImg from "../../Assets/images/shopping-cart.svg";
import arrowImg from "../../Assets/images/arrow.svg";
import React, { useState } from "react";
import { CART, CART1 } from "../../../public/images/SvgIcons";
import ItemCounter from "./ItemCounter";
import Badge from "./Badge";
import Button from "./Button";
import dummyImg from "../../Assets/images/breadimg.jpg";
// import { useCount } from "@/_ContextApi/Context";

const PremiumCard = ({
  PREMIUM_CARD_DATA,
  page,
  handleItem,
  handleViewAll,
}) => {
  const stripHtmlTags = (str) => {
    return str?.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <div>
      <section>
        <div className="max-w-screen-xl w-full px-4 mx-auto">
          <div className="grid-cols-3 text-black grid gap-[15px]">
            {PREMIUM_CARD_DATA.map((item) => (
              <div
                className="p-2.5 bg-white rounded-[10px]"
                key={item}
                onClick={() => handleItem(item.id)}
              >
                <div className="flex">
                  <Badge badgeName={"Fresh"} bgColor={"green-600"} />
                  <Badge badgeName={"Delivery in two days"} bgColor={"red-300"} />
                </div>
                {/* <Image src={"http://192.168.1.128:8005/media/product_images/images_2.jpeg"} /> */}
                {item.images?.map((img, idx) => (
                  <div key={idx}>
                    <img
                      src={img.image ? img.image : dummyImg}
                      alt="breadImg"
                    />
                  </div>
                ))}
                <h5 className="text-[18px] font-bold text-center text-black mt-[15px]">
                  {item.name}
                </h5>
                <p className="text-[12px] text-[#9299A3] font-bold py-[15px] text-center">
                  <del>{item.old_price}</del>
                  <span className="text-[#55B250] font-bold">
                    {/* {stripHtmlTags(item.description)} */}
                  </span>
                  unit
                </p>
                {page == "home" ? (
                  <div className="flex items-center justify-center gap-[10px] mb-[30px]">
                    <a
                      href="#"
                      // onClick={addToWishList}
                    >
                      <Image
                        className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
                        src={heartImg}
                        alt="heartLogo"
                      />
                    </a>
                    <a
                      href="#"
                      //  onClick={addToCart}
                    >
                      <Image
                        className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
                        src={shoppingcartImg}
                        alt="shoppingImg"
                      />
                    </a>
                  </div>
                ) : (
                  <div className="flex">
                    <ItemCounter />
                    <span className="text-black w-10 h-10 flex items-center justify-center">
                      {CART}
                    </span>
                    <span className="text-black w-10 h-10 flex items-center justify-center">
                      {CART1}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              btnType="button"
              btnText="View All"
              className="flex gap-[10px] bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[10px_30px] rounded-full text-white font-semibold items-center mt-[30px]"
              btnClick={handleViewAll}
              icon={
                <Image
                  className="bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[6px] rounded-full w-[25px] h-[25px]"
                  src={arrowImg}
                  alt="arrowImg"
                />
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumCard;
