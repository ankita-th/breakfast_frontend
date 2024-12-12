import React, { useState } from "react";
import Badge from "../Badge";
import ItemCounter from "../ItemCounter";
// import { CART, CART1 } from "@/assets/Icons/Svg";
import Image from "next/image";
import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { INSTANCE } from "@/app/_constant/UrlConstant";
import { setWishList } from "@/Redux/addToWishListSlice";
import { successType, toastMessages } from "@/_utils/toastMessage";
import { DEFAULT_ERROR_MESSAGE } from "@/_constants/constant";
import { useSelector } from "react-redux";
import { CART, CART1 } from "@/Assets/Icons/Svg";
import { baseURL } from "@/_utils/helpers";

const ProductCard = ({
  page,
  item,
  addToWishlist,
  like,
  selectedId,
  handleItem,
  addToBasket,
  addToCart,
  // setSelectedId,
  // setShowLoginModal
}) => {
  const { selectedBasket } = useSelector((state) => state.addToBasket);
  const [productQuantity, setProductQuantity] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  console.log(item, "item");
  const eligibleForBasket = selectedBasket.products_detail
    ?.map((item) => item.id)
    .includes(item.id);
  console.log(eligibleForBasket, "eligibleForBasket");

  return (
    <div className="p-2.5 bg-white rounded-[10px] relative">
      <div className="flex absolute top-[14px] left-[15px] right-[10px] flex items-center whitespace-nowrap">
        <Badge
          badgeName={"Fresh"}
          textColor={"white"}
          bgColor={"gradient-to-r from-[#92C64E] to-[#4BAF50]"}
        />
        <Badge
          badgeName={item.delivery_day}
          textColor={"[#BD6600]"}
          bgColor={"gradient-to-r from-[#FFD99F] to-[#FFD99F]"}
        />
      </div>
      <img
        className="w-full h-48 object-cover rounded-[10px]"
        src={
          // item?.feature_image?.length == 0
          //   ? 
            
            
            page === "products"
              ? `${baseURL}${item?.feature_image?.image}`
            //   : `${baseURL}${item?.feature_image}`
            : "/images/breadimg.jpg"
        }
        width={250}
        height={250}
        onClick={() => handleItem(item.id)}
      />

      <h2 className="text-[18px] font-bold text-center text-black mt-[15px]">
        {item.name}
      </h2>

      <p className="text-3 text-[#9299A3] font-bold py-[15px] text-center md:pt-[0px]">
        $
        <del>
          {item.product_detail?.variants !== null
            ? item.product_detail?.variants[0]?.inventory?.regular_price
            : "70.00"}
        </del>
        <span className="text-[#55B250] font-bold ">
          $
          {item.product_detail?.variants !== null
            ? item.product_detail?.variants[0]?.inventory?.sale_price
            : "50.00"}
          unit
          {/* {stripHtmlTags(item.description)} */}
        </span>
      </p>
      <div className="flex items-center justify-end gap-[10px] mb-[30px] absolute top-[14px] right-[14px]">
        {/* <a href="#" > */}
        <img
          className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
          src={
            item?.is_in_wishlist || (like && item?.id === selectedId)
              ? "/images/likedImg.svg"
              : "/images/heart.svg"
          }
          alt="heartLogo"
          onClick={(e) => addToWishlist(e, item?.id, item?.is_in_wishlist)}
          width={20}
          height={20}
        />
      </div>
      <div className="flex gap-2.5 justify-between">
        <div>
          <ItemCounter
            item={item}
            productQuantity={productQuantity}
            setItemCount={setItemCount}
            itemCount={itemCount}
          />
        </div>
        <div className="flex gap-2.5">
          <span
            className="text-black flex items-center justify-center"
            onClick={() => addToCart(item, itemCount)}
          >
            {CART}
          </span>
          <span
            className="text-black flex items-center justify-center"
            onClick={() => addToBasket(item, itemCount)}
          >
            {eligibleForBasket ? CART1 : undefined}
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
