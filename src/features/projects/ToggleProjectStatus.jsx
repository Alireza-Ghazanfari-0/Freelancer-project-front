import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { toggleProjectStatus } from "../../services/projectServices";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";

function ToggleProjectStatus({ project }) {
  const queryClient = useQueryClient();
  const [enabled, setEnabled] = useState(project.status === "OPEN");

  //   console.log(enabled);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: toggleProjectStatus,
  });

  const handleToggle = async function (value) {
    setEnabled(value);

    try {
      const res = await mutateAsync({
        id: project._id,
        data: { status: value ? "OPEN" : "CLOSED" },
      });
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
      //   setEnabled(!value);
    }
  };
  if (isPending) return <Loader />;
  return (
    <div className="flex items-center justify-center gap-x-1 ">
      <span>باز</span>
      <span>
        <Switch
          checked={enabled}
          onChange={handleToggle}
          className="group inline-flex h-5 w-9 items-center rounded-full bg-gray-200 transition data-checked:bg-blue-500"
        >
          <span className="size-4 -translate-x-5 rounded-full bg-purple-300 transition group-data-checked:translate-x-0" />
        </Switch>
      </span>
      <span>بسته</span>
    </div>
  );
}

export default ToggleProjectStatus;
