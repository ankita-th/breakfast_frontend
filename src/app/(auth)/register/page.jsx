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

const Page = () => {
  const router = useRouter();
  const formConfig = useForm();
  const [loader, setLoader] = useState();
  const { handleSubmit, setValue, watch } = formConfig;
  const [activeVerify, setActiveVerify] = useState(true);
  const [showPassword, setShowPassword] = useState({
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
      setValue("emial", formDetails?.email);
      setValue("first", formDetails.first_name);
      setValue("last", formDetails.last_name);
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

  const toggleShowPassword = (type) => {
    setShowPassword({ ...showPassword, [type]: !showPassword?.[type] });
  };

  const onSubmit = (values) => {
    setTimeout(setActiveVerify(false), 10000);
    if (key) {
      callApi({
        endPoint: `/signup/${key}/`,
        method: METHODS.post,
        instanceType: INSTANCE.auth,
        payload: {
          phone_number: values.phone_no,
          password: values?.password,
          confirm_password: values?.confirmpassword,
        },
      })
        .then((res) => {
          localStorage.setItem("token", res.data.data.tokens.access);
          localStorage.setItem("refresh_token", res.data.data.tokens.refresh);
          toastMessages("User logged in successfully", successType);
          router.push("/home");
        })
        .catch((err) => {
          setLoader(false);
          toastMessages(err?.response?.data?.error || DEFAULT_ERROR_MESSAGE);
        });
    } else {
      callApi({
        endPoint: "/pendinguser/",
        method: METHODS.post,
        instanceType: INSTANCE.auth,
        payload: {
          email: values.emial,
          first_name: values?.first,
          last_name: values?.last,
        },
      })
        .then((res) => {
          setVerifyMessage(true);
          toastMessages(res.data.message, successType);
        })
        .catch((err) => {
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
          fieldName={"first"}
          formConfig={formConfig}
          type="text"
          placeholder={"E.g. John"}
          rules={requiredValidation.first}
          label={"First Name"}
          disabled={key !== null}
        />
        <CommonTextInput
          fieldName={"last"}
          formConfig={formConfig}
          type="text"
          placeholder={"E.g. Doe"}
          rules={requiredValidation.last}
          disabled={key !== null}
          label={"Last Name"}
        />
        <div className="relative pr-14">
          <CommonTextInput
            fieldName={"emial"}
            disabled={key !== null}
            formConfig={formConfig}
            type="text"
            placeholder="E.g. johndeo@yopmail.com"
            rules={requiredValidation["emial"]}
            label={"Username or email address"}
          />

          {verifyMessage && (
            <p className="text-red-500">
              {"Email verification link has been sent to your email."}
            </p>
          )}

          <Button
            btnText={key !== null ? "✅VERIFIED" : "VERIFY"}
            btnType="submit"
            className={
              "absolute right-0 top-1/2 transform -translate-y-1/2 text-green-500 underline rounded-none w-14 h-11 bg-gray-100 focus:bg-transparent mt-2"
            }
            // className={activeVerify==false ?"cursor-not-allowed absolute right-0 top-1/2 transform -translate-y-1/2 underline text-green-500 ":"absolute right-0 top-1/2 transform -translate-y-1/2 underline text-green-500"}
            disabled={activeVerify ? false : true}
            // btnClick={handleVerification}
          />
        </div>

        <CommonTextInput
          fieldName="phone_no"
          formConfig={formConfig}
          disabled={key === null}
          isNumberOnly={true}
          placeholder="E.g. 9472727712"
          rules={requiredValidation["Phone Number"]}
          label="Phone Number"
        />
        <CommonTextInput
          fieldName="password"
          formConfig={formConfig}
          disabled={key === null}
          placeholder="********"
          rules={requiredValidation["Password"]}
          label="Your password"
          type={showPassword.password ? "text" : "password"}
          onIconClick={() => toggleShowPassword("password")}
          icon={showPassword.password ? CLOSED_EYE : OPEN_EYE}
        />
        <CommonTextInput
          fieldName="confirmpassword"
          formConfig={formConfig}
          disabled={key === null}
          placeholder="********"
          rules={requiredValidation["Confirm Password"]}
          label="Confirm Password"
          type={showPassword.confirm_password ? "text" : "password"}
          onIconClick={() => toggleShowPassword("confirm_password")}
          icon={showPassword.confirm_password ? CLOSED_EYE : OPEN_EYE}
        />
        <CommonButton
          type={BUTTON_TYPE.submit}
          className="auth-btn"
          text="Register"
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
