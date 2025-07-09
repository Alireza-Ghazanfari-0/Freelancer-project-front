import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { deleteCategoryApi } from "../../services/categoryServices";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";

function DeleteCategories({ categoryId, setOpenWindow }) {
  const queryClient = useQueryClient();
  const { isPending: deletingCategory, mutate: deleteCategoryFunc } =
    useMutation({
      mutationFn: deleteCategoryApi,
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["categories"] });
        toast.success(data.message);
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message);
      },
      onSettled: () => {
        setOpenWindow(false);
      },
    });

  return (
    <div className="space-y-5">
      <div className="text-lg">آیا از حذف دسته بندی اطمینان دارید؟</div>
      {deletingCategory ? (
        <Loader />
      ) : (
        <div className="flex gap-x-2 mb-1">
          <button
            className="btn bg-error text-white w-[50%]"
            onClick={() => deleteCategoryFunc(categoryId)}
          >
            تایید
          </button>
          <button
            className="btn bg-success text-white w-[50%]"
            onClick={() => setOpenWindow(false)}
          >
            لغو
          </button>
        </div>
      )}
    </div>
  );
}

export default DeleteCategories;
