import React from "react";
import useAddNewCategory from "./useAddNewCategory";
import { useForm } from "react-hook-form";
import TextInputField from "../../ui/TextInputField";
import Loader from "../../ui/Loader";

function AddNewCategories({ setOpenWindow }) {
  const { uploadingNewCategory, addNewCategoryFunc } = useAddNewCategory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = function (data) {
    addNewCategoryFunc(
      { ...data, type: "project" },
      {
        onSettled: () => {
          setOpenWindow(false);
        },
      }
    );
  };
  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <TextInputField
        name="title"
        label="عنوان دسته بندی"
        type="text"
        register={register}
        errors={errors}
        validationCondition={{ required: "لطفا عنوان را وارد کنید" }}
      />
      <TextInputField
        name="description"
        label="توضیحات"
        type="text"
        register={register}
        errors={errors}
        validationCondition={{ required: "لطفا فیلد را کامل کنید" }}
      />
      <TextInputField
        name="englishTitle"
        label="عنوان انگلیسی"
        type="text"
        register={register}
        errors={errors}
        validationCondition={{ required: "لطفا عنوان را وارد کنید" }}
      />
      {uploadingNewCategory ? (
        <Loader />
      ) : (
        <button className="btn--confirm" type="submit">
          تایید
        </button>
      )}
    </form>
  );
}

export default AddNewCategories;
