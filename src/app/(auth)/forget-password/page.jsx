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
import { FORGOT_PASSWORD_STEP } from "../_constant";
import VerifyOtp from "@/_components/VerifyOtp";
import ChangePasswordForm from "@/_components/ChangePasswordForm";

const Page = () => {
  const router = useRouter();
  const formConfig = useForm();
  const { handleSubmit } = formConfig;
  const [showPassword, setShowPassword] = useState(false);
  const [selectedStep, setSelectedStep] = useState(FORGOT_PASSWORD_STEP.CHANGE_PASSWORD);
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

  const handleSubmitOTP = (otp) => {
    console.log(otp, "otp");
  };

  const getTitleSubTitle = () => {
    switch (selectedStep) {
      case FORGOT_PASSWORD_STEP.FORGOT_PASSWORD:
        return {
          title: "Forgot Password",
          sub_title: "Enter your email address for reset password",
        };
      case FORGOT_PASSWORD_STEP.CHANGE_PASSWORD:
        return {
          title: "Reset Password",
          sub_title: "Reset your password",
        };
      case FORGOT_PASSWORD_STEP.OTP:
        return {
          title: "Verify Code",
          sub_title: "Verify code sent to j********n@gmail.com",
        };
    }
  };
  return (
    <div className="login-form-container">
      <AuthFormTitleSection
        title={getTitleSubTitle().title}
        subTitle={getTitleSubTitle().sub_title}
      />
      <div className="bg-white p-5 rounded-none shadow-lg w-full">
        {selectedStep === FORGOT_PASSWORD_STEP.FORGOT_PASSWORD && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <CommonTextInput
              fieldName="email"
              formConfig={formConfig}
              type="text"
              placeholder="E.g. johndeo@yopmail.com"
              rules={requiredValidation("Email")}
              label="Email"
            />
            <CommonButton type="submit" text="Login" />
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
        )}
        {selectedStep === FORGOT_PASSWORD_STEP.OTP && (
          <VerifyOtp handleSubmitOTP={handleSubmitOTP} />
        )}
        {selectedStep === FORGOT_PASSWORD_STEP.CHANGE_PASSWORD && (
          <ChangePasswordForm />
        )}
      </div>
    </div>
  );
};

export default Page;
