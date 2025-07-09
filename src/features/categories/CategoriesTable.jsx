import React, { useState } from "react";
import DeleteCategories from "./DeleteCategories";
import useCategories from "./useCategories";
import Loader from "../../ui/Loader";
import { MdDeleteForever } from "react-icons/md";
import Modal from "../../ui/Modal";

function CategoriesTable() {
  const { isLoading, categories, error, isError } = useCategories();

  if (isError) {
    toast.error(error?.response?.data?.message);
    return;
  }
  if (isLoading) return <Loader />;
  // console.log(projects);

  if (!categories.length)
    return (
      <div className=" flex items-center justify-center gap-x-2">
        <PiEmptyBold className="size-6" />
        <span className="text-xl">پروژه ای وجود ندارد!</span>
        <TbMoodEmpty className="size-6" />
      </div>
    );

  return (
    <div className="rounded-xl h-full overflow-y-auto">
      <table className="w-full">
        <thead className="table-header whitespace-nowrap z-9 sticky top-0 ">
          <tr className="">
            <th>#</th>
            <th>دسته بندی</th>
            <th>توضیحات</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className="">
          {categories.map((item, index) => (
            <TableRow key={item._id} category={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoriesTable;

const TableRow = function ({ category, index }) {
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <tr className="table-row hover:bg-sidebar">
      <td>{index + 1}</td>
      <td>{category.title}</td>
      <td>{category.description}</td>
      <td>
        <Operation
          category={category}
          openDelete={openDelete}
          setOpenDelete={setOpenDelete}
        />
      </td>
    </tr>
  );
};

const Operation = function ({ category, openDelete, setOpenDelete }) {
  return (
    <div className=" flex justify-center">
      <span className="">
        <MdDeleteForever
          className="size-6 cursor-pointer text-error"
          onClick={() => setOpenDelete(true)}
        />
      </span>
      <Modal
        title={`حذف دسته بندی ${category.title}`}
        openWindow={openDelete}
        setOpenWindow={setOpenDelete}
      >
        <DeleteCategories
          categoryId={category._id}
          setOpenWindow={setOpenDelete}
        />
      </Modal>
    </div>
  );
};
