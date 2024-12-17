import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { ADD_ADDRESS, WISHLIST } from "@/_Api-Handlers/APIUrls";
import AddAddress from "@/_components/_common/AddAddress";
import Button from "@/_components/_common/Button";
import { BUTTON_TYPE } from "@/_constants/constant";
import { successType, toastMessages } from "@/_utils/toastMessage";
import { INSTANCE } from "@/app/_constant/UrlConstant";
import { LOCATION_ICON } from "@/Assets/SVGIcons";
import { getAddressList } from "@/Redux/productDetailsSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function page() {
  const {addressList} = useSelector(state => state.product)
  const dispatch = useDispatch();
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [isEdit, setIsEdit] = useState({
    id: "",
    edit: false,
  });

  useEffect(() => {
    dispatch(getAddressList())
  }, [dispatch]);

  const handleAddress = () => {
    setShowAddAddress(!showAddAddress);
  };

  const handleEdit = (id) => {
    setIsEdit({ edit: true, id: id });
    setShowAddAddress(true);
  };

  const handleDelete = async (id) => {
    await callApi({
      endPoint: `/profile/addresses/${id}/`,
      method: METHODS.delete,
      instanceType: INSTANCE.authorize,
    })
      .then((res) => {
        console.log(res);
        dispatch(getAddressList())
        toastMessages(res.data.message, successType);
      })
      .catch((err) => {
        console.log(err);
        //   toastMessages(err?.response?.data?.error || DEFAULT_ERROR_MESSAGE);
      });

  };

  return (
    <div className="flex flex-wrap gap-6">
      {!showAddAddress && (
        <Button
          btnClick={handleAddress}
          className={"bg-green-500 text-white px-4 py-2 rounded-md"}
          btnText="Add Address"
          btnType={BUTTON_TYPE.button}
        />
      )}

      {showAddAddress ? (
        <>
          <AddAddress setShowAddAddress={setShowAddAddress} isEdit={isEdit} />
        </>
      ) : (
        addressList?.map((card, index) => (
          <div>
            {card?.is_default && (
              <span className="bg-green-500 text-white px-4 py-2 rounded-md">
                Default
              </span>
            )}
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 shadow-md flex gap-4 w-full bg-white"
            >
              <div className="bg-gray-300 p-2 w-min h-min">{LOCATION_ICON}</div>
              <div className="flex flex-col justify-between w-full gap-4">
                <div className="text-black text-sm">
                  {card?.street_address},{card?.city},{card?.state},
                  {card?.country},{card?.postal_code}
                </div>
                <div className="flex gap-4">
                  <div
                    className="text-green-600 text-sm cursor-pointer"
                    onClick={() => handleEdit(card?.id)}
                  >
                    EDIT
                  </div>
                  <div
                    className="text-gray-400 text-sm cursor-pointer"
                    onClick={() => handleDelete(card?.id)}
                  >
                    DELETE
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default page;
