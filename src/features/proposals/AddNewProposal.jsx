import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInputField from "../../ui/TextInputField";
import SelectionField from "../../ui/SelectionField";
import useAddNewProposal from "./useAddNewProposal";
import Loader from "../../ui/Loader";
import toast from "react-hot-toast";
// import { useSearchParams } from "react-router-dom";

function AddNewProposal({ setOpenWindow, project }) {
  // const [searchParams, setSearchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isAddingProposal, addNewProposalFunc } = useAddNewProposal();

  const projectId = project._id;

  const onsubmit = async function (data) {
    // console.log({ ...data, projectId });
    try {
      const res = await addNewProposalFunc({ ...data, projectId });
      toast.success(res.message);
      setOpenWindow(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="">
      <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
        <TextInputField
          register={register}
          name="description"
          label="توضیحات"
          type="text"
          errors={errors}
          validationCondition={{ required: "توضیحات را وارد کنید" }}
        />
        <TextInputField
          register={register}
          name="price"
          label="قیمت"
          type="number"
          errors={errors}
          validationCondition={{ required: "قیمت را وارد کنید" }}
        />
        <SelectionField
          label="واحد"
          register={register}
          name="budgetCurrency"
          options={[
            { title: "ریال", value: "rial" },
            { title: "دلار", value: "dolar" },
          ]}
          errors={errors}
        />
        <TextInputField
          register={register}
          name="duration"
          label="مدت زمان (روز) "
          type="number"
          errors={errors}
          validationCondition={{
            required: "مدت زمان انجام پروژه را وارد کنید",
          }}
        />
        {isAddingProposal ? (
          <Loader />
        ) : (
          <button className="btn--confirm" type="submit">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default AddNewProposal;
