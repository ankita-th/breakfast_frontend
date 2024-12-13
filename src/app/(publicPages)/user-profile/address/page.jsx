import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { ADD_ADDRESS, WISHLIST } from "@/_Api-Handlers/APIUrls";
import AddAddress from "@/_components/_common/AddAddress";
import Button from "@/_components/_common/Button";
import { BUTTON_TYPE } from "@/_constants/constant";
import { successType, toastMessages } from "@/_utils/toastMessage";
import { INSTANCE } from "@/app/_constant/UrlConstant";
import { LOCATION_ICON } from "@/Assets/SVGIcons";
import React, { useEffect, useState } from "react";

function page() {
  const [addresses, setAddresses] = useState();
  console.log(addresses, "addresses");

  useEffect(() => {
    callApi({
      endPoint: ADD_ADDRESS,
      method: METHODS.get,
      instanceType: INSTANCE.authorize,
    })
      .then((res) => {
        console.log(res);
        setAddresses(res.data.results);
        toastMessages(res.data.message, successType);
      })
      .catch((err) => {
        // console.log(err);
        //   toastMessages(err?.response?.data?.error || DEFAULT_ERROR_MESSAGE);
      });
  }, []);
  // const addresses = [
  //   {
  //     address: "Storgatan 45, 2 tr (2nd floor), 123 45 Göteborg, Sweden",
  //   },
  //   {
  //     address: "Storgatan 45, 2 tr (2nd floor), 123 45 Göteborg, Sweden",
  //   },
  //   {
  //     address: "Storgatan 45, 2 tr (2nd floor), 123 45 Göteborg, Sweden",
  //   },
  //   {
  //     address: "Storgatan 45, 2 tr (2nd floor), 123 45 Göteborg, Sweden",
  //   },
  //   {
  //     address: "Storgatan 45, 2 tr (2nd floor), 123 45 Göteborg, Sweden",
  //   },
  //   {
  //     address: "Storgatan 45, 2 tr (2nd floor), 123 45 Göteborg, Sweden",
  //   },
  // ];

  const handleDelete = (id) => {
    console.log(`Delete card with id: ${id}`);
  };

  const handleMakeDefault = (id) => {
    console.log(`Make card with id: ${id} default`);
  };
  return (
    // <div>
    //   <div className="flex flex-wrap gap-6">
    //     {addresses?.map((card, index) => (
    //       <div
    //         key={index}
    //         className="border border-gray-300 rounded-lg p-4 shadow-md flex gap-4 w-2/5 bg-white"
    //       >
    //         <div className="bg-gray-300 p-2 w-min h-min">
    //           {LOCATION_ICON}
    //         </div>
    //         <div className="flex flex-col justify-between w-4/5 gap-4">
    //           <div className="text-black text-sm">
    //             {/* {card?.street_address},{card?.city},{card?.state},{card?.country},{card?.postal_code} */}
    //             "Storgatan 45, 2 tr (2nd floor), 123 45 Göteborg, Sweden",

    //           </div>
    //           <div className="flex gap-4">
    //             <div className="text-green-600 text-sm cursor-pointer">
    //               EDIT
    //             </div>
    //             <div className="text-gray-400 text-sm cursor-pointer">
    //               DELETE
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <Button
    //   className={"bg-green-500 text-white px-4 py-2 rounded-md"}
    //    btnText={"Add Address"} 
    //    btnType={BUTTON_TYPE.button}
    //   />
    // </div>
    <div>
      <div className="flex flex-wrap gap-6">
        {addresses?.map((card, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 shadow-md flex gap-4 w-full bg-white"
          >
            <div className="bg-gray-300 p-2 w-min h-min">
              {LOCATION_ICON}
            </div>
            <div className="flex flex-col justify-between w-full gap-4">
              <div className="text-black text-sm">{card?.street_address},{card?.city},{card?.state},{card?.country},{card?.postal_code}</div>
              <div className="flex gap-4">
                <div className="text-green-600 text-sm cursor-pointer">
                  EDIT
                </div>
                <div className="text-gray-400 text-sm cursor-pointer">
                  DELETE
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
      className={"bg-green-500 text-white px-4 py-2 rounded-md"}
       btnText={"Add Address"} 
       btnType={BUTTON_TYPE.button}
      />
      <AddAddress/>
    </div>
  );
}

export default page;
