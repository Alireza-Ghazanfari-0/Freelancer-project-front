import React, { useState } from "react";
import SendOTP from "./SendOTP";
import CheckOTP from "./CheckOTP";
import DarkToggle from "../../ui/DarkToggle";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "../../services/authenticationService";
import Logo from "../../ui/Logo";

function Auth() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm();
  const [step, setStep] = useState(1);

  const {
    isPending: isSendingPhoneNumber,
    // error,
    data: sentPhoneNumberData,
    mutateAsync,
  } = useMutation({
    mutationFn: getOTP,
  });

  const sendOTPHandler = async function (data) {
    try {
      // data = { phoneNumber: "0936" }
      const res = await mutateAsync(data);
      console.log(res);
      // console.log(getValues("phoneNumber"));

      toast.success(res.message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const renderSubmit = function () {
    if (step === 1) {
      return (
        <SendOTP
          onSubmit={handleSubmit(sendOTPHandler)}
          register={register}
          errors={errors}
          isSendingPhoneNumber={isSendingPhoneNumber}
        />
      );
    } else {
      return (
        <CheckOTP
          onBack={() => setStep((s) => s - 1)}
          sentPhoneNumberData={sentPhoneNumberData}
          resendCodeHandler={handleSubmit(sendOTPHandler)}
          phoneNumber={getValues("phoneNumber")}
        />
      );
    }
  };

  return (
    <div className="h-screen">
      <span className="flex justify-between">
        <Logo />
        <DarkToggle />
      </span>

      {renderSubmit()}
    </div>
  );
}

export default Auth;
