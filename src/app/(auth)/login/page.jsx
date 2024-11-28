"use client";
import AuthRedirectSection from "@/_components/_common/AuthRedirectSection";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CommonButton from "@/_components/_common/CommonButton";
import { callApi, login, METHODS } from "@/_Api-Handlers/apiFunctions";
import { useRouter } from "next/navigation";
import { BUTTON_TYPE, DEFAULT_ERROR_MESSAGE } from "@/_constants/constant";
import CommonTextInput from "@/_form-fields/CommonTextInput";
import { manageUserAuthorization } from "@/_utils/helpers";
import { successType, toastMessages } from "@/_utils/toastMessage";
import { requiredValidation } from "@/_validations/validations";
import { CLOSED_EYE, OPEN_EYE } from "../../../../public/images/SvgIcons";
import AuthFormTitleSection from "@/_components/AuthFormTitleSection";
import { INSTANCE, URLS } from "@/app/_constant/UrlConstant";
import { LoginValidations } from "@/_validations/authValidations";

const Login = () => {
  const router = useRouter();
  const formConfig = useForm();
  const [loader, setLoader] = useState(false);
  const { handleSubmit } = formConfig;
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const onSubmit = (values) => {
    setLoader(true);
    // login(values)
    callApi({
      endPoint: "/login/",
      method: METHODS.post,
      instanceType: INSTANCE.auth,
      payload: {
        email: values.user_name,
        password: values.password,
      },
    })
      .then((res) => {
        localStorage.setItem("token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        setLoader(false);
        toastMessages("User logged in successfully", successType);
        router.push("/home");
      })
      .catch((err) => {
        console.log(err, "error");
        toastMessages(
          err?.response?.data?.non_field_errors[0] || DEFAULT_ERROR_MESSAGE
        );
        setLoader(false);
      });
  };
  return (
    <div className="login-form-container">
      <AuthFormTitleSection title={"Login!"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-5 rounded-none shadow-lg w-full"
      >
        <CommonTextInput
          fieldName={"user_name"}
          formConfig={formConfig}
          type="text"
          placeholder="Enter username"
          rules={LoginValidations.email}
          label="Username or email address"
        />

        <CommonTextInput
          fieldName="password"
          formConfig={formConfig}
          placeholder="Enter Password"
          rules={LoginValidations.password}
          label="Your password"
          type={showPassword ? "text" : "password"}
          //   for adding icons
          onIconClick={toggleShowPassword}
          icon={showPassword ? CLOSED_EYE : OPEN_EYE}
        />
        <div className="text-[16px] font-normal ml-1 flex justify-between items-baseline">
          <div className="text-[16px] font-normal ml-1 sm:flex-col">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="text-[16px] font-normal ml-1"
              htmlFor="flexCheckDefault"
            >
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
        <CommonButton
          type={BUTTON_TYPE.submit}
          className="auth-btn"
          text="Login"
          loader={loader}
          disabled={loader}
        />
        <div className="h-[70px] md:h-[20px]"></div>
        <AuthRedirectSection
          text="Don't have an account? "
          linkText="Sign up"
          linkUrl={URLS.REGISTER}
          className="primary-text-color text-[16px] font-bold text-center"
        />
      </form>
    </div>
  );
};

export default Login;
