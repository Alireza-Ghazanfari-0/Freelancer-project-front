import React, { useState } from "react";
import DarkToggle from "../../ui/DarkToggle";
import { useForm } from "react-hook-form";
import TextInputField from "../../ui/TextInputField";
import RadioInput from "../../ui/RadioInput";
import { ImInfo } from "react-icons/im";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authenticationService";
import Loader from "../../ui/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FcAssistant } from "react-icons/fc";

function CompleteProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm();
  const selectedRole = watch("role");
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const completionHandler = async function (data) {
    try {
      console.log(data);
      const res = await mutateAsync(data);
      toast.success(res.message);
      if (res.user.status !== 2) {
        navigate("/");
        toast(
          <div className="flex flex-row">
            <span className="inline-block">
              پروفایل شما در انتظار تایید میباشد
            </span>
            <span>
              <FcAssistant className="size-8" />
            </span>
          </div>
        );
        return;
      }
      if (res.user.role === "FREELANCER") {
        return navigate("/freelancer");
      }
      if (res.user.role === "OWNER") {
        return navigate("/owner");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div>
      <DarkToggle />
      <div className="container sm:max-w-sm mt-12 relative">
        <form
          className="rounded-2xl p-4 space-y-8 bg-completion-window"
          onSubmit={handleSubmit(completionHandler)}
        >
          <div className="font-bold text-2xl pt-5 pb-5 flex gap-1 justify-center items-center text-completion-title ">
            <h1>فرم تکمیل مشخصات</h1>
            <ImInfo />
          </div>

          <TextInputField
            register={register}
            name="name"
            type="text"
            label="نام و نام خانوادگی"
            errors={errors}
            validationCondition={{
              required: "* نام و نام خانوادگی خود را وارد نمایید",
            }}
          />
          <TextInputField
            register={register}
            name="email"
            type="email"
            label="ایمیل"
            errors={errors}
            validationCondition={{
              required: "* ایمیل خود را وارد نمایید",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "* لطفاً یک ایمیل معتبر وارد کنید",
              },
            }}
          />
          <div className="flex justify-center gap-4">
            <RadioInput
              label="کارفرما"
              name="role"
              register={register}
              value="OWNER"
              errors={errors}
              validationCondition={{
                required: "لطفا یک نقش را انتخاب نمایید",
              }}
              selectedValue={selectedRole}
            />
            <RadioInput
              label="فریلنسر"
              name="role"
              register={register}
              value="FREELANCER"
              errors={errors}
              selectedValue={selectedRole}
            />
          </div>
          {errors && errors["role"] && (
            <div className="text-error bg-white rounded inline-block px-1 text-sm">
              {errors["role"]?.message}
            </div>
          )}
          <div className="w-[70%] absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2">
            {isPending ? (
              <Loader />
            ) : (
              <button className="btn btn--completion w-full" type="submit">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
