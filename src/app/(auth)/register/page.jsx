"use client";
import AuthRedirectSection from "@/_components/_common/AuthRedirectSection";
import CommonButton from "@/_components/_common/CommonButton";
import AuthFormTitleSection from "@/_components/AuthFormTitleSection";
import CommonTextInput from "@/_form-fields/CommonTextInput";
import { requiredValidation } from "@/_validations/validations";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CLOSED_EYE, OPEN_EYE } from "../../../../public/images/SvgIcons";
import { INSTANCE, URLS } from "@/app/_constant/UrlConstant";
import TabSection from "@/_components/_common/TabSection";
import { INDIVIDUAL, TABS } from "../_constant";
import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { BUTTON_TYPE, DEFAULT_ERROR_MESSAGE } from "@/_constants/constant";
import { successType, toastMessages } from "@/_utils/toastMessage";
import Button from "@/_components/_common/Button";
import PasswordInputField from "@/_components/_common/PasswordInputField";
import { PASSWORD_REGEX } from "@/_validations/authValidations";
import { PASSWORD_PATTEN_ERROR } from "@/app/_constant/ErrorMessagesConstant";
import { PENDING_USER } from "@/_Api-Handlers/APIUrls";

const Page = () => {
  const router = useRouter();
  const formConfig = useForm();
  const [loader, setLoader] = useState();
  const {
    handleSubmit,
    setValue,
    watch,
    register,
    setError,
    formState: { errors },
  } = formConfig;
  const [activeVerify, setActiveVerify] = useState(true);
  const [showPass, setShowPass] = useState({
    password: false,
    confirm_password: false,
  });
  const [activeTab, setActiveTab] = useState(INDIVIDUAL);
  const [formDetails, setFormDetails] = useState();
  const [verifyMessage, setVerifyMessage] = useState(false);
  const searchParams = useSearchParams();
  const key = searchParams.get("id");

  useEffect(() => {
    if (formDetails) {
      setValue("email", formDetails?.email);
      setValue("first_name", formDetails.first_name);
      setValue("last_name", formDetails.last_name);
    }
  }, [formDetails]);

  console.log(activeVerify, "activeVerify");
  useEffect(() => {
    if (key) {
      callApi({
        endPoint: `/register/${key}/`,
        method: METHODS.get,
        instanceType: INSTANCE.auth,
      })
        .then((res) => {
          console.log(res.data.data, "res");
          setFormDetails(res.data.data);
        })
        .catch((err) => {
          toastMessages(err?.response?.data?.error || DEFAULT_ERROR_MESSAGE);
        });
    }
  }, [key]);

  const handleChangePassword = (value, type) => {
    const password = watch("password");
    const confirmPassword = watch("confirm_password");
    if (type === "password" && password !== undefined) {
      if (value === confirmPassword) {
        if (confirmPassword.length) {
          clearErrors("confirm_password");
        }
      } else {
        if (confirmPassword?.length) {
          setError("confirm_password", {
            type: "manual",
            message: "password and confirm password must match",
          });
        }
      }
    }
  };

  const handleToglePassword = (type) => {
    setShowPass({ ...showPass, [type]: !showPass?.[type] });
  };

  const onSubmit = (values) => {
    setLoader(true);
    setTimeout(setActiveVerify(false), 10000);
    if (key) {
      callApi({
        endPoint: `/signup/${key}/`,
        method: METHODS.post,
        instanceType: INSTANCE.auth,
        payload: {
          phone_number: values.phone_no,
          password: values?.password,
          confirm_password: values?.confirm_password,
        },
      })
        .then((res) => {
          localStorage.setItem("token", res.data.data.tokens.access);
          localStorage.setItem("refresh_token", res.data.data.tokens.refresh);
          toastMessages("User logged in successfully", successType);
          setLoader(false);
          router.push("/home");
        })
        .catch((err) => {
          setLoader(false);
          toastMessages(err?.response?.data?.error || DEFAULT_ERROR_MESSAGE);
        });
    } else {
      callApi({
        endPoint: PENDING_USER,
        method: METHODS.post,
        instanceType: INSTANCE.auth,
        payload: values,
      })
        .then((res) => {
          setVerifyMessage(true);
          setLoader(false);
          toastMessages(res.data.message, successType);
        })
        .catch((err) => {
          setLoader(false);
          toastMessages(err?.response?.data?.message || DEFAULT_ERROR_MESSAGE);
        });
    }
    // }
  };

  return (
    <div className="login-form-container">
      <AuthFormTitleSection title={"Sign Up!"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-5 rounded-none shadow-lg w-full"
      >
        <CommonTextInput
          fieldName={"first_name"}
          formConfig={formConfig}
          type="text"
          placeholder={"E.g. John"}
          rules={requiredValidation.first_name}
          label={"First Name"}
          disabled={key !== null}
        />
        <CommonTextInput
          fieldName={"last_name"}
          formConfig={formConfig}
          type="text"
          placeholder={"E.g. Doe"}
          rules={requiredValidation.last_name}
          disabled={key !== null}
          label={"Last Name"}
        />
        <div className="pr-14">
          <div className="relative">
            <CommonTextInput
              fieldName={"email"}
              disabled={key !== null}
              formConfig={formConfig}
              type="text"
              placeholder="E.g. johndeo@yopmail.com"
              rules={requiredValidation["email"]}
              label={"Username or email address"}
            />
            {/* <span
              className={
                "absolute right-0 top-1/2 transform -translate-y-1/2 text-green-500 underline rounded-none w-14 h-11 bg-gray-100 focus:bg-transparent mt-2"
              }
            >
              {key !== null ? "✅VERIFIED" : "VERIFY"}
            </span> */}
          </div>

          {verifyMessage && (
            <p className="text-red-500">
              {"Email verification link has been sent to your email."}
            </p>
          )}
        </div>

        {key !== null && (
          <div>
            <CommonTextInput
              fieldName="phone_no"
              formConfig={formConfig}
              disabled={key === null}
              isNumberOnly={true}
              placeholder="E.g. 9472727712"
              rules={requiredValidation["phone_no"]}
              label="Phone Number"
            />
            {/* <CommonTextInput
          fieldName="password"
          formConfig={formConfig}
          disabled={key === null}
          placeholder="********"
          rules={requiredValidation["password"]}
          
          label="Your password"
          type={showPassword.password ? "text" : "password"}
          onIconClick={() => toggleShowPassword("password")}
          icon={showPassword.password ? CLOSED_EYE : OPEN_EYE}
        /> */}
            <div className="label">Password</div>
            <PasswordInputField
              register={register("password", {
                ...requiredValidation["password"],
                pattern: {
                  value: PASSWORD_REGEX,
                  message: PASSWORD_PATTEN_ERROR,
                },
                onChange: (e) => {
                  handleChangePassword(e.target.value, "password");
                  setValue("password", e.target.value);
                },
              })}
              type={showPass?.password ? "text" : "password"}
              placeholder={"Enter your password"}
              toggleType={() => handleToglePassword("password")}
              icon={showPass?.password ? CLOSED_EYE : OPEN_EYE}
              errors={errors?.["password"]?.message}
            />
            <div className="label">Confirm Password</div>
            <PasswordInputField
              register={register("confirm_password", {
                ...requiredValidation["confirm_password"],
                validate: (value) =>
                  value === watch("password") ||
                  "Password and confirm password must match",
                onChange: (e) => {
                  handleChangePassword(e.target.value, "confirm_password");
                  setValue("confirm_password", e.target.value);
                },
              })}
              type={showPass?.confirm_password ? "text" : "password"}
              placeholder={"Confirm your password"}
              toggleType={() => handleToglePassword("confirm_password")}
              icon={showPass?.confirm_password ? CLOSED_EYE : OPEN_EYE}
              errors={errors?.["confirm_password"]?.message}
            />
          </div>
        )}
        <CommonButton
          type={BUTTON_TYPE.submit}
          className="auth-btn"
          text={key !== null ? "Register" : "Verify your Email"}
          loader={loader}
          // disabled={key == null}
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
