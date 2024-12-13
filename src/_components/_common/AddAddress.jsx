import CommonTextInput from "@/_form-fields/CommonTextInput";
import { requiredValidation } from "@/_validations/validations";
import React from "react";
import { useForm } from "react-hook-form";

function AddAddress() {
    const formConfig = useForm();
  return (
    <div>
      <h2>Add Address</h2>
      <CommonTextInput
        fieldName="address_line_1"
        formConfig={formConfig}
        type="text"
        placeholder="Address Line 1*"
        rules={requiredValidation["address_line_1"]}
      />
     <CommonTextInput
        fieldName="address_line_1"
        formConfig={formConfig}
        type="text"
        placeholder="Address Line 1*"
        rules={requiredValidation["address_line_2"]}
      />
     <CommonTextInput
        fieldName="address_line_1"
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
        fieldName="state"
        formConfig={formConfig}
        type="text"
        placeholder="State*"
        rules={requiredValidation["state"]}
      />
      <CommonTextInput
        fieldName="country"
        formConfig={formConfig}
        type="text"
        placeholder="Country*"
        rules={requiredValidation["country"]}
      />
      <Button
      className={"bg-green-500 text-white px-4 py-2 rounded-md"}
       btnText={"Save"} 
       btnType={BUTTON_TYPE.button}
      />
    </div>
  );
}

export default AddAddress;
