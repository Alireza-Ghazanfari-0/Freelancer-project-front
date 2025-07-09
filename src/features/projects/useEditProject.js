import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { editProjectApi } from "../../services/projectServices";
import toast from "react-hot-toast";

export default function useEditProject() {
  const queryClient = useQueryClient();
  const { isPending: isEditingProject, mutate: editProject } = useMutation({
    mutationFn: editProjectApi,
    onSuccess: (data) => (
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] }),
      toast.success(data.message)
    ),
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isEditingProject, editProject };
}
