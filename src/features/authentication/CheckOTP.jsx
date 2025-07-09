import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import OTPInput from "react-otp-input";
import { checkOTP } from "../../services/authenticationService";
import Loader from "../../ui/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CheckOTP({
  onBack,
  sentPhoneNumberData,
  resendCodeHandler,
  phoneNumber,
}) {
  const defaultTime = 20;
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(defaultTime);
  const navigate = useNavigate();

  const {
    isPending: isSendingVerificationCode,
    data: sentVerificationCodeData,
    mutateAsync,
  } = useMutation({
    mutationFn: checkOTP,
  });

  const checkVerificationCodeHandler = async function (e) {
    e.preventDefault();
    try {
      // console.log("a");
      // console.log({ phoneNumber, otp });

      const res = await mutateAsync({ phoneNumber, otp });
      console.log(res);
      toast.success(res.message);
      if (res.user.isActive) {
        if (res.user.role === "OWNER") navigate("/owner");
        if (res.user.role === "ADMIN") navigate("/admin");
        if (res.user.role === "FREELANCER") navigate("/freelancer");
      } else {
        navigate("/complete-profile");
      }
      // toast.success(res.message);
    } catch (error) {
      // console.log(error);
      // toast.error(error.message);
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);
  return (
    <div className="flex">
      <div className="bg-otp container h-65 sm:max-w-sm mt-20 pt-3 rounded-2xl ">
        <div className="text-otp-note font-semibold text-sm mb-3">
          {sentPhoneNumberData?.message}
        </div>
        <div className=" flex justify-between pb-3">
          <button className="btn" onClick={onBack}>
            <HiArrowRight />
          </button>
          <div>
            {time > 0 ? (
              <p className="font-light text-error">
                ({time} ثانیه تا ارسال مجدد کد)
              </p>
            ) : (
              <button
                className="btn btn--secondary"
                onClick={() => {
                  resendCodeHandler();
                  setTime(defaultTime);
                }}
              >
                ارسال مجدد کد
              </button>
            )}
          </div>
        </div>

        <form className="space-y-7" onSubmit={checkVerificationCodeHandler}>
          <p className="block mb-6 text-otp-label font-semibold">
            لطفا کد ارسال شده را وارد نمایید
          </p>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span className="text-blue-400">-</span>}
            renderInput={(props) => <input type="number" {...props} />}
            containerStyle="flex flex-row-reverse justify-center gap-x-3"
            inputStyle=" border border-blue-500 rounded text-otp-input-text !w-[1.6rem]"
          />
          {isSendingVerificationCode ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full mb-4">
              ارسال
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
export default CheckOTP;
