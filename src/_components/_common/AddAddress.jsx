import { BUTTON_TYPE, DEFAULT_ERROR_MESSAGE } from "@/_constants/constant";
import CommonTextInput from "@/_form-fields/CommonTextInput";
import { requiredValidation } from "@/_validations/validations";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { INSTANCE } from "@/app/_constant/UrlConstant";
import { successType, toastMessages } from "@/_utils/toastMessage";
import { ADD_ADDRESS } from "@/_Api-Handlers/APIUrls";
import { getAddressList } from "@/Redux/productDetailsSlice";
import { useDispatch } from "react-redux";

function AddAddress({setShowAddAddress , isEdit}) {
  const formConfig = useForm();
  const dispatch = useDispatch();
  const { handleSubmit,setValue } = formConfig;
  const [saveAddress, setSaveAddress] = useState(false);

  useEffect(()=>{
    if(isEdit?.edit){
      callApi({
        endPoint: `/profile/addresses/${isEdit?.id}`,
        method: METHODS.get,
        instanceType: INSTANCE.authorize,
      })
      .then((res) => {
        setValue("address_line_1", res.data.address_line1);
        setValue("address_line_2", res.data.address_line2);
        setValue("address_line_3", res.data.address_line3);
        setValue("city", res.data.city);
        setValue("zip_code", res.data.zipcode);
        setSaveAddress(res?.data.is_default)
        dispatch(getAddressList())
      })
      .catch((err) => {
        console.log(err)
        // toastMessages(err?.response?.data?.detail || DEFAULT_ERROR_MESSAGE);
      })
    }
  },[isEdit])




  const onSubmit = async(data) => {
    console.log(data, "data")
    if(isEdit?.edit){
       callApi({
        endPoint: `/profile/addresses/${isEdit?.id}/`,
        method: METHODS.patch,
        instanceType: INSTANCE.authorize,
        payload:
        {
          "address_line1": data.address_line_1,
          "address_line2": data.address_line_2,
          "address_line3": data.address_line_3,
          "city": data.city,
          "zipcode": data.zip_code,
          "is_default": saveAddress
        }
      })
        .then((res) => {
          console.log(res);
          setShowAddAddress(false)
          dispatch(getAddressList())
          toastMessages(res.data.message, successType);
        })
        .catch((err) => {
          console.log(err);
          //   toastMessages(err?.response?.data?.error || DEFAULT_ERROR_MESSAGE);
        });
      }else{
        await callApi({
          endPoint: "/profile/addresses/",
          method: METHODS.post,
          instanceType: INSTANCE.authorize,
          payload:
          {
            "address_line1": data.address_line_1,
            "address_line2": data.address_line_2,
            "address_line3": data.address_line_3,
            "city": data.city,
            "zipcode": data.zip_code,
            "is_default": saveAddress
          }
        })
          .then((res) => {
            console.log(res, "data");
            setShowAddAddress(false)
            dispatch(getAddressList())
            toastMessages(res.data.message, successType);
          })
          .catch((err) => {
            toastMessages(err?.response?.data?.detail || DEFAULT_ERROR_MESSAGE);
          })
      }      
  };
  const handleSetAsDefault = (e) => {
    setSaveAddress(!saveAddress);
  };
  return (
    <div>
      <h2>Add Address</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CommonTextInput
          fieldName="address_line_1"
          formConfig={formConfig}
          type="text"
          placeholder="Address Line 1*"
          rules={requiredValidation["address_line_1"]}
        />
        <CommonTextInput
          fieldName="address_line_2"
          formConfig={formConfig}
          type="text"
          placeholder="Address Line 1*"
          rules={requiredValidation["address_line_2"]}
        />
        <CommonTextInput
          fieldName="address_line_3"
          formConfig={formConfig}
          type="text"
          placeholder="Address Line 1*"
          rules={requiredValidation["address_line_3"]}
        />
        <CommonTextInput
          fieldName="city"
          formConfig={formConfig}
          type="text"
          placeholder="City*"
          rules={requiredValidation["city"]}
        />
        <CommonTextInput
          fieldName="zip_code"
          formConfig={formConfig}
          type="text"
          placeholder="zip_code*"
          rules={requiredValidation["zip_code"]}
          isNumberOnly={true}
        />
        {/* <CommonTextInput
          fieldName="state"
          formConfig={formConfig}
          type="text"
          placeholder="State*"
          rules={requiredValidation["state"]}
        /> */}
        {/* <CommonTextInput
          fieldName="country"
          formConfig={formConfig}
          type="text"
          placeholder="Country*"
          rules={requiredValidation["country"]}
        /> */}
        <Button
          className={"bg-green-500 text-white px-4 py-2 rounded-md"}
          btnText={"Save"}
          btnType={BUTTON_TYPE.submit}
        />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          onChange={(e) => handleSetAsDefault(e)}
          id="flexCheckDefault"
          checked={saveAddress}
        />
        <label
          className="text-[16px] font-normal ml-1"
          htmlFor="flexCheckDefault"
        >
          Set as address default
        </label>
      </form>
    </div>
  );
}

export default AddAddress;
