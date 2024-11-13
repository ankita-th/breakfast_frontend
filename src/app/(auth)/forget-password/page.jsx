"use client";
import AuthRedirectSection from "@/_components/_common/AuthRedirectSection";
import CommonButton from "@/_components/_common/CommonButton";
import AutFormTitleSection from "@/_components/AutFormTitleSection";
import CommonTextInput from "@/_form-fields/CommonTextInput";
import { requiredValidation } from "@/_validations/validations";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CLOSED_EYE, OPEN_EYE } from "../../../../public/images/SvgIcons";
import { URLS } from "@/app/_constant/UrlConstant";

const Page = () => {
  const router = useRouter();
  const formConfig = useForm();
  const { handleSubmit } = formConfig;
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const onSubmit = (values) => {
    login(values)
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
  return (
    <div className="login-form-container">
      <AutFormTitleSection
        title={"Forgot Password"}
        subTitle={"Enter your email address for reset password"}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-5 rounded-none shadow-lg w-full"
      >
        <CommonTextInput
          fieldName="email"
          formConfig={formConfig}
          type="text"
          placeholder="E.g. johndeo@yopmail.com"
          rules={requiredValidation("Email")}
          label="Email"
        />
        <CommonButton type="submit" className="auth-btn" text="Login" />
        <div className="h-[70px] md:h-[20px]"></div>
        <div className="flex primary-text-color">
          <AuthRedirectSection
            linkText="Login"
            linkUrl={URLS.LOGIN}
            className="primary-text-color text-[16px] font-bold text-center"
          />
          |
          <AuthRedirectSection
            linkText="Sign up"
            linkUrl={URLS.REGISTER}
            className="primary-text-color text-[16px] font-bold text-center"
          />
        </div>
      </form>
    </div>
  );
};

export default Page;
