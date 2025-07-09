import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { addNewCategoryApi } from "../../services/categoryServices";
import toast from "react-hot-toast";

export default function useAddNewCategory() {
  const queryClient = useQueryClient();
  const { isPending: uploadingNewCategory, mutate: addNewCategoryFunc } =
    useMutation({
      mutationFn: addNewCategoryApi,
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["categories"] });
        toast.success(data.message);
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    });
  return { uploadingNewCategory, addNewCategoryFunc };
}
