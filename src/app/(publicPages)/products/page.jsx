"use client";
import Basket from "@/_components/_common/Basket";
import ExclusiveOfferBanner from "@/_components/_common/ExclusiveOfferBanner";
import ProductCard from "@/_components/_common/ProductCard";
import Sidebar from "@/_components/SideBar";
import React, { useEffect, useState } from "react";
import productImg from "../../../Assets/images/dough.png";
import PremiumCard from "@/_components/_common/PremiumCard";
import { PRODUCT_DATA } from "@/app/_constant/Constant";
import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { INSTANCE } from "@/app/_constant/UrlConstant";
import ItemCategory from "@/_components/_common/ItemCategory";
import { useRouter } from "next/navigation";
import { toastMessages } from "@/_utils/toastMessage";
import { useDispatch, useSelector } from "react-redux";
import { setProductListing } from "@/Redux/productDetailsSlice";

const Page = () => {
  const dispatch = useDispatch()
  const { productListing } = useSelector(state => state.product)
  const router = useRouter()
  useEffect(() => {
    callApi({
      endPoint: "/products/",
      method: METHODS.get,
      instanceType: INSTANCE.authorize,
      params: {
        page: "1",
      },
    })
    .then((res) => {
      dispatch(setProductListing(res.data.results))
    })
    .catch((err) => {
      toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
    });
  }, []);

  const handleItemCategory = () => {
    console.log("Item Category");
  };

  const handleItem=(product_id)=>{
    console.log(product_id,"id")
    router.push(`/products/${product_id}`)
  }

  return (
    <div className="bg-gray-50">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-8">
          <ItemCategory handleClick={handleItemCategory} />
          <PremiumCard PREMIUM_CARD_DATA={productListing}  page="products" handleItem={handleItem}/>
        </main>
        <Basket />
      </div>
      <ExclusiveOfferBanner />
    </div>
  );
};

export default Page;
