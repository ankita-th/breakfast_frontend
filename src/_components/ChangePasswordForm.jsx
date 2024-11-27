"use client";
import React, { useState } from "react";
import Image from "next/image";
import ErrorMessage from "./_common/ErrorMessage";
import { useForm } from "react-hook-form";
import CommonButton from "./_common/CommonButton";
import { requiredValidation } from "@/_validations/validations";
import { CLOSED_EYE, OPEN_EYE } from "../../public/images/SvgIcons";
import PasswordInputField from "./_common/PasswordInputField";
import { PASSWORD_REGEX } from "@/_validations/authValidations";
import { PASSWORD_PATTEN_ERROR } from "@/app/_constant/ErrorMessagesConstant";

const ChangePasswordForm = () => {
  const formConfig = useForm();
  const {
    setValue,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    register,
    formState: { errors },
  } = formConfig;
  const [showPass, setShowPass] = useState({
    password: false,
    confirm_password: false,
  });
  const handleToglePassword = (type) => {
    console.log(type,"type")

    setShowPass({ ...showPass, [type]: !showPass?.[type] });
  };

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

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="label">Password</div>
        <PasswordInputField
          register={register("password", {
            ...requiredValidation("Password"),
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
      </div>

      {/* confirm password */}
      <div>
        <div className="label">Confirm Password</div>
        <PasswordInputField
          register={register("confirm_password", {
            ...requiredValidation("Confirm password"),
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
      <CommonButton text="Submit" type="submit" />
    </form>
  );
};

export default ChangePasswordForm;
