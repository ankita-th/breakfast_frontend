"use client";
import AuthRedirectSection from "@/_components/_common/AuthRedirectSection";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CommonButton from "@/_components/_common/CommonButton";
import { login } from "@/_Api-Handlers/apiFunctions";
import { useRouter } from "next/navigation";
import { DEFAULT_ERROR_MESSAGE } from "@/_constants/constant";
import CommonTextInput from "@/_form-fields/CommonTextInput";
import { manageUserAuthorization } from "@/_utils/helpers";
import { toastMessages } from "@/_utils/toastMessage";
import { requiredValidation } from "@/_validations/validations";
import { CLOSED_EYE, OPEN_EYE } from "../../../../public/images/SvgIcons";
import AutFormTitleSection from "@/_components/AutFormTitleSection";
import { URLS } from "@/app/_constant/UrlConstant";

const Login = () => {
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
      <AutFormTitleSection title={"Login!"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-5 rounded-none shadow-lg w-full"
      >
        <CommonTextInput
          fieldName="email"
          formConfig={formConfig}
          type="text"
          placeholder="Enter Email"
          rules={requiredValidation("Email")}
          label="Username or email address"
        />
        <CommonTextInput
          fieldName="password"
          formConfig={formConfig}
          placeholder="Enter Password"
          rules={requiredValidation("Password")}
          label="Your password"
          type={showPassword ? "text" : "password"}
          //   for adding icons
          onIconClick={toggleShowPassword}
          icon={showPassword ? CLOSED_EYE : OPEN_EYE}
        />
        <div className="text-[16px] font-normal ml-1 flex justify-between items-baseline">
          <div class="text-[16px] font-normal ml-1 sm:flex-col">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="text-[16px] font-normal ml-1" for="flexCheckDefault">
              Remember Me
            </label>
          </div>
          <AuthRedirectSection
            text=""
            linkText="Forgot your password ?"
            linkUrl={URLS.FORGET_PASSWORD}
            className="text-right primary-text-color text-[16px] font-normal"
          />
        </div>
        <CommonButton type="submit" className="auth-btn" text="Login" />
        <div className="h-[70px] md:h-[20px]"></div>
        <AuthRedirectSection
          text="Don't have an acount? "
          linkText="Sign up"
          linkUrl={URLS.REGISTER}
          className="primary-text-color text-[16px] font-bold text-center"
        />
      </form>
    </div>
  );
};

export default Login;
