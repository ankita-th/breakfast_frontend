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
import { FORGOT_PASSWORD_STEP } from "../_constant";
import VerifyOtp from "@/_components/VerifyOtp";
import ChangePasswordForm from "@/_components/ChangePasswordForm";
import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { successType, toastMessages } from "@/_utils/toastMessage";
import { DEFAULT_ERROR_MESSAGE } from "@/_constants/constant";

const Page = () => {
  const router = useRouter();
  const formConfig = useForm();
  const { handleSubmit } = formConfig;
  const [loader, setLoader] = useState();
  const [payloadValues, setPayloadValues] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedStep, setSelectedStep] = useState(
    FORGOT_PASSWORD_STEP.FORGOT_PASSWORD
  );
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const onSubmit = (values) => {
    setLoader(true);
    setPayloadValues(values);
    if (selectedStep === FORGOT_PASSWORD_STEP.FORGOT_PASSWORD) {
      callApi({
        endPoint: "/password/forget/",
        method: METHODS.post,
        instanceType: INSTANCE.auth,
        payload: values,
      })
        .then((res) => {
          console.log(res, "res");
          toastMessages(res.data.message, successType);
          setSelectedStep(FORGOT_PASSWORD_STEP.OTP);
          setLoader(false);
        })
        .catch((err) => {
          console.log(err, "error");
          setLoader(false);
          toastMessages(err?.response?.data?.error || DEFAULT_ERROR_MESSAGE);
        });
    }
  };

  const handleSubmitOTP = (otp) => {
    setLoader(true);
    if (selectedStep === FORGOT_PASSWORD_STEP.OTP) {
      callApi({
        endPoint: "/password/otp-reset/",
        method: METHODS.post,
        instanceType: INSTANCE.auth,
        payload: {
          otp: otp,
          email: payloadValues.email,
        },
      })
        .then((res) => {
          console.log(res, "res");
          toastMessages(res.data.message, successType);
          setSelectedStep(FORGOT_PASSWORD_STEP.CHANGE_PASSWORD);
          setLoader(false);
        })
        .catch((err) => {
          console.log(err, "error");
          setLoader(false);
          toastMessages(err?.response?.data?.error || DEFAULT_ERROR_MESSAGE);
        });
    }
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
              rules={requiredValidation["email"]}
              label="Email"
            />
            <CommonButton
              type="submit"
              text="Login"
              loader={loader}
              disabled={loader}
            />
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
          <VerifyOtp
            handleSubmitOTP={handleSubmitOTP}
            loader={loader}
            payloadValues={payloadValues}
          />
        )}
        {selectedStep === FORGOT_PASSWORD_STEP.CHANGE_PASSWORD && (
          <ChangePasswordForm payloadValues={payloadValues} />
        )}
      </div>
    </div>
  );
};

export default Page;
