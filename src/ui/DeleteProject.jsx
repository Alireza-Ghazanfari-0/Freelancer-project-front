import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { deleteProject } from "../services/projectServices";
import Loader from "./Loader";
import toast from "react-hot-toast";

function DeleteProject({ projectId, setOpenWindow }) {
  const queryClient = useQueryClient();
  const { isPending, mutate: removeProject } = useMutation({
    mutationFn: deleteProject,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
      setOpenWindow(false);
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return (
    <div className="space-y-5">
      <div className="text-lg">آیا از حذف پروژه اطمینان دارید؟</div>
      {isPending ? (
        <Loader />
      ) : (
        <div className="flex gap-x-2 mb-1">
          <button
            className="btn bg-error text-white w-[50%]"
            onClick={() => removeProject(projectId)}
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

export default DeleteProject;
