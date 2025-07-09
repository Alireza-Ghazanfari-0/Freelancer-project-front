import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProject from "../features/project/useProject";
import Loader from "../ui/Loader";
import ProposalTable from "../features/project/ProposalTable";
import { LuCircleArrowRight } from "react-icons/lu";
import toast from "react-hot-toast";

function Project() {
  const navigate = useNavigate();
  const { isLoading, project, error, isError } = useProject();
  if (isError) {
    toast.error(error?.response?.data?.message);
    return;
  }
  // console.log(project);
  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col mt-5 h-full w-full space-y-7">
      <div className="flex items-center gap-x-10 mt-10 ms-8">
        <LuCircleArrowRight
          className="size-6 cursor-pointer text-success"
          onClick={() => navigate(-1)}
        />

        <span className="text-title text-xl font-bold">
          {" "}
          لیست درخواست های پروژه: {project.title}
        </span>
      </div>
      <div className="max-h-[70%]">
        <ProposalTable project={project} />
      </div>
    </div>
  );
}

export default Project;
