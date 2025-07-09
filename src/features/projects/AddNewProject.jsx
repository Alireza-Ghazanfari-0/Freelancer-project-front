import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectionField from "../../ui/SelectionField";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../categories/useCategories";
import useAddNewProject from "../projects/useAddNewProject";
import Loader from "../../ui/Loader";
import toast from "react-hot-toast";
import useEditProject from "../projects/useEditProject";
import TextInputField from "../../ui/TextInputField";

function AddNewProject({ setOpenWindow, project = {} }) {
  // console.log(project);
  // console.log(project._id);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: project.title,
      description: project.description,
      budget: project.budget,
      budgetCurrency: project.budgetCurrency,
      category: project.category?._id,
    },
  });
  const [tags, setTags] = useState(project.tags || ["برنامه نویسی"]);
  const [date, setDate] = useState(project.deadline || new Date());
  const { categories, isLoading } = useCategories();
  const { isAddingNewProject, addNewProject } = useAddNewProject();
  const { isEditingProject, editProject } = useEditProject();

  const waiting = project._id ? isEditingProject : isAddingNewProject;
  // console.log(categories);
  const onSubmit = function (data) {
    // console.log({ ...data, tags, date });
    const newData = { ...data, tags, deadline: date };
    // console.log("🟢 ارسال‌شونده به سرور:", newData);
    if (project._id) {
      editProject(
        { id: project._id, data: newData },
        {
          onSuccess: () => {
            setOpenWindow(false);
          },
        }
      );
    } else {
      addNewProject(newData, {
        onSuccess: () => setOpenWindow(false),
        // onError: (res) => toast.error(res.response.data.message),
      });
    }

    // console.log(res);
  };

  return (
    <div className="">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <TextInputField
          name="title"
          type="text"
          label="عنوان"
          register={register}
          errors={errors}
          validationCondition={{ required: "عنوان را وارد کنید" }}
          classParameter="flex flex-col "
        />
        <TextInputField
          name="description"
          type="text"
          label="توضیحات"
          register={register}
          errors={errors}
          // validationCondition = {}
          classParameter="flex flex-col "
        />
        <TextInputField
          name="budget"
          type="text"
          label="بودجه"
          register={register}
          errors={errors}
          // validationCondition = {}
          classParameter="flex flex-col"
        />
        <SelectionField
          name="budgetCurrency"
          type="text"
          label="واحد بودجه"
          register={register}
          errors={errors}
          // validationCondition = {}
          classParameter="flex flex-col"
          options={[
            { title: "ریال", value: "rial" },
            { title: "دلار", value: "dolar" },
          ]}
        />
        <SelectionField
          name="category"
          type="text"
          label="دسته بندی"
          register={register}
          errors={errors}
          // validationCondition = {}
          classParameter="flex flex-col"
          options={categories}
        />
        <div>
          <div className="block mb-4 text-modal-text font-semibold">تگ ها</div>
          <TagsInput
            value={tags}
            onChange={setTags}
            name="tags"
            placeHolder="enter tags"
          />
        </div>
        <DatePickerField date={date} setDate={setDate} label="ددلاین" />
        {waiting ? (
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

export default AddNewProject;
