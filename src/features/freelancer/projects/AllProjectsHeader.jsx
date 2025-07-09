import React from "react";
import DropDownSelection from "../../../ui/DropDownSelection";
import ItemSelection from "../../../ui/ItemSelection";
import useCategories from "../../categories/useCategories";
import Loader from "../../../ui/Loader";

function AllProjectsHeader() {
  const { categories, isLoading } = useCategories();
  if (isLoading) return <Loader />;
  //   console.log(categories);

  const summarizedCategories = categories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));
  //   console.log(summarizedCategories);

  return (
    <div className="flex flex-col space-y-5 w-full text-start mt-15 ">
      <span className="text-title text-xl font-bold ps-10">
        لیست پروژه های موجود
      </span>
      <span className="flex flex-col lg:flex-row ps-10 justify-end gap-x-7 gap-y-2 container">
        <ItemSelection
          // بخاطر فیلتر های بک اند ALL حتما همینجوری نوشته شود و بقیه هم همینطور
          optionList={[
            { label: "همه", value: "ALL" },
            { label: "باز", value: "OPEN" },
            { label: "بسته", value: "CLOSED" },
          ]}
          selectItem="status"
        />
        <DropDownSelection
          // بخاطر فیلتر های بک اند earliest latest حتما همینجوری نوشته شود و بقیه هم همینطور
          optionList={[
            { label: "مرتب سازی (جدیترین)", value: "earliest" },
            { label: "مرتب سازی (قدیمی ترین)", value: "latest" },
          ]}
          searchItem="sort"
        />
        <DropDownSelection
          // بخاطر فیلتر های بک اند ALL حتما همینجوری نوشته شود و بقیه هم همینطور
          optionList={[
            { label: "دسته بندی (همه)", value: "ALL" },
            ...summarizedCategories,
          ]}
          searchItem="category"
        />
      </span>
    </div>
  );
}

export default AllProjectsHeader;
