"use client";
import { CART } from "@/Assets/Icons/Svg";
import React, { use, useEffect, useState } from "react";
import { OPEN_EYE } from "../../../../../public/images/SvgIcons";
import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { INSTANCE } from "@/app/_constant/UrlConstant";
import { successType, toastMessages } from "@/_utils/toastMessage";
import { ORDERS } from "@/_Api-Handlers/APIUrls";
import { DEFAULT_ERROR_MESSAGE } from "@/_constants/constant";
import { connect } from "react-redux";
import { LOCATION_ICON, QUESTION_MARK_ICON } from "@/Assets/SVGIcons";

function page({toggleSidebar}) {
  const [orders, setOrders] = useState();
  console.log(orders, "orders");
  useEffect(() => {
    callApi({
      endPoint: ORDERS,
      method: METHODS.get,
      instanceType: INSTANCE.authorize,
    })
      .then((res) => {
        console.log(res, "res");
        toastMessages(res.data.message, successType);
        setOrders(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        //   toastMessages(err?.response?.data?.error || DEFAULT_ERROR_MESSAGE);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 w-full">
      <h1>In Transit Orders</h1>
      {orders?.length > 0 ? (
        orders?.map((order) => (
          <div
            key={order.id}
            className="border border-[#ddd] rounded-xl p-4 mb-4 flex justify-between"
          >
            <div>
              <div className="mb-2 text-[#555] flex items-center gap-2">
                {LOCATION_ICON}
                {/* Order #{order.id} | {order.date}, {order.time} */}
                <div className="bg-[#CCFFCF] text-[#08A300] font-bold px-2 py-1 rounded-lg ml-4">
                  {order.status}
                </div>
              </div>
              <p className="text-[#555] text-sm mb-1">{order.shipping_address}</p>
              <p className="text-black text-sm font-extrabold mb-1">
                Items Order
              </p>
              <p className="text-[#555] text-sm">{order.items?.map((item) => item.quantity)} Units</p>
            </div>
            <div className="flex flex-col justify-between items-end mt-4 py-4">
              <div className="text-[#333] text-sm">
                <span className="text-black font-extrabold text-sm">
                  Total Paid:
                </span>
                {order.total_amount}
              </div>
              <div className="flex gap-2 mt-2">
                <div className="rounded-full p-2 bg-[#F2FFEC]" onClick={toggleSidebar}>
                  {OPEN_EYE}
                </div>
                <div className="rounded-full p-2 bg-[#F2FFEC]">{CART}</div>
                <div className="rounded-full p-2 bg-[#F2FFEC]">
                {QUESTION_MARK_ICON}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No past orders.</p>
      )}
      <h1>In Past Orders</h1>
      {orders?.length > 0 ? (
        orders?.map((order) => (
          <div
            key={order.id}
            className="border border-[#ddd] rounded-xl p-4 mb-4 flex justify-between"
          >
            <div>
              <div className="mb-2 text-[#555] flex items-center gap-2">
                {LOCATION_ICON}
                {/* Order #{order.id} | {order.date}, {order.time} */}
                <div className="bg-[#CCFFCF] text-[#08A300] font-bold px-2 py-1 rounded-lg ml-4">
                  {order.status}
                </div>
              </div>
              <p className="text-[#555] text-sm mb-1">{order.shipping_address}</p>
              <p className="text-black text-sm font-extrabold mb-1">
                Items Order
              </p>
              <p className="text-[#555] text-sm">{order.items?.map((item) => item.quantity)} Units</p>
            </div>
            <div className="flex flex-col justify-between items-end mt-4 py-4">
              <div className="text-[#333] text-sm">
                <span className="text-black font-extrabold text-sm">
                  Total Paid:
                </span>
                {order.total_amount}
              </div>
              <div className="flex gap-2 mt-2">
                <div className="rounded-full p-2 bg-[#F2FFEC]">
                  {OPEN_EYE}
                </div>
                <div className="rounded-full p-2 bg-[#F2FFEC]">{CART}</div>
                <div className="rounded-full p-2 bg-[#F2FFEC]">
                    {QUESTION_MARK_ICON}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No past orders.</p>
      )}
    </div>
  );
}

export default page;
