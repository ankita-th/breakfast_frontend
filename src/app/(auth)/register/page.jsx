"use client";
import AuthRedirectSection from "@/_components/_common/AuthRedirectSection";
import CommonButton from "@/_components/_common/CommonButton";
import AuthFormTitleSection from "@/_components/AuthFormTitleSection";
import CommonTextInput from "@/_form-fields/CommonTextInput";
import { requiredValidation } from "@/_validations/validations";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CLOSED_EYE, OPEN_EYE } from "../../../../public/images/SvgIcons";
import { INSTANCE, URLS } from "@/app/_constant/UrlConstant";
import TabSection from "@/_components/_common/TabSection";
import { INDIVIDUAL, TABS } from "../_constant";
import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { BUTTON_TYPE } from "@/_constants/constant";
import { toastMessages } from "@/_utils/toastMessage";

const Page = () => {
  const router = useRouter();
  const formConfig = useForm();
  const [loader, setLoader] = useState();
  const { handleSubmit, reset } = formConfig;
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState(INDIVIDUAL);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const onSubmit = (values) => {
    setLoader(true);
    callApi({
      endPoint: "/register/",
      method: METHODS.post,
      instanceType: INSTANCE.auth,
      payload: {
        email: values.email,
        role: activeTab,
        first_name: values?.first_name,
        last_name: values?.last_name,
      },
    })
      .then((res) => {
        setLoader(false);
        toastMessages("User logged in successfully", successType);
        router.push("/home");
      })
      .catch((err) => {
        console.log(err, "error");
        toastMessages(
          err?.response?.data?.detail || DEFAULT_ERROR_MESSAGE
        );
        setLoader(false);
      });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    reset();
  };
  return (
    <div className="login-form-container">
      <AuthFormTitleSection title={"Sign Up!"} />
      <TabSection
        activeTab={activeTab}
        handleTabChange={handleTabChange}
        tabs={TABS}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-5 rounded-none shadow-lg w-full"
      >
        <CommonTextInput
          fieldName={activeTab === INDIVIDUAL ? "first_name" : "company_name"}
          formConfig={formConfig}
          type="text"
          placeholder={
            activeTab === INDIVIDUAL ? "E.g. John" : "E.g. Microsoft"
          }
          rules={requiredValidation(
            activeTab === INDIVIDUAL ? "First Name" : "Company Name"
          )}
          label={activeTab === INDIVIDUAL ? "First Name" : "Company Name"}
        />
        {activeTab === INDIVIDUAL && (
          <CommonTextInput
            fieldName={"last_name"}
            formConfig={formConfig}
            type="text"
            placeholder={"E.g. Doe"}
            rules={requiredValidation("Last Name")}
            label={"Last Name"}
          />
        )}
        <CommonTextInput
          fieldName={activeTab === INDIVIDUAL ? "email" : "company_email"}
          formConfig={formConfig}
          type="text"
          placeholder="E.g. johndeo@yopmail.com"
          rules={requiredValidation("Email")}
          label={
            activeTab === INDIVIDUAL
              ? "Username or email address"
              : "Company Email Address"
          }
        />
        <CommonTextInput
          fieldName="phone_no"
          formConfig={formConfig}
          isNumberOnly={true}
          placeholder="E.g. 9472727712"
          rules={requiredValidation("Phone Number")}
          label="Phone Number"
        />
        <CommonTextInput
          fieldName="password"
          formConfig={formConfig}
          placeholder="********"
          rules={requiredValidation("Password")}
          label="Your password"
          type={showPassword ? "text" : "password"}
          //   for adding icons
          onIconClick={toggleShowPassword}
          icon={showPassword ? CLOSED_EYE : OPEN_EYE}
        />
        <CommonTextInput
          fieldName="confirmpassword"
          formConfig={formConfig}
          placeholder="********"
          rules={requiredValidation("Confirm Password")}
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          //   for adding icons
          onIconClick={toggleShowPassword}
          icon={showPassword ? CLOSED_EYE : OPEN_EYE}
        />
        <CommonButton
          type={BUTTON_TYPE.submit}
          className="auth-btn"
          text="Register"
          loader={loader}
          disabled={loader}
        />
        <div className="h-[70px] md:h-[20px]"></div>
        <AuthRedirectSection
          text="Already Have An Account? "
          linkText="Login"
          linkUrl={URLS.LOGIN}
          className="primary-text-color text-[16px] font-bold text-center"
        />
      </form>
    </div>
  );
};

export default Page;
