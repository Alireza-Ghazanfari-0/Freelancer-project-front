import React from "react";
import Loader from "../../ui/Loader";
import TextInputField from "../../ui/TextInputField";

function SendOTP({ onSubmit, register, errors, isSendingPhoneNumber }) {
  return (
    <div className="flex">
      <div className="bg-otp container sm:max-w-sm mt-20 pt-7 rounded-2xl ">
        <form className="space-y-7" onSubmit={onSubmit}>
          <TextInputField
            label="لطفا شماره موبایل خود را وارد نمایید"
            Type="text"
            name="phoneNumber"
            register={register}
            errors={errors}
            validationCondition={{
              required: "شماره موبایل الزامی است",
              pattern: {
                value: /^[0-9]+$/i,
                message: "فقط عدد مجاز است",
              },
            }}
          />
          {isSendingPhoneNumber ? (
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

export default SendOTP;
