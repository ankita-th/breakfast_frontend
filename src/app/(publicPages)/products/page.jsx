import Basket from "@/_components/_common/Basket";
import ExclusiveOfferBanner from "@/_components/_common/ExclusiveOfferBanner";
import ProductCard from "@/_components/_common/ProductCard";
import Sidebar from "@/_components/SideBar";
import React from "react";
import productImg from "../../../Assets/images/dough.png";

const Page = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              name="Brown Bread"
              price="50.00"
              image={productImg}
              unit="unit"
            />
          </div>
        </main>
        <Basket />
      </div>
      <ExclusiveOfferBanner />
    </div>
  );
};

export default Page;
