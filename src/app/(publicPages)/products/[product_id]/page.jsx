"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import productImg from "../../../../../public/images/croissant-image.png";
import item4 from "../../../../../public/images/item4.png";
import ExclusiveOfferBanner from "@/_components/_common/ExclusiveOfferBanner";
import Button from "@/_components/_common/Button";
import CategoryCarousel from "@/_components/_common/Slider";
import ItemCounter from "@/_components/_common/ItemCounter";
import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { INSTANCE } from "@/app/_constant/UrlConstant";
import { toastMessages } from "@/_utils/toastMessage";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import SimpleSlider from "@/_components/_common/Slider";
// import CommonAutoComplete from "@/_components/_common/CommonAutoComplete";

const Page = () => {
  const pathname = usePathname();
  const product_id = pathname.split("/")[2];
  const [productListing, setProductListing] = useState();
  console.log(productListing, "productListing");
  console.log(product_id, "product_id");

  useEffect(() => {
    if (product_id) {
      callApi({
        endPoint: `/productslist/${product_id}`,
        method: METHODS.get,
        instanceType: INSTANCE.authorize,
      })
        .then((res) => {
          setProductListing(res.data);
        })
        .catch((err) => {
          toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
        });
    }
  }, []);
  return (
    <div className="p-8 m-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <SimpleSlider
           image_url={productListing?.[0]?.product_images || []} 
          />
        </div>
        <div className="lg:w-1/2">
          <div className="flex gap-2">
            <span className="underline">Home</span>
            <span className="underline">Breads</span>
            <span className="underline">Croissant</span>
          </div>
          <div className="flex ">
            <h1 className="text-2xl font-bold mb-2">{productListing?.name}</h1>
            <span>⭐⭐⭐⭐⭐</span>
            <span>(01)</span>
          </div>
          <span className="common-small-text">1 piece(0.3 Kg-0.4 kg)</span>
          <div className="text-lg text-gray-600 space-x-2">
            <span className="text-green-500">$60.00</span>
            <span className="line-through">$120.00</span>
            <span className="common-small-text bg-green-400 text-white px-2 py-1">
              50% OFF
            </span>
          </div>
          <span className="common-small-text text-black">
            (Inclusive of all taxes)
          </span>
          {/* <ItemCounter
            count={itemCount}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          /> */}
          <div className="flex items-center gap-4 mt-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded">
              Add to Basket
            </button>
            <button className="px-4 py-2 border border-green-500 text-green-500 rounded">
              Change
            </button>
          </div>
          <h1>Delivery Location</h1>
          <div className="flex space-x-1 pt-2">
            <input className="rounded-lg" />
            {/* <CommonAutoComplete 
             label={"Delivery Location"}
             name={"location"}
             control={control}
             apiKey="AIzaSyCA-pKaniZ4oeXOpk34WX5CMZ116zBvy-g"
             onPlaceSelected={(place) => console.log(place)}
            /> */}
            <Button
              className={"common-btn w-32 rounded-md"}
              btnText={"Change"}
            />
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold">Why shop from us?</h2>
            <ul className="space-y-4 text-sm mt-2">
              <li>
                Superfast Delivery
                <p className="common-small-text mt-1">
                  Freshly baked croissants. Please check the package for all
                  details before purchase.
                </p>
              </li>
              <li>
                Exclusive offers on quality items
                <p className="common-small-text mt-1">
                  Freshly baked croissants. Please check the package for all
                  details before purchase.
                </p>
              </li>
              <li>
                Always fresh & in stock
                <p className="common-small-text mt-1">
                  Freshly baked croissants. Please check the package for all
                  details before purchase.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-24">
        <Image src={item4} alt="Croissant" className="rounded-lg w-full" />
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-bold">Product Details</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ul className="space-y-2 text-sm mt-2">
            <li>Unit</li>
            <span className="common-small-text">1 piece (0.3 kg - 0.4 Kg)</span>
            <li>Shelf Life</li>
            <span className="common-small-text">2 days</span>
            <li>Country of Origin</li>
            <span className="common-small-text">Sweden</span>
          </ul>
          <ul className="space-y-2 text-sm">
            <li>How to use</li>
            <span className="common-small-text">Snacks, Breads</span>
            <li>Health Benefits</li>
            <span className="common-small-text">Vitamin A, C & B6 Rich</span>
            <li>Customer Care Details</li>
            <span className="common-small-text">Email:info@brodkorgen.se</span>
          </ul>
        </div>
        <h2>Return Policy</h2>
        <p className="common-small-text mt-1">
          Freshly baked croissants. Please check the package for all details
          before purchase.
        </p>
        <h2>Disclaimer</h2>
        <p className="common-small-text mt-1">
          This image is shown as a representation and may slightly vary from the
          actual product. Every effort is made to maintain the accuracy of all
          information displayed.
        </p>
      </div>

      <ExclusiveOfferBanner />
    </div>
  );
};

export default Page;
