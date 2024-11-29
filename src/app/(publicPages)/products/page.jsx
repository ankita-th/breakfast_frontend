"use client";
import Basket from "@/_components/_common/Basket";
import ExclusiveOfferBanner from "@/_components/_common/ExclusiveOfferBanner";
import ProductCard from "@/_components/_common/ProductCard";
import Sidebar from "@/_components/SideBar";
import React, { useEffect, useState } from "react";
import PremiumCard from "@/_components/_common/PremiumCard";
import { PRODUCT_DATA, SORT_BY_OPTIONS } from "@/app/_constant/Constant";
import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { INSTANCE } from "@/app/_constant/UrlConstant";
import ItemCategory from "@/_components/_common/ItemCategory";
import { useRouter } from "next/navigation";
import { toastMessages } from "@/_utils/toastMessage";
import ScreenLoader from "@/_components/_common/ScreenLoader";

const Page = () => {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    callApi({
      endPoint: "/products/",
      method: METHODS.get,
      instanceType: INSTANCE.authorize,
      params: {
        page: "1",
      },
    })
      .then((res) => {
        setProductDetails(res.data.results);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
      });
  }, []);

  const handleItemCategory = () => {
    console.log("Item Category");
  };

  const handleItem = (product_id) => {
    router.push(`/products/${product_id}`);
  };

  return (
    <>
      <div className="bg-gray-50">
        <div className="flex">
          <Sidebar />
          <main className="px-8 w-[calc(100%-560px)] desktop-calc1200">
            <ItemCategory handleClick={handleItemCategory} />
            <div className="select flex space-x-4 items-center mt-[40px]">
              <div className="title text-[16px] font-semibold">Sort By</div>
              <select className="border border-[#4BAF50] rounded-[5px] p-[10px] text-[#4BAF50]">
                {SORT_BY_OPTIONS?.map(({ value, label }, index) => (
                  <option value={value} key={index}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <PremiumCard
              PREMIUM_CARD_DATA={productDetails}
              page="products"
              handleItem={handleItem}
            />
          </main>
          <Basket />
        </div>
        <ExclusiveOfferBanner />
      </div>
    </>
  );
};

export default Page;
