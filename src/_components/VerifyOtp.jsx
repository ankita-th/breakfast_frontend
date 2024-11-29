import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import ErrorMessage from "./_common/ErrorMessage";
import CommonButton from "./_common/CommonButton";
import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { INSTANCE } from "@/app/_constant/UrlConstant";
import { successType, toastMessages } from "@/_utils/toastMessage";
import { RESEND_OTP_TIMER } from "@/_constants/constant";
const OTP_LENGTH = 6;

const VerifyOtp = ({ handleSubmitOTP, loader, payloadValues }) => {
  const [otp, setOtpValue] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState({
    show: false,
    msg: "",
  });
  const [resendTimer, setResendTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(RESEND_OTP_TIMER);

  useEffect(() => {
    if (timeLeft > 0) {
      const tempIntervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(tempIntervalId);
    } else {
      setResendTimer(true);
    }
  }, [timeLeft]);

  const handleOtpInputChange = (otp) => {
    if (isNaN(otp)) return;
    setOtpValue(otp);
    if (showErrorMsg.show) {
      setShowErrorMsg({ show: false, msg: "" });
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleResendOtp = () => {
    callApi({
      endPoint: "password/resend-otp/",
      method: METHODS.post,
      instanceType: INSTANCE.auth,
      payload: {
        email: payloadValues.email,
      },
    })
      .then((res) => {
        console.log(res, "res");
        toastMessages(res.data.message, successType);
        setTimeLeft(RESEND_OTP_TIMER);
        setResendTimer(false);
      })
      .catch((err) => {
        console.log(err, "error");
        toastMessages(err?.response?.data?.message || DEFAULT_ERROR_MESSAGE);
      });
  };
  return (
    <div className="flex items-center flex-col">
      <h2 className="font-medium text-base">Enter Code</h2>
      <OTPInput
        value={otp}
        onChange={handleOtpInputChange}
        numInputs={OTP_LENGTH}
        renderInput={(props) => (
          <input
            {...props}
            className="p-4 m-[5px_3px_20px] h-[50px] rounded-lg border border-light-gray"
          />
        )}
        inputStyle={{ width: "50px" }}
        isInputNum={true}
        containerStyle="OTPInputContainer"
      />
      {showErrorMsg.show && <ErrorMessage errors={showErrorMsg?.message} />}
      <span className="primary-text-color font-semibold">
        {formatTime(timeLeft)}
      </span>
      <h3
        className={
          resendTimer
            ? "text-[var(--secondary-color)] font-medium text-base text-green-500 cursor-pointer"
            : "text-[var(--secondary-color)] font-medium text-base cursor-not-allowed"
        }
        onClick={resendTimer ? handleResendOtp : undefined}
      >
        Resend Code
      </h3>
      <CommonButton
        type="button"
        text="Submit"
        loader={loader}
        disabled={loader}
        onClick={() => {
          if (otp.length !== OTP_LENGTH) {
            setShowErrorMsg({ show: true, message: "Please enter OTP" });
          } else {
            handleSubmitOTP(otp);
          }
        }}
      />
    </div>
  );
};

export default VerifyOtp;
