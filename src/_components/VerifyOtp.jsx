import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import ErrorMessage from "./_common/ErrorMessage";
import CommonButton from "./_common/CommonButton";
const OTP_LENGTH = 6;

const VerifyOtp = ({ handleSubmitOTP }) => {
  const [otp, setOtpValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState({
    show: false,
    msg: "",
  });
  const [resendTimer, setResendTimer] = useState();
  const [timeLeft, setTimeLeft] = useState(60);
  const [intervalId, setIntervalId] = useState();

//   useEffect(() => {
//     if (timeLeft > 0) {
//       const tempIntervalId = setInterval(() => {
//         setTimeLeft((prevTime) => prevTime - 1);
//       }, 1000);
//     }

//     // setIntervalId(tempIntervalId);
//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     console.log(timeLeft, "123timeleft");
//     if (timeLeft === 0) {
//       clearInterval(intervalId);
//       return;
//     }
//   }, [timeLeft]);

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
      <h3 className="text-[var(--secondary-color)] font-medium text-base">
        Resend Code
      </h3>
      <CommonButton
        type="button"
        text="Submit"
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
