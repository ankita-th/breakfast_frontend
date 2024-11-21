"use client";
import Basket from "@/_components/_common/Basket";
import ExclusiveOfferBanner from "@/_components/_common/ExclusiveOfferBanner";
import ProductCard from "@/_components/_common/ProductCard";
import Sidebar from "@/_components/SideBar";
import React, { useEffect } from "react";
import productImg from "../../../Assets/images/dough.png";
import PremiumCard from "@/_components/_common/PremiumCard";
import { PRODUCT_DATA } from "@/app/_constant/Constant";
import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { INSTANCE } from "@/app/_constant/UrlConstant";
import ItemCategory from "@/_components/_common/ItemCategory";

const Page = () => {
  useEffect(() => {
    callApi({
      endPoint: "/products/",
      method: METHODS.get,
      instanceType: INSTANCE.authorize,
      params: {
        page: "1",
      },
    });
  }, []);

  const handleItemCategory = () => {
    console.log("Item Category");
  };

  return (
    <div className="bg-gray-50">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-8">
          <ItemCategory handleClick={handleItemCategory} />
          <PremiumCard PREMIUM_CARD_DATA={PRODUCT_DATA} />
        </main>
        <Basket />
      </div>
      <ExclusiveOfferBanner />
    </div>
  );
};

export default Page;
