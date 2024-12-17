import React, { useEffect, useState } from "react";
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
import ToolTips from "../ToolTips";
import Select from "react-select";

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
  const [currentVariant, setCurrentVariant] = useState(null);
  const [productQuantity, setProductQuantity] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [itemCount, setItemCount] = useState(0);
  const options = item.product_detail?.variants?.map((variant) => ({
    variant_id: variant.id,
    label: `${variant.inventory.weight} ${variant.inventory.unit}`,
  }));
  // console.log(item.product_detail,"world")
  // console.log(options,"options")
  useEffect(()=>{
    if(currentVariant==null){
      setCurrentVariant(item?.product_detail?.variants?.[0])
    }
  },[item])

  const handleVariant = (variant) => {
    console.log(variant,"variant")
    setSelectedVariant(variant);
    const selectedVariantWeight = variant?.label?.split(" ")[0];
    const variantValue = item.product_detail?.variants.find(
      (variant) => variant.inventory.weight == selectedVariantWeight
    );
    setCurrentVariant(variantValue);
  };


  const eligibleForBasket = selectedBasket?.products_detail
    ?.map((item) => item?.product_id)
    .includes(item?.id);

  const eligibleVariantForBasket = selectedBasket?.products_detail
    ?.map((item) => item?.id)
    .includes(currentVariant?.id || item?.product_detail?.variants?.[0]?.id)

    console.log(currentVariant?.id,"currentVariant")
  // console.log(eligibleVariantForBasket, "eligibleVariantForBasket");
  console.log(selectedBasket, "selectedBasket");
  // console.log(eligibleForBasket, "eligibleForBasket");
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
          page === "products" || "home"
            ? `${baseURL}${item?.feature_image?.image}`
            : `${baseURL}${item?.feature_image}`
        }
        width={250}
        height={250}
        onClick={() => handleItem(item.id)}
      />

      <h2 className="text-[18px] font-bold text-center text-black mt-[15px]">
        {page === "favorites" ? item?.product?.name : item?.name}
      </h2>
      <div className="flex">
        <Select
          options={options}
          onChange={(e)=>handleVariant(e)}
          placeholder="Select a variant"
          value={selectedVariant ? selectedVariant : options[0]}
        />

        <p className="text-3 text-[#9299A3] font-bold py-[15px] text-center md:pt-[0px]">
          $
          <del>
            {currentVariant
              ? currentVariant?.inventory?.regular_price
              : item.product_detail?.variants?.[0]?.inventory?.regular_price}
          </del>
          <span className="text-[#55B250] font-bold ">
            $
            {currentVariant
              ? currentVariant?.inventory?.sale_price
              : item.product_detail?.variants?.[0]?.inventory?.sale_price}
            unit
          </span>
        </p>
      </div>

      <div className="flex items-center justify-end gap-[10px] mb-[30px] absolute top-[14px] right-[14px]">
        <img
          className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
          src={item?.wishlist_status == "added"  ? "/images/likedImg.svg" : "/images/heart.svg"}
          alt="heartLogo"
          onClick={(e) => addToWishlist(e, item, item?.wishlist_status)}
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
          <ToolTips text="Add to cart">
            <span
              className={
                itemCount > 0
                  ? "enabled-cart"
                  : "enabled-cart opacity-50 cursor-not-allowed"
              }
              onClick={() => addToCart(item, itemCount)}
            >
              {CART}
            </span>
          </ToolTips>
          <ToolTips text="Add to basket">
            <span
              className={
                itemCount > 0
                  ? "enabled-basket"
                  : "enabled-basket opacity-50 cursor-not-allowed"
              }
              onClick={
                eligibleVariantForBasket && eligibleForBasket
                  ? () => addToBasket(currentVariant, itemCount)
                  : undefined
              }
            >
            {eligibleVariantForBasket && eligibleForBasket ? CART1 : ""}
            </span>
          </ToolTips>
        </div>
      </div>

      {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Click Here
        </button> */}
    </div>
  );
};

export default ProductCard;
