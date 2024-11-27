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
  const { handleSubmit, setValue } = formConfig;
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm_password: false,
  });
  const [activeTab, setActiveTab] = useState(INDIVIDUAL);
  const [verifyMessage, setVerifyMessage] = useState(false);
  // const toggleShowPassword = () => {
  //   setShowPassword((prev) => !prev);
  // };


  const toggleShowPassword = (type) => {
    console.log(type,"type")

    setShowPassword({ ...showPassword, [type]: !showPassword?.[type] });
  };
  const searchParams = useSearchParams();
  const key = searchParams.get('id')
  console.log(key, "Key");
 


  // const [key, setKey] = useState(null);

  // useEffect(() => {
  //   const rawQueryString = window.location.search; // Get the raw query string
  //   const params = new URLSearchParams(rawQueryString); // Parse it
  //   const rawKey = params.get('id'); // Access the encoded value
  //   console.log(rawKey,"rawKey")
  //   setKey(rawKey); // This will retain %2F
  // }, []);


  console.log(key,"key")
  useEffect(()=>{
    const email = localStorage.getItem("email")
    const first_name = localStorage.getItem("first_name")
    const last_name = localStorage.getItem("last_name")
    setValue("email",email)
    setValue("first_name",first_name)
    setValue("last_name",last_name)
  })
  const onSubmit = (values) => {
    console.log(values,"values")
    setLoader(true);
    if (key) {
      callApi({
        endPoint: `/complete-registration/${key}/`,
        method: METHODS.post,
        instanceType: INSTANCE.auth,
        payload: {
          phone_number: values.phone_no,
          password: values?.password,
          confirm_password: values?.confirmpassword,
        },
      })
        .then((res) => {
          console.log(res.data.access, "res");
          setLoader(false);
          localStorage.setItem("token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          toastMessages("User logged in successfully", successType);
          router.push("/home");
        })
        .catch((err) => {
          console.log(err, "error");
          setLoader(false);
          toastMessages(
            err?.response?.data?.error || DEFAULT_ERROR_MESSAGE
          );
        });
    } else {
      callApi({
        endPoint: "/register/",
        method: METHODS.post,
        instanceType: INSTANCE.auth,
        payload: {
          email: values.email,
          first_name: values?.first_name,
          last_name: values?.last_name,
        },
      })
        .then((res) => {
          console.log(res.data, "res");
          setLoader(false);
          localStorage.setItem("email", res.data.user.email);
          localStorage.setItem("first_name", res.data.user.first_name);
          localStorage.setItem("last_name", res.data.user.last_name);
          setVerifyMessage(true);
          toastMessages("User logged in successfully", successType);
        })
        .catch((err) => {
          console.log(err, "error");
          toastMessages(
            err?.response?.data?.message.email || DEFAULT_ERROR_MESSAGE
          );
          setLoader(false);
        });
    }
  };

  // const handleTabChange = (tab) => {
  //   setActiveTab(tab);
  //   reset();
  // };
  return (
    <div className="login-form-container">
      <AuthFormTitleSection title={"Sign Up!"} />
      {/* <TabSection
        activeTab={activeTab}
        handleTabChange={handleTabChange}
        tabs={TABS}
      /> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-5 rounded-none shadow-lg w-full"
      >
        <CommonTextInput
          fieldName={"first_name"}
          formConfig={formConfig}
          type="text"
          placeholder={"E.g. John"}
          rules={requiredValidation["first_name"]}
          label={"First Name"}
          disabled={key !== null}
        />
        <CommonTextInput
          fieldName={"last_name"}
          formConfig={formConfig}
          type="text" 
          placeholder={"E.g. Doe"}
          rules={requiredValidation["last_name"]}
          disabled={key !== null}
          label={"Last Name"}
        />
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

          {verifyMessage && (
            <p className="text-red-500">
              {"Email verification link has been sent to your email."}
            </p>
          )}

          <Button
            btnText={key !==null ? "✅VERIFIED" : "VERIFY"}
            btnType={"submit"}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 underline text-green-500"
            disabled={key !== null}
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
          onIconClick={()=>toggleShowPassword("password")}
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
          onIconClick={()=>toggleShowPassword("confirm_password")}
          icon={showPassword.confirm_password ? CLOSED_EYE : OPEN_EYE}
        />
        <CommonButton
          type={BUTTON_TYPE.submit}
          className="auth-btn"
          text="Register"
          loader={loader}
          disabled={key == null }
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
