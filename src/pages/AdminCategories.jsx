import React, { useState } from "react";
import CategoriesTable from "../features/categories/CategoriesTable";
import AddNewCategories from "../features/categories/AddNewCategories";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import Modal from "../ui/Modal";

function AdminCategories() {
  const [addCategoriesOpen, setAddCategoriesOpen] = useState(false);
  return (
    <div className="h-full w-full flex flex-col">
      <div className="mt-10 mb-8 ms-5 flex gap-x-20">
        <span className="flex items-center gap-x-1 text-title">
          <h1 className="text-2xl ">دسته بندی های موجود</h1>
          <MdOutlineCategory className="size-7" />
        </span>
        {/* مدال باید اضافه کرد */}
        <button
          className="btn flex items-center gap-x-1"
          onClick={() => setAddCategoriesOpen(true)}
        >
          <IoMdAddCircleOutline className="size-6" />
          <span>افزودن دسته بندی جدید</span>
        </button>
        <Modal
          openWindow={addCategoriesOpen}
          setOpenWindow={setAddCategoriesOpen}
          title="افزودن دسته بندی جدید"
        >
          <AddNewCategories setOpenWindow={setAddCategoriesOpen} />
        </Modal>
      </div>
      <div className="max-h-[70%]">
        <CategoriesTable />
      </div>
    </div>
  );
}

export default AdminCategories;
