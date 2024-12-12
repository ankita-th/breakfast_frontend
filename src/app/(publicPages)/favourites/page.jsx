"use client";
import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { ORDERS, WISHLIST } from "@/_Api-Handlers/APIUrls";
import ProductCard from "@/_components/_common/Card/ProductCard";
import { DEFAULT_ERROR_MESSAGE } from "@/_constants/constant";
import { successType, toastMessages } from "@/_utils/toastMessage";
import { INSTANCE } from "@/app/_constant/UrlConstant";
import React, { Fragment, useEffect, useState } from "react";

function page() {
  const [favourites, setFavourites] = useState();

  useEffect(() => {
    callApi({
      endPoint: WISHLIST,
      method: METHODS.get,
      instanceType: INSTANCE.authorize,
    })
      .then((res) => {
        console.log(res);
        setFavourites(res.data.products);
        toastMessages(res.data.message, successType);
      })
      .catch((err) => {
        console.log(err);
        //   toastMessages(err?.response?.data?.error || DEFAULT_ERROR_MESSAGE);
      });
  }, []);

  const addToWishlist = (e, id) => {
    console.log(id, "iddd");
    e.stopPropagation();
    const token = localStorage.getItem("token");
    if (!token) {
      setShowLoginModal(true);
    } else {
      setSelectedId(id);
      setLike(!like);
      if (!like) {
        callApi({
          endPoint: WISHLIST,
          method: METHODS.post,
          instanceType: INSTANCE.authorize,
          payload: {
            products: [id],
            baskets: [],
          },
        })
          .then((res) => {
            console.log(res, "res");
            dispatch(setWishList(res.data.products));
            toastMessages("Added To Wishlist", successType);
          })
          .catch((err) => {
            // toastMessages(
            //   err?.response?.data?.non_field_errors[0] || DEFAULT_ERROR_MESSAGE
            // );
          });
      } else {
        callApi({
          endPoint: WISHLIST,
          method: METHODS.delete,
          instanceType: INSTANCE.authorize,
          payload: {
            products: [id],
            baskets: [0],
          },
        })
          .then((res) => {
            toastMessages(res.data.message, successType);
          })
          .catch((err) => {
            console.log(err, "eror");
            toastMessages(
              err?.response?.data?.non_field_errors[0] || DEFAULT_ERROR_MESSAGE
            );
          });
      }
    }
  };

  return (
    <div className=" p-6 ">
      <div className="mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          Favorite Products
          <span className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {favourites?.length}
          </span>
        </h2>
        <div className="flex gap-3 mt-4">
          <button className="flex items-center gap-2 text-sm border rounded-full px-3 py-1.5">
            <span className="text-green-600">Filter</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <button className="flex items-center gap-2 text-sm bg-green-500 text-white rounded-full px-3 py-1.5">
            Pure Veg
            <span className="text-lg">&times;</span>
          </button>
          <button className="flex items-center gap-2 text-sm border rounded-full px-3 py-1.5">
            520 - 200
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {favourites?.map((item, idx) => (
          <Fragment key={idx}>
            <ProductCard
              page={"products"}
              item={item}
              addToWishlist={addToWishlist}
              // like={like}
              // selectedId={selectedId}
              // handleItem={handleItem}
              // addToBasket={addToBasket}
              // handleCart={handleCart}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default page;
