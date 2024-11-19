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
import { URLS } from "@/app/_constant/UrlConstant";
import TabSection from "@/_components/_common/TabSection";
import { INDIVIDUAL, TABS } from "../_constant";

const Page = () => {
  const router = useRouter();
  const formConfig = useForm();
  const { handleSubmit, reset } = formConfig;
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState(INDIVIDUAL);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const onSubmit = (values) => {
    console.log(values,"values")
  
    // login(values)
      .then((res) => {
        manageUserAuthorization({
          action: "add",
          token: res?.data?.access,
          refreshToken: res?.data?.refresh,
        });

        toastMessages("User logged in successfully", successType);
        router.push("/home");
      })
      .catch((err) => {
        toastMessages(
          err?.response?.data?.non_field_errors[0] || DEFAULT_ERROR_MESSAGE
        );
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
          fieldName={activeTab === INDIVIDUAL ? "name" : "company_name"}
          formConfig={formConfig}
          type="text"
          placeholder={
            activeTab === INDIVIDUAL ? "E.g. John Doe" : "E.g. Microsoft"
          }
          rules={requiredValidation(
            activeTab === INDIVIDUAL ? "Name" : "Company Name"
          )}
          label={activeTab === INDIVIDUAL ? "Full Name" : "Company Name"}
        />
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
        <CommonButton type="submit" className="auth-btn" text="Login" />
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
