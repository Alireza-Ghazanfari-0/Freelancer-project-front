import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { addNewProjectApi } from "../../services/projectServices";
import toast from "react-hot-toast";

export default function useAddNewProject() {
  const queryClient = useQueryClient();
  const { isPending: isAddingNewProject, mutate: addNewProject } = useMutation({
    mutationFn: addNewProjectApi,
    onSuccess: (data) => (
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] }),
      //   console.log(data.message),
      toast.success(data.message)
    ),
    onError: (err) => toast.error(err?.response?.data?.message),
    // console.log(err?.response?.data);
  });
  return { isAddingNewProject, addNewProject };
}
